import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const darkMode = cookieStore.get('darkMode')?.value || 'light';

  return NextResponse.json({ darkMode });
}

export async function POST(req: Request) {
  const { darkMode } = await req.json();

  if (darkMode !== 'light' && darkMode !== 'dark') {
    return NextResponse.json(
      { error: 'Invalid darkMode value' },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('darkMode', darkMode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
