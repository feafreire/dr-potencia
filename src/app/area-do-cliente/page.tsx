'use client'

import React from 'react'
import { ArrowLeft, BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AreaDoClientePage() {
  const router = useRouter()

  const conteudos = [
    {
      id: 1,
      tipo: 'Vídeo',
      titulo: '5 Dicas para Melhorar a Performance Masculina',
      descricao: 'Aprenda técnicas naturais e comprovadas para aumentar sua energia e disposição.',
      duracao: '12 min',
      icon: Video,
      categoria: 'Performance'
    },
    {
      id: 2,
      tipo: 'E-book',
      titulo: 'Guia Completo da Saúde Masculina',
      descricao: 'Manual completo com informações sobre saúde, nutrição e bem-estar masculino.',
      paginas: '45 páginas',
      icon: BookOpen,
      categoria: 'Saúde'
    },
    {
      id: 3,
      tipo: 'Artigo',
      titulo: 'Alimentação que Potencializa a Libido',
      descricao: 'Descubra quais alimentos podem naturalmente aumentar sua energia e disposição.',
      tempo: '8 min de leitura',
      icon: FileText,
      categoria: 'Nutrição'
    },
    {
      id: 4,
      tipo: 'Vídeo',
      titulo: 'Exercícios para Fortalecer o Core',
      descricao: 'Rotina de exercícios específicos para melhorar a força e resistência.',
      duracao: '15 min',
      icon: Video,
      categoria: 'Exercícios'
    },
    {
      id: 5,
      tipo: 'PDF',
      titulo: 'Checklist de Hábitos Saudáveis',
      descricao: 'Lista prática para implementar mudanças positivas na sua rotina diária.',
      paginas: '3 páginas',
      icon: Download,
      categoria: 'Lifestyle'
    },
    {
      id: 6,
      tipo: 'Artigo',
      titulo: 'Mitos e Verdades sobre Suplementação',
      descricao: 'Informações baseadas em evidências sobre suplementos para saúde masculina.',
      tempo: '10 min de leitura',
      icon: FileText,
      categoria: 'Suplementos'
    }
  ]

  const categorias = ['Todos', 'Performance', 'Saúde', 'Nutrição', 'Exercícios', 'Lifestyle', 'Suplementos']
  const [categoriaAtiva, setCategoriaAtiva] = React.useState('Todos')

  const conteudosFiltrados = categoriaAtiva === 'Todos' 
    ? conteudos 
    : conteudos.filter(item => item.categoria === categoriaAtiva)

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-[#00796B] hover:text-[#00695C] transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Voltar ao Início</span>
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Área do Cliente
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse conteúdos exclusivos sobre saúde masculina, performance e bem-estar. 
              Todo o material foi desenvolvido por especialistas da área.
            </p>
          </div>
        </div>

        {/* Filtros por categoria */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoriaAtiva === categoria
                    ? 'bg-[#00796B] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de conteúdos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conteudosFiltrados.map((item) => {
            const IconComponent = item.icon
            
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00796B]/20 cursor-pointer group"
              >
                {/* Header do card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#00796B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00796B]/20 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-[#00796B]" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#00796B] bg-[#00796B]/10 px-2 py-1 rounded-full">
                        {item.tipo}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {item.categoria}
                  </span>
                </div>

                {/* Conteúdo do card */}
                <h3 className="text-lg font-bold text-[#0A2540] mb-3 group-hover:text-[#00796B] transition-colors duration-200">
                  {item.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.descricao}
                </p>

                {/* Footer do card */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {item.duracao || item.paginas || item.tempo}
                  </span>
                  
                  <button className="flex items-center gap-1 text-[#00796B] hover:text-[#00695C] font-medium text-sm group-hover:gap-2 transition-all duration-200">
                    Acessar
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-[#00796B] to-[#00695C] rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Quer um acompanhamento personalizado?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Faça nossa avaliação gratuita e receba orientações específicas para o seu caso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'https://wa.me/5511983095381?text=Ol%C3%A1!%20Quero%20iniciar%20minha%20consulta%20gratuita.'}
              className="bg-white text-[#00796B] px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-white/30"
            >
              Fazer Avaliação Gratuita
            </button>
            
            <button 
              onClick={() => window.location.href = 'https://wa.me/5511983095381?text=Ol%C3%A1!%20Quero%20iniciar%20minha%20consulta%20gratuita.'}
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl hover:bg-[#20BA5A] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-[#25D366]/30"
            >
              💬 Falar no WhatsApp
            </button>
          </div>
        </div>

        {/* Footer da área */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Todos os conteúdos são baseados em evidências científicas e desenvolvidos por profissionais qualificados.
          </p>
        </div>
      </div>
    </div>
  )
}