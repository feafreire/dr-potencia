"use client"

import { useState } from 'react'
import { User, Calendar, Package, MessageCircle, Settings, LogOut, Bell, Shield, Clock, CheckCircle } from 'lucide-react'

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: User },
    { id: 'appointments', label: 'Consultas', icon: Calendar },
    { id: 'treatments', label: 'Tratamentos', icon: Package },
    { id: 'messages', label: 'Mensagens', icon: MessageCircle },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#0A2540] to-[#0D2F4A] text-white rounded-3xl p-8">
              <h1 className="text-3xl font-bold mb-2">Olá, Carlos!</h1>
              <p className="text-xl text-gray-200">Como você está se sentindo hoje?</p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00796B] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">3</div>
                    <div className="text-gray-600">Consultas realizadas</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D72638] rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">2</div>
                    <div className="text-gray-600">Tratamentos ativos</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00796B] rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">85%</div>
                    <div className="text-gray-600">Melhora relatada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Treatment */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Tratamento Atual</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Tadalafila 20mg</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dosagem:</span>
                      <span className="font-medium">1 comprimido conforme necessário</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Próxima entrega:</span>
                      <span className="font-medium">15 de Janeiro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-[#00796B] font-medium">Ativo</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Progresso</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Eficácia</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#00796B] h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Satisfação</span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#00796B] h-3 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Atividade Recente</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-2xl">
                  <div className="w-10 h-10 bg-[#00796B] rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#0A2540]">Medicamento entregue</div>
                    <div className="text-gray-600 text-sm">Tadalafila 20mg - 30 comprimidos</div>
                  </div>
                  <div className="text-gray-500 text-sm">2 dias atrás</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-2xl">
                  <div className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#0A2540]">Mensagem do Dr. Silva</div>
                    <div className="text-gray-600 text-sm">Como você está se sentindo com o novo tratamento?</div>
                  </div>
                  <div className="text-gray-500 text-sm">5 dias atrás</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-2xl">
                  <div className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#0A2540]">Consulta de acompanhamento</div>
                    <div className="text-gray-600 text-sm">Avaliação de progresso realizada</div>
                  </div>
                  <div className="text-gray-500 text-sm">1 semana atrás</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'appointments':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-[#0A2540]">Minhas Consultas</h1>
              <button className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]">
                Agendar Nova Consulta
              </button>
            </div>

            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-[#00796B]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540]">Consulta de Acompanhamento</h3>
                    <p className="text-gray-600">Dr. Roberto Silva - Urologista</p>
                  </div>
                  <span className="bg-[#00796B] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Agendada
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>20 de Janeiro, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>14:30</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540]">Consulta Inicial</h3>
                    <p className="text-gray-600">Dr. Roberto Silva - Urologista</p>
                  </div>
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Concluída
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>15 de Dezembro, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'treatments':
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-[#0A2540]">Meus Tratamentos</h1>

            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A2540]">Tadalafila 20mg</h3>
                    <p className="text-gray-600">Para disfunção erétil</p>
                  </div>
                  <span className="bg-[#00796B] text-white px-4 py-2 rounded-full font-medium">
                    Ativo
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0A2540] mb-4">Informações do Medicamento</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dosagem:</span>
                        <span className="font-medium">20mg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frequência:</span>
                        <span className="font-medium">Conforme necessário</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quantidade:</span>
                        <span className="font-medium">30 comprimidos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Restam:</span>
                        <span className="font-medium">18 comprimidos</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0A2540] mb-4">Próximas Entregas</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-xl">
                        <Package className="w-5 h-5 text-[#00796B]" />
                        <div>
                          <div className="font-medium">15 de Janeiro</div>
                          <div className="text-sm text-gray-600">30 comprimidos</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Package className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-600">15 de Fevereiro</div>
                          <div className="text-sm text-gray-500">30 comprimidos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <button className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]">
                    Solicitar Reposição
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'messages':
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-[#0A2540]">Mensagens</h1>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540]">Dr. Roberto Silva</h3>
                    <p className="text-gray-600">Urologista</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F5F7FA] rounded-2xl p-4 max-w-md">
                    <p className="text-gray-800">Olá Carlos! Como você está se sentindo com o novo tratamento? Notou alguma melhora?</p>
                    <p className="text-xs text-gray-500 mt-2">5 dias atrás</p>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <div className="bg-[#00796B] text-white rounded-2xl p-4 max-w-md">
                    <p>Olá doutor! Estou me sentindo muito melhor. O tratamento está funcionando bem e não tive efeitos colaterais.</p>
                    <p className="text-xs text-gray-200 mt-2">4 dias atrás</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F5F7FA] rounded-2xl p-4 max-w-md">
                    <p className="text-gray-800">Excelente! Continue com o tratamento conforme prescrito. Vamos agendar uma consulta de acompanhamento em 2 semanas.</p>
                    <p className="text-xs text-gray-500 mt-2">4 dias atrás</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B]"
                  />
                  <button className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-[#0A2540]">Configurações</h1>

            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6">Informações Pessoais</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value="Carlos Mendes"
                      className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value="carlos@email.com"
                      className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value="(11) 99999-9999"
                      className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                    <input
                      type="date"
                      value="1972-05-15"
                      className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00796B] focus:border-[#00796B]"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors font-medium focus:outline-none focus:ring-3 focus:ring-[#00796B]">
                    Salvar Alterações
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6">Notificações</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#0A2540]">Lembretes de medicação</div>
                      <div className="text-sm text-gray-600">Receba lembretes para tomar seus medicamentos</div>
                    </div>
                    <button className="w-12 h-6 bg-[#00796B] rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#0A2540]">Consultas agendadas</div>
                      <div className="text-sm text-gray-600">Notificações sobre suas consultas</div>
                    </div>
                    <button className="w-12 h-6 bg-[#00796B] rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#0A2540]">Mensagens do médico</div>
                      <div className="text-sm text-gray-600">Receba notificações de novas mensagens</div>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6">Privacidade e Segurança</h3>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                    <div className="font-medium text-[#0A2540]">Alterar senha</div>
                    <div className="text-sm text-gray-600">Mantenha sua conta segura</div>
                  </button>
                  <button className="w-full text-left p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                    <div className="font-medium text-[#0A2540]">Baixar meus dados</div>
                    <div className="text-sm text-gray-600">Solicite uma cópia dos seus dados</div>
                  </button>
                  <button className="w-full text-left p-4 hover:bg-red-50 rounded-2xl transition-colors text-red-600">
                    <div className="font-medium">Excluir conta</div>
                    <div className="text-sm">Remover permanentemente sua conta</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#0A2540]">
              DR. POTÊNCIA
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-[#0A2540]">Carlos M.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-colors text-left focus:outline-none focus:ring-3 focus:ring-[#00796B] ${
                        activeTab === item.id
                          ? 'bg-[#00796B] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  )
                })}
                
                <div className="pt-4 border-t">
                  <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-red-600 hover:bg-red-50 transition-colors text-left focus:outline-none focus:ring-3 focus:ring-red-500">
                    <LogOut className="w-5 h-5" />
                    Sair
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}