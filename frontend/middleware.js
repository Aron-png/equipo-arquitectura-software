console.log('Middleware cargado al iniciar el servidor'); // Se debe imprimir al iniciar npm run dev

import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/frontpage' };
 
export async function middleware() {
  const greeting = await get('blue');
  return NextResponse.json(greeting);
}
