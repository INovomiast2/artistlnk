import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <SignIn afterSignInUrl={`/dashboard`} />
    </div>
  )
}

export default page