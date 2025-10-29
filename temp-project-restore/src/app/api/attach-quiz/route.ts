import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { userId, sessionId } = await request.json()

    if (!userId || !sessionId) {
      return NextResponse.json(
        { ok: false, error: 'userId e sessionId são obrigatórios' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Vincular respostas anônimas ao usuário
    const { data, error } = await supabase
      .from('quiz_responses')
      .update({ 
        user_id: userId,
        updated_at: new Date().toISOString()
      })
      .eq('session_id', sessionId)
      .is('user_id', null)
      .select()

    if (error) {
      console.error('Erro ao vincular respostas:', error)
      return NextResponse.json(
        { ok: false, error: 'Erro ao vincular respostas ao usuário' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      ok: true, 
      updatedResponses: data?.length || 0,
      message: `${data?.length || 0} respostas vinculadas ao usuário com sucesso!`
    })
  } catch (error) {
    console.error('Erro na API de vinculação:', error)
    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}