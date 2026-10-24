import { NextResponse } from 'next/server';
import { getWorkforceTrendSnapshot } from '@/lib/workforce-trends';

export async function GET() {
  return NextResponse.json(getWorkforceTrendSnapshot());
}
