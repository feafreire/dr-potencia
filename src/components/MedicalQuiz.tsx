'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Shield, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { authService } from '@/lib/auth'
import { useRouter } from 'next/navigation'

interface QuizQuestion {
  id: number
  question: string
  options?: string[]
  type: 'text' | 'single' | 'multiple'
  placeholder?: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu nome?",
    type: 'text',
    placeholder: "Digite seu nome..."
  },
  {
    id: 2,
    question: "Qual seu e-mail?",
    type: 'text',
    placeholder: "Digite seu e-mail..."
  },
  {
    id: 3,
    question: "Qual seu número de WhatsApp para o Dr. Potência poder entrar em contato:",
    type: 'text',
    placeholder: "Ex: (11) 99999-0000"
  },
  {
    id: 4,
    question: "Qual a sua idade?",
    options: ["18–25", "26–35", "36–45", "46–55", "56+"],
    type: 'single'
  },
  {
    id: 5,
    question: "Você está em qual dessas situações no momento?",
    options: [
      "Casado ou em relacionamento fixo",
      "Solteiro",
      "Divorciado",
      "Viúvo"
    ],
    type: 'single'
  },
  {
    id: 6,
    question: "Como você classificaria sua rotina hoje?",
    options: [
      "Estressante, trabalho e tenho pouco tempo livre",
      "Moderada, consigo cuidar um pouco de mim",
      "Tranquila, com tempo para lazer",
      "Aposentado, tenho mais tempo disponível"
    ],
    type: 'single'
  },
  {
    id: 7,
    question: "Qual dessas situações mais descreve o que você vem enfrentando?",
    options: [
      "Dificuldade em manter ereção firme",
      "Ejaculação muito rápida",
      "Pouca vontade ou libido",
      "Falta de energia / disposição geral",
      "Nenhum, quero apenas melhorar meu desempenho"
    ],
    type: 'single'
  },
  {
    id: 8,
    question: "Há quanto tempo você percebe esse problema?",
    options: [
      "Menos de 3 meses",
      "Entre 3 meses e 1 ano",
      "Mais de 1 ano"
    ],
    type: 'single'
  },
  {
    id: 9,
    question: "Isso te incomoda o suficiente a ponto de procurar ajuda?",
    options: [
      "Sim, quero resolver logo",
      "Sim, mas ainda não sei como tratar",
      "Não, estou apenas curioso"
    ],
    type: 'single'
  },
  {
    id: 10,
    question: "Consome álcool ou fuma?",
    options: [
      "Bebo e fumo com frequência",
      "Somente fumo",
      "Apenas bebo",
      "Não bebo e nem fumo"
    ],
    type: 'single'
  },
  {
    id: 11,
    question: "Você já tentou algum tipo de tratamento?",
    options: [
      "Sim, mas não funcionou",
      "Nunca tentei nada"
    ],
    type: 'single'
  },
  {
    id: 12,
    question: "Se encontrasse uma solução segura e discreta, você estaria disposto a testar?",
    options: [
      "Sim, imediatamente",
      "Talvez, se for acessível",
      "Não, apenas quero aprender sobre o tema"
    ],
    type: 'single'
  },
  {
    id: 13,
    question: "O que mais te motiva a querer resolver isso?",
    options: [
      "Melhorar minha vida sexual e autoestima",
      "Sentir mais confiança com a minha parceira",
      "Apenas curiosidade sobre o assunto"
    ],
    type: 'single'
  },
  {
    id: 14,
    question: "Se encontrasse uma solução comprovada e discreta para melhorar sua saúde sexual, quanto estaria disposto a investir por mês?",
    options: [
      "Até R$100",
      "Entre R$100 e R$200",
      "Entre R$200 e R$400",
      "Mais de R$400 se realmente funcionar"
    ],
    type: 'single'
  }
]

// Função para salvar no Google Sheets
async function saveQuizResponse(payload: any) {
  const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwW_4A_-utrY5pCj6lCTv8_jSOQY-Ks_DaYP67RgmqyY_R09yFpGxCHQ6yeg5u3C5TQnw/exec'
  
  const res = await fetch(WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: 'potente123',
      sessionId: window.localStorage.getItem('session_id') || null,
      user_agent: navigator.userAgent,
      ...payload // deve conter: name, email, phone, answers, utm_source, utm_medium, utm_campaign
    })
  })
  
  return res.json()
}

export default function MedicalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()

  // Gerar ou recuperar sessionId
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let sessionId = localStorage.getItem('session_id')
      if (!sessionId) {
        sessionId = crypto.randomUUID()
        localStorage.setItem('session_id', sessionId)
      }
    }
  }, [])

  const handleTextAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleOptionAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitError('')

    try {
      // 1) Coletar respostas automaticamente do form
      const form = e.currentTarget
      const fd = new FormData(form)
      const answersData: Record<string, any> = {}
      
      fd.forEach((value, key) => {
        if (key in answersData) {
          // agrega múltiplos valores (checkbox etc.)
          if (Array.isArray(answersData[key])) {
            (answersData[key] as any[]).push(value)
          } else {
            answersData[key] = [answersData[key], value]
          }
        } else {
          answersData[key] = value
        }
      })
      
      console.log('📦 answers coletadas:', answersData)
      
      if (!Object.keys(answersData).length) {
        alert('Preencha o quiz antes de enviar.')
        setIsSubmitting(false)
        return
      }

      // 2) Extrair campos obrigatórios
      const name = answersData['q1'] || ''
      const email = answersData['q2'] || ''
      const phone = answersData['q3'] || ''

      if (!name || !email || !phone) {
        alert('Por favor, preencha nome, e-mail e telefone.')
        setIsSubmitting(false)
        return
      }

      // 3) Preparar payload para Google Sheets
      const payload = {
        name,
        email,
        phone,
        answers: answersData,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || null,
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || null,
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || null
      }

      console.log('📤 Enviando para Google Sheets:', payload)

      // 4) Enviar para Google Sheets via Apps Script
      const result = await saveQuizResponse(payload)
      
      console.log('📥 Resposta do Google Sheets:', result)

      if (result.ok) {
        console.log('✅ {ok:true} - Funcionando!')
        setSubmitStatus('success')
        
        // Aguardar um pouco para mostrar o feedback de sucesso
        setTimeout(() => {
          ;(window as any).location.href = '/avaliacao/confirmacao'
        }, 1500)
      } else {
        throw new Error(result.error || 'Erro desconhecido do Google Sheets')
      }
      
    } catch (err: any) {
      console.error('🔴 Erro ao enviar para Google Sheets:', err)
      setSubmitStatus('error')
      setSubmitError(err.message || 'Erro inesperado ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const currentAnswer = answers[currentQuestionData?.id] || ''
  const canProceed = currentAnswer.trim().length > 0

  // Tela de feedback durante envio
  if (isSubmitting || submitStatus !== 'idle') {
    return (
      <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
            {isSubmitting && (
              <>
                <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
                  Enviando…
                </h1>
                <p className="text-lg text-gray-600">
                  Salvando suas respostas no Google Sheets...
                </p>
              </>
            )}

            {submitStatus === 'success' && (
              <>
                <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
                  Sucesso!
                </h1>
                <p className="text-lg text-gray-600">
                  Respostas salvas com sucesso! Redirecionando...
                </p>
              </>
            )}

            {submitStatus === 'error' && (
              <>
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
                  Erro
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  {submitError}
                </p>
                <button 
                  onClick={() => {
                    setSubmitStatus('idle')
                    setCurrentQuestion(quizQuestions.length - 1)
                  }}
                  className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
                >
                  Tentar Novamente
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              ✅ Obrigado!
            </h1>
            
            <div className="text-left bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 mb-8">
              <p className="text-lg sm:text-xl text-[#222222] leading-relaxed mb-6">
                O Dr. Potência irá analisar suas respostas e, em até 24 horas, te enviará um vídeo exclusivo pelo WhatsApp com a indicação ideal para o seu tratamento e como melhorar seu desempenho na hora H.
              </p>
              
              <div className="flex items-start gap-3 text-[#222222]">
                <Shield className="w-6 h-6 text-[#00796B] mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  🔒 Suas informações estão seguras e serão utilizadas apenas para fins de orientação personalizada.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Resposta em 24h</span>
              </div>
            </div>

            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            Avaliação Médica Gratuita
          </h1>
          <div className="bg-[#0A2540] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl inline-block">
            <p className="text-base sm:text-lg font-medium">
              "As respostas são 100% confidenciais e ajudam o Dr. Potência a indicar o caminho ideal pra você."
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-base sm:text-lg font-medium text-[#222222]">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span className="text-base sm:text-lg font-medium text-[#222222]">
              {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-[#00796B] h-4 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form com onSubmit */}
        <form onSubmit={handleSubmit}>
          {/* Question Card */}
          <div className="bg-[#F5F7FA] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg mb-8 border-2 border-gray-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-8 leading-tight">
              {currentQuestionData.question}
            </h2>

            {currentQuestionData.type === 'text' ? (
              <div className="mb-8">
                <input
                  type="text"
                  name={`q${currentQuestionData.id}`}
                  value={currentAnswer}
                  onChange={(e) => handleTextAnswer(currentQuestionData.id, e.target.value)}
                  placeholder={currentQuestionData.placeholder}
                  className="w-full p-4 sm:p-6 text-lg sm:text-xl border-2 border-gray-200 rounded-2xl focus:border-[#00796B] focus:outline-none focus:ring-3 focus:ring-[#00796B]/20 transition-all duration-200 bg-white"
                  style={{ minHeight: '60px' }}
                />
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {currentQuestionData.options?.map((option, index) => {
                  const isSelected = currentAnswer === option
                  
                  return (
                    <label
                      key={index}
                      className={`w-full p-4 sm:p-6 rounded-2xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] text-lg sm:text-xl cursor-pointer block ${
                        isSelected
                          ? 'border-[#00796B] bg-[#00796B]/10 text-[#0A2540] shadow-md'
                          : 'border-gray-200 hover:border-[#00796B] hover:bg-gray-50 bg-white'
                      }`}
                      style={{ minHeight: '60px' }}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name={`q${currentQuestionData.id}`}
                          value={option}
                          checked={isSelected}
                          onChange={() => handleOptionAnswer(currentQuestionData.id, option)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#00796B] bg-[#00796B]' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium leading-relaxed">{option}</span>
                      </div>
                    </label>
                  )
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              type="button"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] text-lg order-2 sm:order-1 ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#0A2540] hover:bg-gray-100 bg-white border-2 border-gray-200'
              }`}
              style={{ minHeight: '56px' }}
            >
              <ChevronLeft size={20} />
              Anterior
            </button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                type="submit"
                disabled={!canProceed || isSubmitting}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] text-lg sm:text-xl order-1 sm:order-2 w-full sm:w-auto ${
                  canProceed && !isSubmitting
                    ? 'bg-[#00796B] text-white hover:bg-[#00695C] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                style={{ minHeight: '56px' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextQuestion}
                disabled={!canProceed}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] text-lg sm:text-xl order-1 sm:order-2 w-full sm:w-auto ${
                  canProceed
                    ? 'bg-[#00796B] text-white hover:bg-[#00695C] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                style={{ minHeight: '56px' }}
              >
                Próxima Pergunta
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </form>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <Shield size={18} />
              <span>Suas respostas são 100% confidenciais</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Leva apenas 3-5 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}