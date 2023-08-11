import { NextResponse } from 'next/server'

export const badRequestError400 = NextResponse.json(
  {
    success: false,
    status: 400,
    errors: [
      { msg: 'Please provide all required fields in the correct format' },
    ],
  },
  {
    status: 400,
  }
)
