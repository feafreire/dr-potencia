"use client"

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

// Simulação de usuários para demonstração
const DEMO_USERS = [
  {
    id: '1',
    name: 'Carlos Mendes',
    email: 'carlos@email.com',
    password: '123456',
    phone: '(11) 99999-9999',
    birthDate: '1972-05-15'
  },
  {
    id: '2', 
    name: 'Roberto Silva',
    email: 'roberto@email.com',
    password: '123456',
    phone: '(11) 88888-8888',
    birthDate: '1980-03-20'
  }
]

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
    // Verificar se há sessão salva no localStorage
    if (typeof window !== 'undefined') {
      this.loadStoredSession()
    }
  }

  private loadStoredSession() {
    try {
      const storedUser = localStorage.getItem('auth_user')
      const storedToken = localStorage.getItem('auth_token')
      
      if (storedUser && storedToken) {
        const user = JSON.parse(storedUser)
        this.authState = {
          isAuthenticated: true,
          user,
          loading: false
        }
        this.notifyListeners()
      }
    } catch (error) {
      console.error('Erro ao carregar sessão:', error)
      this.clearStoredSession()
    }
  }

  private saveSession(user: User) {
    try {
      const token = this.generateToken()
      localStorage.setItem('auth_user', JSON.stringify(user))
      localStorage.setItem('auth_token', token)
      localStorage.setItem('auth_timestamp', Date.now().toString())
    } catch (error) {
      console.error('Erro ao salvar sessão:', error)
    }
  }

  private clearStoredSession() {
    try {
      localStorage.removeItem('auth_user')
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_timestamp')
    } catch (error) {
      console.error('Erro ao limpar sessão:', error)
    }
  }

  private generateToken(): string {
    return btoa(Date.now().toString() + Math.random().toString())
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

  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    this.authState.loading = true
    this.notifyListeners()

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
      const user = DEMO_USERS.find(u => u.email === email && u.password === password)
      
      if (!user) {
        this.authState.loading = false
        this.notifyListeners()
        return { success: false, message: 'Email ou senha incorretos' }
      }

      const { password: _, ...userWithoutPassword } = user
      
      this.authState = {
        isAuthenticated: true,
        user: userWithoutPassword,
        loading: false
      }

      this.saveSession(userWithoutPassword)
      this.notifyListeners()

      return { success: true, message: 'Login realizado com sucesso!' }
    } catch (error) {
      this.authState.loading = false
      this.notifyListeners()
      return { success: false, message: 'Erro interno. Tente novamente.' }
    }
  }

  async logout(): Promise<void> {
    this.authState = {
      isAuthenticated: false,
      user: null,
      loading: false
    }
    
    this.clearStoredSession()
    this.notifyListeners()
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