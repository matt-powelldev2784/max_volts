import { NextResponse } from 'next/server'

export const noSessionResponse = NextResponse.json(
  {
    success: false,
    status: 401,
    errors: [
      {
        msg: 'User is not authorised. Please login to access this route.',
      },
    ],
  },
  { status: 401 }
)
