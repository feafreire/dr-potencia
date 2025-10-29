import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { userId, sessionId, answers, score } = await request.json()

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Respostas são obrigatórias' },
        { status: 400 }
      )
    }

    if (!userId && !sessionId) {
      return NextResponse.json(
        { ok: false, error: 'userId ou sessionId deve ser fornecido' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Calcular score se não fornecido
    let calculatedScore = score || 0
    if (!score) {
      // Lógica simples de pontuação baseada no número de respostas
      calculatedScore = Object.keys(answers).length * 10
    }

    const { data, error } = await supabase
      .from('quiz_responses')
      .insert({
        user_id: userId || null,
        session_id: sessionId || null,
        answers,
        score: calculatedScore
      })
      .select()
      .single()

    if (error) {
      console.error('Erro ao salvar quiz:', error)
      return NextResponse.json(
        { ok: false, error: 'Erro ao salvar respostas do quiz' },
        { status: 500 }
      )
    }

    // Se o usuário fizer login depois, vincular respostas anônimas
    if (userId && sessionId) {
      await supabase
        .from('quiz_responses')
        .update({ user_id: userId })
        .eq('session_id', sessionId)
        .is('user_id', null)
    }

    return NextResponse.json({ 
      ok: true, 
      quizResponse: data,
      message: 'Respostas salvas com sucesso!'
    })
  } catch (error) {
    console.error('Erro na API de quiz:', error)
    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const sessionId = searchParams.get('sessionId')

    if (!userId && !sessionId) {
      return NextResponse.json(
        { ok: false, error: 'userId ou sessionId é obrigatório' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    let query = supabase.from('quiz_responses').select('*')

    if (userId) {
      query = query.eq('user_id', userId)
    } else if (sessionId) {
      query = query.eq('session_id', sessionId)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar respostas do quiz:', error)
      return NextResponse.json(
        { ok: false, error: 'Erro ao buscar respostas' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, responses: data })
  } catch (error) {
    console.error('Erro na API de quiz:', error)
    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}