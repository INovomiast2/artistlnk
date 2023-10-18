import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return <SignIn afterSignInUrl={process.env.CLERK_AFTER_SIGNUP_SIGNIN_URL || ''} />
}

export default page