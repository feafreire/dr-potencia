"use client"

import { useState } from 'react'
import { ChevronRight, ChevronLeft, Shield, Clock } from 'lucide-react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  type: 'single' | 'multiple'
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é sua idade?",
    options: ["18-30 anos", "31-45 anos", "46-60 anos", "Acima de 60 anos"],
    type: 'single'
  },
  {
    id: 2,
    question: "Qual problema você gostaria de tratar?",
    options: [
      "Disfunção erétil (dificuldade para ter ou manter ereção)",
      "Ejaculação precoce (climax muito rápido)",
      "Baixa libido (pouco desejo sexual)",
      "Baixa energia e disposição"
    ],
    type: 'multiple'
  },
  {
    id: 3,
    question: "Há quanto tempo você tem notado esses sintomas?",
    options: [
      "Menos de 3 meses",
      "3-6 meses",
      "6 meses a 1 ano",
      "Mais de 1 ano"
    ],
    type: 'single'
  },
  {
    id: 4,
    question: "Você já tentou algum tratamento antes?",
    options: [
      "Nunca tentei nenhum tratamento",
      "Já usei medicamentos sem prescrição",
      "Já consultei um médico",
      "Já tentei suplementos naturais"
    ],
    type: 'single'
  },
  {
    id: 5,
    question: "Como você descreveria seu estilo de vida?",
    options: [
      "Muito ativo e saudável",
      "Moderadamente ativo",
      "Sedentário mas sem problemas de saúde",
      "Sedentário com alguns problemas de saúde"
    ],
    type: 'single'
  }
]

export default function MedicalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, answer: string, isMultiple: boolean) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || []
      const newAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter(a => a !== answer)
        : [...currentAnswers, answer]
      
      setAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }))
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: [answer]
      }))
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const currentAnswers = answers[currentQuestionData?.id] || []
  const canProceed = currentAnswers.length > 0

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              Obrigado pelas suas respostas!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com base nas suas respostas, nossos especialistas podem ajudá-lo com um tratamento personalizado. 
              O próximo passo é uma consulta médica gratuita.
            </p>
            
            <div className="bg-[#F5F7FA] rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-[#0A2540] mb-4">O que acontece agora:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Um médico especialista analisará suas respostas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Você receberá uma consulta personalizada em até 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Tratamento será prescrito se apropriado</span>
                </div>
              </div>
            </div>
            
            <button className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]">
              Agendar Consulta Gratuita
              <ChevronRight className="inline ml-2" size={20} />
            </button>
            
            <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
            Avaliação Médica Gratuita
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Responda algumas perguntas para que possamos entender melhor sua situação
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% completo
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-[#00796B] h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-8">
            {currentQuestionData.question}
          </h2>

          <div className="space-y-4">
            {currentQuestionData.options.map((option, index) => {
              const isSelected = currentAnswers.includes(option)
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestionData.id, option, currentQuestionData.type === 'multiple')}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] ${
                    isSelected
                      ? 'border-[#00796B] bg-[#00796B]/10 text-[#0A2540]'
                      : 'border-gray-200 hover:border-[#00796B] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#00796B] bg-[#00796B]' : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {currentQuestionData.type === 'multiple' && (
            <p className="text-sm text-gray-500 mt-4">
              * Você pode selecionar múltiplas opções
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#0A2540] hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <button
            onClick={nextQuestion}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#00796B] ${
              canProceed
                ? 'bg-[#00796B] text-white hover:bg-[#00695C] shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Suas respostas são 100% confidenciais</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Leva apenas 2-3 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}