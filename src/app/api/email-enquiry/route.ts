import { NextRequest, NextResponse } from 'next/server'
import { serverError500 } from '@/app/lib/apiErrors/serverError'
const sgMail = require('@sendgrid/mail')
import { htmlEmailString } from './htmlEmailString'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const data = await req.json()
  const { name } = data

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'maxvoltsenquires@gmail.com',
    from: 'maxvoltsenquires@gmail.com',
    subject: `Max Volts Website Enquiry from ${name}`,
    text: 'text',
    html: htmlEmailString(data),
  }
  try {
    await sgMail.send(msg)
    return NextResponse.json(
      { message: 'Email sent', status: 200 },
      { status: 200 }
    )
  } catch (error: any) {
    console.error(error)
    return serverError500
  }
}
