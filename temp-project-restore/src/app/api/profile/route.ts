import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { userId, name, email, phone, birthDate } = await request.json()

    if (!userId || !name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Verificar se o perfil já existe
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (existingProfile) {
      // Atualizar perfil existente
      const { data, error } = await supabase
        .from('profiles')
        .update({
          name,
          email,
          phone,
          birth_date: birthDate,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .select()
        .single()

      if (error) {
        console.error('Erro ao atualizar perfil:', error)
        return NextResponse.json(
          { ok: false, error: 'Erro ao atualizar perfil' },
          { status: 500 }
        )
      }

      return NextResponse.json({ ok: true, profile: data })
    } else {
      // Criar novo perfil
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          user_id: userId,
          name,
          email,
          phone,
          birth_date: birthDate
        })
        .select()
        .single()

      if (error) {
        console.error('Erro ao criar perfil:', error)
        return NextResponse.json(
          { ok: false, error: 'Erro ao criar perfil' },
          { status: 500 }
        )
      }

      return NextResponse.json({ ok: true, profile: data })
    }
  } catch (error) {
    console.error('Erro na API de perfil:', error)
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

    if (!userId) {
      return NextResponse.json(
        { ok: false, error: 'userId é obrigatório' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      console.error('Erro ao buscar perfil:', error)
      return NextResponse.json(
        { ok: false, error: 'Perfil não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ ok: true, profile: data })
  } catch (error) {
    console.error('Erro na API de perfil:', error)
    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}