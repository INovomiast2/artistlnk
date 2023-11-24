import React from 'react'
import { auth } from '@clerk/nextjs'
import Link from 'next/link';


const HeroBtn = () => {

    const { userId } = auth();

  return (
    <Link href="/app/dashboard"><button className="btn btn-primary">{ userId ? "Go to Dashboard" : "Get Started" }</button></Link>
  )
}

export default HeroBtn