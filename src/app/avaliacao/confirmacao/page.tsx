'use client'

import React from 'react'
import { CheckCircle, Shield, Clock, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ConfirmacaoPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
          {/* Ícone de sucesso */}
          <div className="w-24 h-24 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
            ✅ Respostas Enviadas com Sucesso!
          </h1>
          
          {/* Mensagem principal */}
          <div className="text-left bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-lg sm:text-xl text-[#222222] leading-relaxed mb-6">
              Obrigado por completar a avaliação médica! Suas respostas foram salvas com segurança na nossa planilha.
            </p>
            
            <p className="text-lg sm:text-xl text-[#222222] leading-relaxed mb-6">
              O <strong>Dr. Potência</strong> irá analisar suas respostas e, em até <strong>24 horas</strong>, te enviará um vídeo exclusivo pelo WhatsApp com:
            </p>

            <ul className="text-lg text-[#222222] leading-relaxed mb-6 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-[#00796B] font-bold">•</span>
                <span>A indicação ideal para o seu tratamento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00796B] font-bold">•</span>
                <span>Dicas personalizadas para melhorar seu desempenho</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00796B] font-bold">•</span>
                <span>Orientações específicas baseadas no seu perfil</span>
              </li>
            </ul>
            
            <div className="flex items-start gap-3 text-[#222222]">
              <Shield className="w-6 h-6 text-[#00796B] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                🔒 <strong>Suas informações estão 100% seguras</strong> e serão utilizadas apenas para fins de orientação personalizada.
              </p>
            </div>
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
              <span><strong>Dados Salvos com Segurança</strong></span>
            </div>
          </div>

          {/* Próximos passos */}
          <div className="bg-[#00796B]/10 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#0A2540] mb-4">
              📱 Próximos Passos:
            </h3>
            <div className="text-left space-y-3">
              <p className="text-lg text-[#222222]">
                <strong>1.</strong> Mantenha seu WhatsApp ativo para receber o vídeo personalizado
              </p>
              <p className="text-lg text-[#222222]">
                <strong>2.</strong> Aguarde até 24 horas pela análise do Dr. Potência
              </p>
              <p className="text-lg text-[#222222]">
                <strong>3.</strong> Assista ao vídeo com atenção para obter o máximo benefício
              </p>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              <ArrowLeft size={20} />
              Voltar ao Início
            </button>
            
            <button 
              onClick={() => window.location.href = 'https://wa.me/5511999999999?text=Olá! Acabei de completar a avaliação médica no site.'}
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl hover:bg-[#20BA5A] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#25D366]"
            >
              💬 Falar no WhatsApp
            </button>
          </div>

          {/* Nota adicional */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Caso não receba o vídeo em 24 horas, entre em contato conosco pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}