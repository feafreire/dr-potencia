"use client"

import { useState } from 'react'
import { User, MessageCircle, Settings, LogOut, Bell, Shield, Clock, CheckCircle, BookOpen, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedSlide, setSelectedSlide] = useState(null)

  const educationalSlides = [
    {
      id: 1,
      title: "Você não está sozinho. Isso tem solução!",
      subtitle: "Entenda que problemas sexuais são mais comuns do que imagina e têm tratamento eficaz.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Você não está sozinho. Isso tem solução!</h2>
          
          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Dados Importantes:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>52%</strong> dos homens entre 40-70 anos têm algum grau de disfunção erétil</li>
              <li>• <strong>30%</strong> dos homens sofrem com ejaculação precoce</li>
              <li>• <strong>97%</strong> dos casos têm causas médicas tratáveis</li>
              <li>• <strong>85%</strong> dos homens melhoram com tratamento adequado</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">A Boa Notícia:</h3>
            <p class="text-gray-700 leading-relaxed">
              Problemas de saúde sexual masculina são condições médicas como qualquer outra. 
              Com o diagnóstico correto e tratamento adequado, a grande maioria dos homens 
              recupera sua confiança e qualidade de vida sexual.
            </p>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Primeiro Passo:</h3>
            <p class="text-gray-700 leading-relaxed">
              Reconhecer que você não está sozinho e que buscar ajuda é um sinal de coragem, 
              não de fraqueza. Milhões de homens passam pela mesma situação e encontram soluções eficazes.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "Entenda seu corpo. Recupere seu poder.",
      subtitle: "Conhecimento sobre anatomia e fisiologia sexual masculina para tomar controle da situação.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Entenda seu corpo. Recupere seu poder.</h2>
          
          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Como Funciona a Ereção:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Sistema Vascular:</strong> Fluxo sanguíneo adequado é essencial</li>
              <li>• <strong>Sistema Nervoso:</strong> Sinais do cérebro para o pênis</li>
              <li>• <strong>Sistema Hormonal:</strong> Testosterona regula o desejo</li>
              <li>• <strong>Sistema Psicológico:</strong> Confiança e relaxamento</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Fatores que Podem Afetar:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Físicos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Diabetes</li>
                  <li>• Pressão alta</li>
                  <li>• Colesterol alto</li>
                  <li>• Obesidade</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Psicológicos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Ansiedade</li>
                  <li>• Estresse</li>
                  <li>• Depressão</li>
                  <li>• Baixa autoestima</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Recuperando o Controle:</h3>
            <p class="text-gray-700 leading-relaxed">
              Entender como seu corpo funciona é o primeiro passo para recuperar o controle. 
              Com conhecimento, você pode identificar possíveis causas e trabalhar junto com 
              seu médico para encontrar a melhor solução.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: "Desempenho não é perfeição. É equilíbrio.",
      subtitle: "Desmistifique expectativas irreais e foque no que realmente importa na intimidade.",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Desempenho não é perfeição. É equilíbrio.</h2>
          
          <div class="bg-red-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Mitos Prejudiciais:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• "Homem de verdade nunca falha"</li>
              <li>• "Ereção deve ser sempre perfeita"</li>
              <li>• "Sexo deve durar horas"</li>
              <li>• "Performance define masculinidade"</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">A Realidade:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Variação é normal:</strong> Performance varia com idade, saúde e situação</li>
              <li>• <strong>Qualidade > Quantidade:</strong> Conexão e prazer importam mais que duração</li>
              <li>• <strong>Comunicação é chave:</strong> Diálogo aberto melhora a experiência</li>
              <li>• <strong>Pressão prejudica:</strong> Ansiedade de performance piora o problema</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Foco no Equilíbrio:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Saúde Física:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Exercícios regulares</li>
                  <li>• Alimentação balanceada</li>
                  <li>• Sono adequado</li>
                  <li>• Controle do estresse</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Saúde Mental:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Autoconhecimento</li>
                  <li>• Comunicação aberta</li>
                  <li>• Expectativas realistas</li>
                  <li>• Busca por ajuda quando necessário</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: "Pequenas mudanças, grandes resultados.",
      subtitle: "Descubra como ajustes simples no dia a dia podem transformar sua saúde sexual.",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Pequenas mudanças, grandes resultados.</h2>
          
          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Mudanças na Alimentação:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-green-700 mb-2">✅ Inclua:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Frutas vermelhas (antioxidantes)</li>
                  <li>• Peixes (ômega-3)</li>
                  <li>• Nozes e castanhas</li>
                  <li>• Vegetais folhosos</li>
                  <li>• Chocolate amargo</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-red-700 mb-2">❌ Evite:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Excesso de açúcar</li>
                  <li>• Alimentos processados</li>
                  <li>• Gorduras trans</li>
                  <li>• Excesso de álcool</li>
                  <li>• Refrigerantes</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Exercícios Simples:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Caminhada:</strong> 30 minutos, 5x por semana</li>
              <li>• <strong>Exercícios de Kegel:</strong> Fortalecem músculos pélvicos</li>
              <li>• <strong>Alongamentos:</strong> Melhoram circulação</li>
              <li>• <strong>Respiração profunda:</strong> Reduz ansiedade</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Hábitos do Sono:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>7-8 horas por noite:</strong> Essencial para produção hormonal</li>
              <li>• <strong>Horário regular:</strong> Dormir e acordar no mesmo horário</li>
              <li>• <strong>Ambiente adequado:</strong> Escuro, silencioso e fresco</li>
              <li>• <strong>Evite telas:</strong> 1 hora antes de dormir</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Resultados Esperados:</h3>
            <p class="text-gray-700 leading-relaxed">
              Em 2-4 semanas: Melhora na energia e disposição<br>
              Em 1-2 meses: Melhora na circulação e qualidade do sono<br>
              Em 3-6 meses: Resultados significativos na saúde sexual
            </p>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: "A força masculina começa aqui.",
      subtitle: "Entenda como a testosterona influencia sua energia, disposição e vida sexual.",
      thumbnail: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/12835732-f32b-4b65-adce-df4b239650a0.png",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">A força masculina começa aqui.</h2>
          
          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">O que é a Testosterona:</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              A testosterona é o principal hormônio sexual masculino, responsável por características 
              como força muscular, densidade óssea, distribuição de gordura, produção de glóbulos 
              vermelhos e, claro, libido e função sexual.
            </p>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Pico:</strong> Entre 20-30 anos</li>
              <li>• <strong>Declínio:</strong> 1-2% ao ano após os 30</li>
              <li>• <strong>Variação:</strong> Níveis flutuam durante o dia</li>
            </ul>
          </div>

          <div class="bg-red-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Sinais de Baixa Testosterona:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Físicos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Fadiga constante</li>
                  <li>• Perda de massa muscular</li>
                  <li>• Aumento de gordura abdominal</li>
                  <li>• Diminuição da força</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Sexuais/Emocionais:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Baixa libido</li>
                  <li>• Dificuldade de ereção</li>
                  <li>• Irritabilidade</li>
                  <li>• Depressão leve</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Como Aumentar Naturalmente:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Exercícios de força:</strong> Musculação 3x por semana</li>
              <li>• <strong>Sono de qualidade:</strong> 7-8 horas por noite</li>
              <li>• <strong>Controle do estresse:</strong> Meditação, yoga</li>
              <li>• <strong>Vitamina D:</strong> Sol ou suplementação</li>
              <li>• <strong>Zinco e magnésio:</strong> Através da alimentação</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Quando Buscar Ajuda:</h3>
            <p class="text-gray-700 leading-relaxed">
              Se os sintomas persistem mesmo com mudanças no estilo de vida, é importante 
              fazer exames para avaliar os níveis hormonais. A reposição hormonal, quando 
              indicada e acompanhada por médico, pode restaurar energia, libido e qualidade de vida.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: "O coração e a potência andam juntos.",
      subtitle: "Descubra a conexão entre saúde cardiovascular e função sexual masculina.",
      thumbnail: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/cec3739b-8606-46a4-8f04-56ad70303c55.png",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">O coração e a potência andam juntos.</h2>
          
          <div class="bg-red-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">A Conexão Vascular:</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              A ereção depende de um fluxo sanguíneo adequado. Os vasos sanguíneos do pênis 
              são menores que os do coração, então problemas vasculares frequentemente se 
              manifestam primeiro como disfunção erétil.
            </p>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Artérias do pênis:</strong> 1-2mm de diâmetro</li>
              <li>• <strong>Artérias coronárias:</strong> 3-4mm de diâmetro</li>
              <li>• <strong>Sinal de alerta:</strong> DE pode indicar problemas cardíacos futuros</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Fatores de Risco Comuns:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Para o Coração:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Pressão alta</li>
                  <li>• Colesterol alto</li>
                  <li>• Diabetes</li>
                  <li>• Obesidade</li>
                  <li>• Tabagismo</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Para a Ereção:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Pressão alta</li>
                  <li>• Colesterol alto</li>
                  <li>• Diabetes</li>
                  <li>• Obesidade</li>
                  <li>• Tabagismo</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Cuidando de Ambos:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Exercícios aeróbicos:</strong> Melhoram circulação geral</li>
              <li>• <strong>Dieta mediterrânea:</strong> Rica em antioxidantes</li>
              <li>• <strong>Controle da pressão:</strong> Medicação quando necessária</li>
              <li>• <strong>Pare de fumar:</strong> Melhora imediata na circulação</li>
              <li>• <strong>Controle do diabetes:</strong> Glicemia estável</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Benefícios Duplos:</h3>
            <p class="text-gray-700 leading-relaxed">
              Ao cuidar da saúde cardiovascular, você automaticamente melhora sua função sexual. 
              É um investimento que traz benefícios para toda sua saúde e qualidade de vida. 
              Muitos homens relatam melhora significativa na ereção após adotar hábitos 
              cardioprotetores.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: "A idade muda o corpo. Mas não o desejo.",
      subtitle: "Como adaptar-se às mudanças naturais do envelhecimento mantendo uma vida sexual ativa.",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">A idade muda o corpo. Mas não o desejo.</h2>
          
          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Mudanças Naturais com a Idade:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">40-50 anos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Ereções podem demorar mais</li>
                  <li>• Período refratário aumenta</li>
                  <li>• Testosterona começa a declinar</li>
                  <li>• Sensibilidade pode diminuir</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">50+ anos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Ereções menos firmes</li>
                  <li>• Ejaculação menos intensa</li>
                  <li>• Libido pode variar mais</li>
                  <li>• Necessidade de mais estímulo</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">O Desejo Permanece:</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Estudos mostram que o interesse sexual pode permanecer forte mesmo com o 
              envelhecimento. A chave está em adaptar expectativas e explorar novas 
              formas de intimidade e prazer.
            </p>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Qualidade > Frequência:</strong> Foco na conexão e prazer</li>
              <li>• <strong>Comunicação:</strong> Diálogo aberto com a parceira</li>
              <li>• <strong>Preliminares:</strong> Mais tempo para aquecimento</li>
              <li>• <strong>Criatividade:</strong> Explorar diferentes formas de prazer</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Estratégias de Adaptação:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Exercícios regulares:</strong> Mantêm energia e circulação</li>
              <li>• <strong>Alimentação saudável:</strong> Suporte hormonal natural</li>
              <li>• <strong>Controle do estresse:</strong> Impacta diretamente na libido</li>
              <li>• <strong>Sono adequado:</strong> Essencial para produção hormonal</li>
              <li>• <strong>Acompanhamento médico:</strong> Avaliação hormonal regular</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Tratamentos Disponíveis:</h3>
            <p class="text-gray-700 leading-relaxed">
              A medicina moderna oferece diversas opções para homens maduros: medicamentos 
              para ereção, reposição hormonal quando indicada, terapias psicológicas e 
              dispositivos auxiliares. O importante é não aceitar passivamente as mudanças 
              e buscar ajuda profissional.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: "A mente pode ser sua maior aliada — ou seu maior inimigo.",
      subtitle: "Como fatores psicológicos influenciam a performance sexual e estratégias para superá-los.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">A mente pode ser sua maior aliada — ou seu maior inimigo.</h2>
          
          <div class="bg-red-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">O Ciclo da Ansiedade de Performance:</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p class="text-gray-700">Primeira experiência negativa (falha na ereção)</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p class="text-gray-700">Preocupação e medo de falhar novamente</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p class="text-gray-700">Ansiedade durante o ato sexual</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <p class="text-gray-700">Ansiedade interfere na ereção</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <p class="text-gray-700">Ciclo se repete e se intensifica</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Fatores Psicológicos Comuns:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Internos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Baixa autoestima</li>
                  <li>• Perfeccionismo</li>
                  <li>• Depressão</li>
                  <li>• Estresse crônico</li>
                  <li>• Traumas passados</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Externos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Problemas no relacionamento</li>
                  <li>• Pressão da parceira</li>
                  <li>• Estresse no trabalho</li>
                  <li>• Problemas financeiros</li>
                  <li>• Falta de privacidade</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Quebrando o Ciclo:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Mindfulness:</strong> Foque no presente, não no desempenho</li>
              <li>• <strong>Respiração profunda:</strong> Reduza a ansiedade no momento</li>
              <li>• <strong>Comunicação:</strong> Converse abertamente com sua parceira</li>
              <li>• <strong>Expectativas realistas:</strong> Aceite que variações são normais</li>
              <li>• <strong>Foco no prazer:</strong> Não apenas na ereção</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Técnicas Práticas:</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">Técnica 4-7-8:</h4>
                <p class="text-sm text-gray-700">Inspire por 4, segure por 7, expire por 8 segundos</p>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">Foco Sensorial:</h4>
                <p class="text-sm text-gray-700">Concentre-se nas sensações físicas, não nos pensamentos</p>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">Visualização Positiva:</h4>
                <p class="text-sm text-gray-700">Imagine experiências sexuais positivas e relaxantes</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Quando Buscar Ajuda:</h3>
            <p class="text-gray-700 leading-relaxed">
              Se a ansiedade persiste mesmo com essas técnicas, considere terapia sexual ou 
              psicológica. Muitas vezes, algumas sessões com um profissional especializado 
              podem quebrar padrões que se mantêm há anos.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: "O prazer rápido tem um custo silencioso.",
      subtitle: "Entenda como hábitos modernos podem afetar sua saúde sexual e como reverter os danos.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format&q=80",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">O prazer rápido tem um custo silencioso.</h2>
          
          <div class="bg-red-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Hábitos Prejudiciais Modernos:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Pornografia excessiva:</strong> Cria expectativas irreais e dessensibilização</li>
              <li>• <strong>Masturbação compulsiva:</strong> Pode afetar sensibilidade e controle</li>
              <li>• <strong>Sedentarismo:</strong> Prejudica circulação e produção hormonal</li>
              <li>• <strong>Alimentação processada:</strong> Afeta energia e saúde vascular</li>
              <li>• <strong>Excesso de álcool:</strong> Deprime o sistema nervoso</li>
              <li>• <strong>Falta de sono:</strong> Reduz testosterona e energia</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">O Impacto da Pornografia:</h3>
            <div class="space-y-3">
              <p class="text-gray-700 leading-relaxed">
                O consumo excessivo de pornografia pode causar:
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Dessensibilização:</strong> Necessidade de estímulos mais intensos</li>
                <li>• <strong>Expectativas irreais:</strong> Performance e anatomia distorcidas</li>
                <li>• <strong>Disfunção erétil induzida:</strong> Dificuldade com parceiras reais</li>
                <li>• <strong>Ejaculação precoce:</strong> Hábito de buscar clímax rápido</li>
                <li>• <strong>Ansiedade social:</strong> Dificuldade de intimidade real</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Sinais de Alerta:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Físicos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Dificuldade de ereção com parceira</li>
                  <li>• Perda de sensibilidade</li>
                  <li>• Ejaculação muito rápida ou demorada</li>
                  <li>• Fadiga sexual</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Psicológicos:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Ansiedade durante o sexo</li>
                  <li>• Comparações constantes</li>
                  <li>• Perda de interesse na parceira</li>
                  <li>• Sentimentos de inadequação</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Estratégias de Recuperação:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Detox digital:</strong> Reduzir ou eliminar pornografia</li>
              <li>• <strong>Mindfulness sexual:</strong> Foco nas sensações reais</li>
              <li>• <strong>Exercícios de sensibilidade:</strong> Reconectar com o próprio corpo</li>
              <li>• <strong>Comunicação com parceira:</strong> Honestidade sobre dificuldades</li>
              <li>• <strong>Paciência:</strong> Recuperação leva tempo (2-6 meses)</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Reconstruindo Hábitos Saudáveis:</h3>
            <p class="text-gray-700 leading-relaxed">
              A boa notícia é que o cérebro é plástico e pode se readaptar. Substituir hábitos 
              prejudiciais por atividades saudáveis como exercícios, hobbies e relacionamentos 
              reais pode restaurar a função sexual natural. O processo requer disciplina, mas 
              os resultados valem o esforço.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 10,
      title: "Recuperar o controle é possível. E começa agora.",
      subtitle: "Seu plano de ação para retomar a confiança e ter uma vida sexual plena e satisfatória.",
      thumbnail: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2eff52d6-e1c9-4ac9-add9-1ce883eb97ad.png",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Recuperar o controle é possível. E começa agora.</h2>
          
          <div class="bg-green-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Seu Plano de Ação - Primeiros 30 Dias:</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-medium text-[#0A2540]">Avaliação Médica</h4>
                  <p class="text-sm text-gray-700">Consulte um urologista para exames básicos (testosterona, glicemia, colesterol)</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-medium text-[#0A2540]">Mudanças no Estilo de Vida</h4>
                  <p class="text-sm text-gray-700">Comece exercícios leves, melhore a alimentação e estabeleça rotina de sono</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-medium text-[#0A2540]">Comunicação</h4>
                  <p class="text-sm text-gray-700">Converse abertamente com sua parceira sobre suas preocupações</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Metas para os Próximos 3 Meses:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Saúde Física:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Exercitar-se 4x por semana</li>
                  <li>• Perder 5-10% do peso (se necessário)</li>
                  <li>• Controlar pressão e glicemia</li>
                  <li>• Parar de fumar (se aplicável)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-2">Saúde Mental:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Reduzir ansiedade de performance</li>
                  <li>• Melhorar autoestima</li>
                  <li>• Fortalecer relacionamento</li>
                  <li>• Gerenciar estresse</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Opções de Tratamento:</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Medicamentos orais:</strong> Sildenafil, Tadalafil (com prescrição médica)</li>
              <li>• <strong>Reposição hormonal:</strong> Se testosterona baixa confirmada</li>
              <li>• <strong>Terapia psicológica:</strong> Para ansiedade e questões emocionais</li>
              <li>• <strong>Dispositivos auxiliares:</strong> Bombas de vácuo, anéis</li>
              <li>• <strong>Tratamentos avançados:</strong> Ondas de choque, injeções (casos específicos)</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-3">Expectativas Realistas:</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">Primeiras 2 semanas:</h4>
                <p class="text-sm text-gray-700">Melhora na energia e disposição geral</p>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">1-2 meses:</h4>
                <p class="text-sm text-gray-700">Redução da ansiedade, melhora na circulação</p>
              </div>
              <div>
                <h4 class="font-medium text-[#0A2540] mb-1">3-6 meses:</h4>
                <p class="text-sm text-gray-700">Resultados significativos na função sexual</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#0A2540] to-[#0D2F4A] text-white p-6 rounded-2xl">
            <h3 class="text-lg font-semibold mb-3">Sua Jornada Começa Hoje</h3>
            <p class="leading-relaxed">
              Lembre-se: você não está sozinho nesta jornada. Milhões de homens enfrentam 
              desafios similares e encontram soluções eficazes. O primeiro passo é o mais 
              importante, e você já o deu ao buscar informação e ajuda. Com determinação, 
              acompanhamento médico adequado e paciência, você pode recuperar sua confiança 
              e ter uma vida sexual plena e satisfatória.
            </p>
          </div>
        </div>
      `
    }
  ]

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: User },
    { id: 'treatments-dr-potencia', label: 'Tratamentos do Dr. Potência', icon: BookOpen },
    { id: 'messages', label: 'Mensagens', icon: MessageCircle },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ]

  const openSlide = (slide) => {
    setSelectedSlide(slide)
  }

  const closeSlide = () => {
    setSelectedSlide(null)
  }

  const nextSlide = () => {
    const currentIndex = educationalSlides.findIndex(slide => slide.id === selectedSlide.id)
    const nextIndex = (currentIndex + 1) % educationalSlides.length
    setSelectedSlide(educationalSlides[nextIndex])
  }

  const prevSlide = () => {
    const currentIndex = educationalSlides.findIndex(slide => slide.id === selectedSlide.id)
    const prevIndex = currentIndex === 0 ? educationalSlides.length - 1 : currentIndex - 1
    setSelectedSlide(educationalSlides[prevIndex])
  }

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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00796B] rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">12</div>
                    <div className="text-gray-600">Conteúdos assistidos</div>
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
                    <div className="text-gray-600">Progresso geral</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Treatment */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Seu Progresso</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Conteúdo Educativo</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Slides lidos:</span>
                      <span className="font-medium">12 de 20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Último acesso:</span>
                      <span className="font-medium">Hoje</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Conhecimento</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Compreensão</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#00796B] h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Engajamento</span>
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
                  <div className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#0A2540]">Slides lidos</div>
                    <div className="text-gray-600 text-sm">"Causas e Soluções para EP"</div>
                  </div>
                  <div className="text-gray-500 text-sm">1 dia atrás</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-2xl">
                  <div className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#0A2540]">Mensagem do Dr. Silva</div>
                    <div className="text-gray-600 text-sm">Como você está se sentindo com o novo tratamento?</div>
                  </div>
                  <div className="text-gray-500 text-sm">3 dias atrás</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'treatments-dr-potencia':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0A2540] mb-4">Tratamentos do Dr. Potência</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Você não está sozinho. Isso tem solução! Aprenda sobre saúde sexual masculina de forma simples e acessível.
              </p>
            </div>

            {/* Educational Slides Cards */}
            <div className="grid gap-6">
              {educationalSlides.map((slide, index) => (
                <div key={slide.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openSlide(slide)}>
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                      <img 
                        src={slide.thumbnail} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#0A2540]">{slide.title}</h3>
                        <div className="flex items-center justify-center">
                          <FileText className="w-4 h-4 text-[#00796B]" />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{slide.subtitle}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>📖 Conteúdo educativo</span>
                        <span>⏱️ 5-10 min de leitura</span>
                      </div>
                    </div>
                    <button className="bg-[#00796B] text-white px-6 py-3 rounded-2xl hover:bg-[#00695C] transition-colors font-medium">
                      Ver slides
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="bg-gradient-to-r from-[#0A2540] to-[#0D2F4A] text-white rounded-3xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Seu Progresso Educativo</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#00796B] mb-2">30%</div>
                    <div className="text-gray-200">Conteúdo Concluído</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00796B] mb-2">3h</div>
                    <div className="text-gray-200">Tempo de Estudo</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00796B] mb-2">10</div>
                    <div className="text-gray-200">Slides Disponíveis</div>
                  </div>
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
                      <div className="font-medium text-[#0A2540]">Novos conteúdos educativos</div>
                      <div className="text-sm text-gray-600">Receba notificações sobre novos slides</div>
                    </div>
                    <button className="w-12 h-6 bg-[#00796B] rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#0A2540]">Lembretes de estudo</div>
                      <div className="text-sm text-gray-600">Lembretes para continuar seu aprendizado</div>
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

      {/* Modal for Slide Content */}
      {selectedSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-[#0A2540]">{selectedSlide.title}</h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {educationalSlides.findIndex(slide => slide.id === selectedSlide.id) + 1} de {educationalSlides.length}
                </span>
              </div>
              <button 
                onClick={closeSlide}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div dangerouslySetInnerHTML={{ __html: selectedSlide.content }} />
            </div>

            {/* Modal Footer - Navigation */}
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <button 
                onClick={prevSlide}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#00796B] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              
              <div className="flex gap-2">
                {educationalSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setSelectedSlide(slide)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      selectedSlide.id === slide.id ? 'bg-[#00796B]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#00796B] transition-colors"
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}