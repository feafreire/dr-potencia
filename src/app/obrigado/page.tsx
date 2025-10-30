'use client'

import React from 'react'
import { CheckCircle, Shield, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ObrigadoPage() {
  const router = useRouter()

  // Link do WhatsApp para redirecionamento
  const whatsappLink = "https://wa.me/5511983095381?text=Ol%C3%A1!%20Quero%20iniciar%20minha%20consulta%20gratuita."

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
          {/* Ícone de sucesso */}
          <div className="w-24 h-24 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-8 leading-tight">
            Obrigado pelo seu interesse!<br />
            <span className="text-[#00796B]">Estamos aqui para ajudar.</span>
          </h1>
          
          {/* Subtexto */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-lg sm:text-xl text-[#222222] leading-relaxed">
              A equipe de especialistas do <strong>+Potente</strong> está pronta para te orientar no melhor caminho para recuperar sua confiança e vitalidade. 
            </p>
            <p className="text-lg sm:text-xl text-[#222222] leading-relaxed mt-4">
              <strong>Entre em contato conosco pelo WhatsApp para iniciar sua consulta gratuita!</strong>
            </p>
          </div>
          
          {/* Badges de segurança */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#00796B]" />
              <span><strong>100% Confidencial</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-[#00796B]" />
              <span><strong>Resposta em até 24h</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#00796B]" />
              <span><strong>Consulta Gratuita</strong></span>
            </div>
          </div>

          {/* Próximos passos */}
          <div className="bg-[#00796B]/10 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#0A2540] mb-4">
              📱 Como funciona:
            </h3>
            <div className="text-left space-y-3">
              <p className="text-lg text-[#222222]">
                <strong>1.</strong> Clique no botão abaixo para iniciar conversa no WhatsApp
              </p>
              <p className="text-lg text-[#222222]">
                <strong>2.</strong> Nossa equipe médica fará uma avaliação personalizada
              </p>
              <p className="text-lg text-[#222222]">
                <strong>3.</strong> Você receberá orientações específicas para seu caso
              </p>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              <CheckCircle size={20} />
              Iniciar Consulta Gratuita
            </button>
            
            <button 
              onClick={() => router.push('/area-do-cliente')}
              className="flex items-center justify-center gap-2 bg-white text-[#00796B] border-2 border-[#00796B] px-8 py-4 rounded-2xl hover:bg-[#00796B] hover:text-white transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              Ver conteúdos gratuitos
              <ExternalLink size={20} />
            </button>
          </div>

          {/* Botão voltar ao início */}
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 text-[#00796B] hover:text-[#00695C] transition-colors text-lg font-medium"
            >
              <ArrowLeft size={20} />
              Voltar ao Início
            </button>
          </div>

          {/* Nota adicional */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Atendimento discreto e profissional. Sua privacidade é nossa prioridade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}