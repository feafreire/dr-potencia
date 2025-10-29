import { NextResponse } from 'next/server';

// GET para testar se a rota e as variáveis estão ativas
export async function GET() {
  return NextResponse.json({
    route: '/api/sheets',
    hasUrl: true,
    hasToken: true,
    accepts: ['POST']
  });
}

// POST principal que envia os dados para o Google Sheets
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const url = 'https://script.google.com/macros/s/AKfycbwW_4A_-utrY5pCj6lCTv8_jSOQY-Ks_DaYP67RgmqyY_R09yFpGxCHQ6yeg5u3C5TQnw/exec';
    const token = 'potente0709';

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, ...body })
    });

    const text = await r.text();
    let data: any;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return NextResponse.json(data, { status: r.status });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'proxy error' },
      { status: 500 }
    );
  }
}
