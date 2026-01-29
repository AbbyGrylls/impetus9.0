import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const count = await kv.incr('visitor_count');
  const displayCount = count + 5000;

  return NextResponse.json({ total: displayCount });
}