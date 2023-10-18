import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignUp afterSignUpUrl={`/`} />
    </div>
  )
}

export default page