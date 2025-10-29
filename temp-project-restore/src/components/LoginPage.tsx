"use client"

import { useState, useEffect } from 'react'
import { Eye, EyeOff, ArrowLeft, Shield, Clock, Users } from 'lucide-react'
import { authService, type AuthState } from '@/lib/auth'

interface LoginPageProps {
  onLoginSuccess: () => void
  onBackToHome: () => void
}

export default function LoginPage({ onLoginSuccess, onBackToHome }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const [authState, setAuthState] = useState<AuthState>(authService.getAuthState())

  useEffect(() => {
    const unsubscribe = authService.subscribe(setAuthState)
    return unsubscribe
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setMessageType('')

    if (!email || !password) {
      setMessage('Por favor, preencha todos os campos')
      setMessageType('error')
      return
    }

    const result = await authService.login(email, password)
    
    setMessage(result.message)
    setMessageType(result.success ? 'success' : 'error')

    if (result.success) {
      setTimeout(() => {
        onLoginSuccess()
      }, 1500)
    }
  }

  const handleDemoLogin = async (userEmail: string) => {
    setEmail(userEmail)
    setPassword('123456')
    
    const result = await authService.login(userEmail, '123456')
    setMessage(result.message)
    setMessageType(result.success ? 'success' : 'error')

    if (result.success) {
      setTimeout(() => {
        onLoginSuccess()
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#0D2F4A] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Início
        </button>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-[#0B2A47] mb-2">+POTENTE</div>
            <h1 className="text-2xl font-bold text-[#0A2540] mb-2">Área do Cliente</h1>
            <p className="text-gray-600">Faça login para acessar sua conta</p>
          </div>

          {/* Message */}
          {message && (
            <div className={`p-4 rounded-2xl mb-6 text-center ${
              messageType === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B] transition-colors"
                placeholder="seu@email.com"
                disabled={authState.loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B] transition-colors pr-12"
                  placeholder="Sua senha"
                  disabled={authState.loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={authState.loading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={authState.loading}
              className="w-full bg-[#00796B] text-white py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {authState.loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-4">Contas de demonstração:</p>
            <div className="space-y-2">
              <button
                onClick={() => handleDemoLogin('carlos@email.com')}
                disabled={authState.loading}
                className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors text-sm disabled:opacity-50"
              >
                <div className="font-medium text-[#0A2540]">Carlos Mendes</div>
                <div className="text-gray-600">carlos@email.com • 123456</div>
              </button>
              <button
                onClick={() => handleDemoLogin('roberto@email.com')}
                disabled={authState.loading}
                className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors text-sm disabled:opacity-50"
              >
                <div className="font-medium text-[#0A2540]">Roberto Silva</div>
                <div className="text-gray-600">roberto@email.com • 123456</div>
              </button>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Sessão Segura</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Acesso Individual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>&copy; 2024 +POTENTE. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}