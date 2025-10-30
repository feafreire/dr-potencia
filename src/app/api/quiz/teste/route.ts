import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'API de teste do Quiz funcionando',
    endpoint: '/api/quiz/teste',
    timestamp: new Date().toISOString(),
    instructions: {
      test_endpoint: 'GET /api/quiz/teste',
      quiz_endpoint: 'POST /api/quiz',
      google_apps_script: 'https://script.google.com/macros/s/AKfycbwW_4A_-utrY5pCj6lCTv8_jSOQY-Ks_DaYP67RgmqyY_R09yFpGxCHQ6yeg5u3C5TQnw/exec',
      token: 'potente0709'
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Dados de teste simulados
    const testPayload = {
      name: body.name || 'Teste Usuario',
      email: body.email || 'teste@exemplo.com',
      phone: body.phone || '(11) 99999-0000',
      answers: body.answers || {
        q1: 'Teste Usuario',
        q2: 'teste@exemplo.com',
        q3: '(11) 99999-0000',
        q4: '26–35',
        q5: 'Solteiro'
      },
      sessionId: body.sessionId || 'test-session-' + Date.now(),
      user_agent: body.user_agent || 'Test Agent',
      utm_source: body.utm_source || 'test',
      utm_medium: body.utm_medium || 'api',
      utm_campaign: body.utm_campaign || 'validation'
    }

    console.log('🧪 Teste - Payload preparado:', testPayload)

    // Fazer requisição para a API principal
    const apiResponse = await fetch(`${request.nextUrl.origin}/api/quiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload)
    })

    const result = await apiResponse.json()
    
    return NextResponse.json({
      ok: true,
      message: 'Teste executado com sucesso',
      test_payload: testPayload,
      api_response: result,
      status: apiResponse.status,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('🔴 Erro no teste:', error)
    
    return NextResponse.json({
      ok: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}