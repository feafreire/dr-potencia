"use client"

import { useState } from 'react'
import { ChevronRight, Shield, Clock, Users, Star, Menu, X, Phone, Mail } from 'lucide-react'
import MedicalQuiz from '@/components/MedicalQuiz'
import PatientDashboard from '@/components/PatientDashboard'

export default function DrPotenciaHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home') // 'home', 'quiz', 'dashboard'

  if (currentView === 'quiz') {
    return <MedicalQuiz />
  }

  if (currentView === 'dashboard') {
    return <PatientDashboard />
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#222222] font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#0A2540] cursor-pointer" onClick={() => setCurrentView('home')}>
                DR. POTÊNCIA
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#tratamentos" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg">
                Tratamentos
              </a>
              <a href="#como-funciona" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg">
                Como Funciona
              </a>
              <a href="#sobre" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg">
                Sobre Nós
              </a>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg"
              >
                Área do Paciente
              </button>
              <button 
                onClick={() => setCurrentView('quiz')}
                className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors text-lg font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]"
              >
                Começar Consulta
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#tratamentos" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg py-2">
                  Tratamentos
                </a>
                <a href="#como-funciona" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg py-2">
                  Como Funciona
                </a>
                <a href="#sobre" className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg py-2">
                  Sobre Nós
                </a>
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className="text-[#222222] hover:text-[#0A2540] transition-colors text-lg py-2 text-left"
                >
                  Área do Paciente
                </button>
                <button 
                  onClick={() => setCurrentView('quiz')}
                  className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors text-lg font-medium w-full focus:outline-none focus:ring-3 focus:ring-[#00796B]"
                >
                  Começar Consulta
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#0D2F4A] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Recupere sua
                <span className="text-[#D72638]"> confiança</span> e
                <span className="text-[#D72638]"> vitalidade</span>
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-gray-200">
                Tratamento médico discreto e eficaz para disfunção erétil, ejaculação precoce e baixa testosterona. 
                Consulta online com médicos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentView('quiz')}
                  className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
                >
                  Fazer Avaliação Gratuita
                  <ChevronRight className="inline ml-2" size={20} />
                </button>
                <button 
                  onClick={() => setCurrentView('quiz')}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[#0A2540] transition-all duration-300 text-xl font-medium focus:outline-none focus:ring-3 focus:ring-white"
                >
                  Fazer Quiz Rápido
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span>100% Confidencial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>Consulta em 24h</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00796B] mb-2">98%</div>
                  <div className="text-lg mb-6">Taxa de Sucesso</div>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                      <span>Médicos especialistas certificados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                      <span>Medicamentos originais e seguros</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                      <span>Entrega discreta em casa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                      <span>Acompanhamento médico contínuo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              Tratamentos Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções médicas comprovadas para os principais problemas de saúde sexual masculina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Disfunção Erétil */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">DE</div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Disfunção Erétil</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Tratamento eficaz com medicamentos aprovados pela ANVISA. Recupere sua capacidade de ter e manter ereções firmes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Sildenafila, Tadalafila e outros</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Dosagem personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Acompanhamento médico</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('quiz')}
                className="w-full bg-[#00796B] text-white py-4 rounded-2xl hover:bg-[#00695C] transition-colors text-lg font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]"
              >
                Consultar Especialista
              </button>
            </div>

            {/* Ejaculação Precoce */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#D72638] rounded-2xl flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">EP</div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ejaculação Precoce</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Controle total sobre sua performance. Tratamentos que aumentam significativamente o tempo de duração.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Dapoxetina e alternativas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Técnicas comportamentais</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Resultados em 2-4 semanas</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('quiz')}
                className="w-full bg-[#00796B] text-white py-4 rounded-2xl hover:bg-[#00695C] transition-colors text-lg font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]"
              >
                Consultar Especialista
              </button>
            </div>

            {/* Baixa Testosterona */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#00796B] rounded-2xl flex items-center justify-center mb-6">
                <div className="text-white text-2xl font-bold">T</div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Baixa Testosterona</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Recupere energia, libido e disposição. Reposição hormonal segura e monitorada por especialistas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Exames laboratoriais inclusos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Gel ou injeções</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00796B] rounded-full"></div>
                  <span className="text-gray-700">Monitoramento contínuo</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('quiz')}
                className="w-full bg-[#00796B] text-white py-4 rounded-2xl hover:bg-[#00695C] transition-colors text-lg font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]"
              >
                Consultar Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Processo simples e discreto em apenas 3 passos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Consulta Online</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Responda um questionário médico detalhado no conforto da sua casa. Totalmente confidencial e seguro.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#D72638] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Avaliação Médica</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Médico especialista analisa seu caso e prescreve o tratamento mais adequado para sua situação específica.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#00796B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Entrega Discreta</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Medicamento entregue em embalagem discreta na sua casa. Acompanhamento médico contínuo incluído.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentView('quiz')}
              className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              Começar Agora - É Gratuito
              <ChevronRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              O Que Nossos Pacientes Dizem
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xl font-semibold text-gray-700 ml-2">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600">Baseado em mais de 10.000 avaliações</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Processo muito discreto e profissional. Em 3 semanas já estava vendo resultados significativos. Recomendo!"
              </p>
              <div className="text-sm text-gray-500">
                <strong>Carlos M.</strong> - 52 anos, São Paulo
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Médicos muito atenciosos e tratamento eficaz. Minha autoestima voltou e meu relacionamento melhorou muito."
              </p>
              <div className="text-sm text-gray-500">
                <strong>Roberto S.</strong> - 48 anos, Rio de Janeiro
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Entrega super rápida e discreta. O acompanhamento médico faz toda a diferença. Muito satisfeito!"
              </p>
              <div className="text-sm text-gray-500">
                <strong>Fernando L.</strong> - 45 anos, Belo Horizonte
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#0D2F4A] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Recupere Sua Confiança Hoje
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            Mais de 50.000 homens já recuperaram sua vitalidade com nossos tratamentos. 
            Consulta inicial gratuita e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentView('quiz')}
              className="bg-[#00796B] text-white px-8 py-4 rounded-2xl hover:bg-[#00695C] transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#00796B]"
            >
              Iniciar Consulta Gratuita
              <ChevronRight className="inline ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[#0A2540] transition-all duration-300 text-xl font-medium focus:outline-none focus:ring-3 focus:ring-white">
              Falar com Especialista
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span>Dados 100% Protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>+50.000 Pacientes Atendidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">DR. POTÊNCIA</div>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em saúde sexual masculina. Tratamento médico discreto e eficaz.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tratamentos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Disfunção Erétil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ejaculação Precoce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Baixa Testosterona</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>contato@drpotencia.com.br</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Potência. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}