"use client"

import { supabase } from '@/lib/supabase'

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  birthDate?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  loading: boolean
}

class AuthService {
  private static instance: AuthService
  private authState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false
  }
  private listeners: ((state: AuthState) => void)[] = []

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  constructor() {
    // Verificar se há sessão ativa no Supabase
    if (typeof window !== 'undefined') {
      this.initializeAuth()
    }
  }

  private async initializeAuth() {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        await this.loadUserProfile(session.user.id)
      }

      // Escutar mudanças de autenticação
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          await this.loadUserProfile(session.user.id)
          
          // Vincular respostas anônimas após login
          const sessionId = this.getSessionId()
          if (sessionId) {
            await this.linkAnonymousQuizResponses(session.user.id, sessionId)
          }
        } else if (event === 'SIGNED_OUT') {
          this.authState = {
            isAuthenticated: false,
            user: null,
            loading: false
          }
          this.clearStoredSession()
          this.notifyListeners()
        }
      })
    } catch (error) {
      console.error('Erro ao inicializar autenticação:', error)
    }
  }

  private async loadUserProfile(userId: string) {
    try {
      const response = await fetch(`/api/profile?userId=${userId}`)
      const result = await response.json()

      if (result.ok && result.profile) {
        const user: User = {
          id: result.profile.user_id,
          name: result.profile.name,
          email: result.profile.email,
          phone: result.profile.phone,
          birthDate: result.profile.birth_date
        }

        this.authState = {
          isAuthenticated: true,
          user,
          loading: false
        }

        this.saveSession(user)
        this.notifyListeners()
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error)
    }
  }

  private saveSession(user: User) {
    try {
      localStorage.setItem('auth_user', JSON.stringify(user))
      localStorage.setItem('auth_timestamp', Date.now().toString())
    } catch (error) {
      console.error('Erro ao salvar sessão:', error)
    }
  }

  private clearStoredSession() {
    try {
      localStorage.removeItem('auth_user')
      localStorage.removeItem('auth_timestamp')
    } catch (error) {
      console.error('Erro ao limpar sessão:', error)
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.authState))
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  getAuthState(): AuthState {
    return { ...this.authState }
  }

  async signUp(email: string, password: string, userData: { name: string; phone?: string; birthDate?: string }): Promise<{ success: boolean; message: string }> {
    this.authState.loading = true
    this.notifyListeners()

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: userData.name,
            phone: userData.phone,
            birth_date: userData.birthDate
          }
        }
      })

      if (error) {
        this.authState.loading = false
        this.notifyListeners()
        return { success: false, message: error.message }
      }

      if (data.user) {
        // Criar perfil no banco
        await this.createProfile(data.user.id, {
          name: userData.name,
          email,
          phone: userData.phone,
          birthDate: userData.birthDate
        })
      }

      this.authState.loading = false
      this.notifyListeners()

      return { success: true, message: 'Conta criada com sucesso! Verifique seu email.' }
    } catch (error) {
      this.authState.loading = false
      this.notifyListeners()
      return { success: false, message: 'Erro interno. Tente novamente.' }
    }
  }

  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    this.authState.loading = true
    this.notifyListeners()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        this.authState.loading = false
        this.notifyListeners()
        return { success: false, message: 'Email ou senha incorretos' }
      }

      if (data.user) {
        await this.loadUserProfile(data.user.id)
        
        // Vincular respostas anônimas se existirem
        const sessionId = this.getSessionId()
        if (sessionId) {
          await this.linkAnonymousQuizResponses(data.user.id, sessionId)
        }
      }

      return { success: true, message: 'Login realizado com sucesso!' }
    } catch (error) {
      this.authState.loading = false
      this.notifyListeners()
      return { success: false, message: 'Erro interno. Tente novamente.' }
    }
  }

  async logout(): Promise<void> {
    try {
      await supabase.auth.signOut()
      
      this.authState = {
        isAuthenticated: false,
        user: null,
        loading: false
      }
      
      this.clearStoredSession()
      this.notifyListeners()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  private async createProfile(userId: string, userData: { name: string; email: string; phone?: string; birthDate?: string }) {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          birthDate: userData.birthDate
        })
      })

      const result = await response.json()
      if (!result.ok) {
        console.error('Erro ao criar perfil:', result.error)
      }
    } catch (error) {
      console.error('Erro ao criar perfil:', error)
    }
  }

  private async linkAnonymousQuizResponses(userId: string, sessionId: string) {
    try {
      const response = await fetch('/api/attach-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          sessionId
        })
      })

      const result = await response.json()
      if (result.ok && result.updatedResponses > 0) {
        console.log(`${result.updatedResponses} respostas vinculadas ao usuário`)
      }
    } catch (error) {
      console.error('Erro ao vincular respostas anônimas:', error)
    }
  }

  getSessionId(): string {
    if (typeof window === 'undefined') return ''
    
    let sessionId = localStorage.getItem('quiz_session_id')
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('quiz_session_id', sessionId)
    }
    return sessionId
  }

  isSessionValid(): boolean {
    if (!this.authState.isAuthenticated) return false
    
    try {
      const timestamp = localStorage.getItem('auth_timestamp')
      if (!timestamp) return false
      
      const sessionAge = Date.now() - parseInt(timestamp)
      const maxAge = 7 * 24 * 60 * 60 * 1000 // 7 dias
      
      if (sessionAge > maxAge) {
        this.logout()
        return false
      }
      
      return true
    } catch {
      return false
    }
  }
}

export const authService = AuthService.getInstance()