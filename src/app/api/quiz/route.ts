import { NextRequest, NextResponse } from 'next/server'

// Configurações do Google Apps Script
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwW_4A_-utrY5pCj6lCTv8_jSOQY-Ks_DaYP67RgmqyY_R09yFpGxCHQ6yeg5u3C5TQnw/exec'
const SECURITY_TOKEN = 'potente0709'

export async function POST(request: NextRequest) {
  try {
    // 1. Validar Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { ok: false, error: 'Content-Type deve ser application/json' },
        { status: 400 }
      )
    }

    // 2. Extrair dados do body
    const body = await request.json()
    console.log('📥 Dados recebidos na API:', body)

    // 3. Validar campos obrigatórios
    const { name, email, phone, answers } = body
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Campos obrigatórios: name, email, phone' },
        { status: 400 }
      )
    }

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Campo answers é obrigatório e deve ser um objeto' },
        { status: 400 }
      )
    }

    // 4. Preparar payload para o Google Apps Script
    const payload = {
      token: SECURITY_TOKEN,
      sessionId: body.sessionId || null,
      user_agent: body.user_agent || 'Unknown',
      name,
      email,
      phone,
      answers,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      timestamp: new Date().toISOString()
    }

    console.log('📤 Enviando para Google Apps Script:', {
      url: GOOGLE_APPS_SCRIPT_URL,
      payload: { ...payload, token: '[HIDDEN]' }
    })

    // 5. Fazer requisição para o Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    // 6. Verificar se a resposta é válida
    if (!response.ok) {
      console.error('❌ Erro HTTP do Google Apps Script:', response.status, response.statusText)
      return NextResponse.json(
        { ok: false, error: `Erro HTTP ${response.status}: ${response.statusText}` },
        { status: 502 }
      )
    }

    // 7. Processar resposta do Google Apps Script
    const result = await response.json()
    console.log('📥 Resposta do Google Apps Script:', result)

    // 8. Validar resposta do Apps Script
    if (result.ok) {
      console.log('✅ Sucesso! Dados salvos na planilha')
      return NextResponse.json({
        ok: true,
        message: 'Dados salvos com sucesso na planilha',
        data: result
      })
    } else {
      console.error('❌ Erro retornado pelo Apps Script:', result.error)
      return NextResponse.json(
        { ok: false, error: result.error || 'Erro desconhecido do Google Apps Script' },
        { status: 500 }
      )
    }

  } catch (error: any) {
    console.error('🔴 Erro interno da API:', error)
    
    // Tratar diferentes tipos de erro
    if (error.name === 'SyntaxError') {
      return NextResponse.json(
        { ok: false, error: 'JSON inválido no body da requisição' },
        { status: 400 }
      )
    }

    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { ok: false, error: 'Erro de conexão com Google Apps Script' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { ok: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Método GET para teste da API
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'API Quiz funcionando',
    endpoint: '/api/quiz',
    methods: ['POST'],
    timestamp: new Date().toISOString()
  })
}