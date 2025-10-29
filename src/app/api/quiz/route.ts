import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Tipos para validação
type Payload = {
  userId?: string | null
  sessionId?: string | null
  answers: Record<string, any>
  score?: number | null
}

// Configuração do Supabase com Service Role (apenas server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL não encontrada nas variáveis de ambiente')
}

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY não encontrada nas variáveis de ambiente')
}

const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

export async function POST(request: NextRequest) {
  try {
    // Validar se o Supabase está configurado
    if (!supabase) {
      console.error('❌ Supabase não configurado - verifique as variáveis de ambiente')
      return NextResponse.json(
        { ok: false, error: 'Configuração do servidor incompleta' },
        { status: 500 }
      )
    }

    // Parse do body
    let body: Payload
    try {
      body = await request.json()
    } catch (error) {
      console.error('❌ Erro ao fazer parse do JSON:', error)
      return NextResponse.json(
        { ok: false, error: 'JSON inválido' },
        { status: 400 }
      )
    }

    // Validação do payload
    if (!body.answers || typeof body.answers !== 'object' || Object.keys(body.answers).length === 0) {
      console.error('❌ Answers vazio ou inválido:', body.answers)
      return NextResponse.json(
        { ok: false, error: 'answers required' },
        { status: 400 }
      )
    }

    console.log('✅ Dados recebidos:', {
      userId: body.userId,
      sessionId: body.sessionId,
      answersCount: Object.keys(body.answers).length,
      score: body.score
    })

    // Inserir na tabela public.respostas_do_quiz
    const { data, error } = await supabase
      .from('respostas_do_quiz')
      .insert({
        user_id: body.userId,
        session_id: body.sessionId,
        answers: body.answers,
        score: body.score
      })
      .select('id')
      .single()

    if (error) {
      console.error('❌ Erro do Supabase ao inserir:', error)
      return NextResponse.json(
        { ok: false, error: `Erro no banco de dados: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('✅ Quiz salvo com sucesso! ID:', data?.id)

    return NextResponse.json(
      { ok: true, id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Erro interno do servidor:', error)
    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Rejeitar outros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Método não permitido' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { ok: false, error: 'Método não permitido' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { ok: false, error: 'Método não permitido' },
    { status: 405 }
  )
}

// Teste automático em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log('🧪 Modo desenvolvimento - teste automático disponível')
  
  // Função de teste que pode ser chamada manualmente
  const testQuizAPI = async () => {
    try {
      const testPayload = {
        userId: null,
        sessionId: 'test-session-' + Date.now(),
        answers: { test: true, question1: 'Resposta de teste' },
        score: 50
      }

      console.log('🧪 Executando teste automático da API /api/quiz...')
      console.log('📤 Payload de teste:', testPayload)

      // Simular chamada interna (não HTTP real)
      if (supabase) {
        const { data, error } = await supabase
          .from('respostas_do_quiz')
          .insert({
            user_id: testPayload.userId,
            session_id: testPayload.sessionId,
            answers: testPayload.answers,
            score: testPayload.score
          })
          .select('id')
          .single()

        if (error) {
          console.log('❌ Teste falhou:', error.message)
        } else {
          console.log('✅ Teste passou! ID criado:', data?.id)
        }
      }
    } catch (error) {
      console.log('❌ Erro no teste:', error)
    }
  }

  // Executar teste após 5 segundos (apenas uma vez)
  setTimeout(() => {
    if (process.env.NODE_ENV === 'development') {
      testQuizAPI()
    }
  }, 5000)
}