import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const count = await kv.incr('visitor_count');
  const displayCount = (count*2 + 5000);

  return NextResponse.json({
    // alerts: [
    //   {
    //     id: 1,
    //     text: "New competitions and deadlines are live",
    //     href: "/feed",
    //     priority: "high",
    //   },
    //   {
    //     id: 2,
    //     text: "Workshop registrations closing soon",
    //     href: "/workshops", 
    //     priority: "medium",
    //   },
    // ],
  });
}