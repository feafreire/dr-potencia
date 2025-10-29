import { CheckCircle, Shield, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ConfirmacaoPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
          <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
            ✅ Avaliação Enviada com Sucesso!
          </h1>
          
          <div className="text-left bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-lg sm:text-xl text-[#222222] leading-relaxed mb-6">
              Obrigado por completar a avaliação médica! O Dr. Potência irá analisar suas respostas e, em até 24 horas, te enviará um vídeo exclusivo pelo WhatsApp com a indicação ideal para o seu tratamento e como melhorar seu desempenho na hora H.
            </p>
            
            <div className="flex items-start gap-3 text-[#222222] mb-6">
              <Shield className="w-6 h-6 text-[#00796B] mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                🔒 Suas informações estão seguras e serão utilizadas apenas para fins de orientação personalizada.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border-l-4 border-[#00796B]">
              <p className="text-base text-[#222222] font-medium">
                📱 <strong>Próximo passo:</strong> Aguarde o contato do Dr. Potência no WhatsApp que você informou na avaliação.
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
              <span>Resposta em até 24h</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="flex items-center gap-2 bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              <ArrowLeft size={20} />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}