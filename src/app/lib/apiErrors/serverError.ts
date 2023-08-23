import { NextResponse } from 'next/server'

export const serverError500 = NextResponse.json(
  {
    success: false,
    status: 500,
    message: 'Server Error. Please try again later.',
  },
  {
    status: 500,
  }
)
