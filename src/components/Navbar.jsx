import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton, auth, currentUser } from "@clerk/nextjs";

const Navbar = () => {

    const { userId } = auth();

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li>
                            <a>Services</a>
                            <ul className="p-2">
                                <li><a>Artist Link</a></li>
                                <li><a>Link Shortner</a></li>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                    </ul>
                </div>
                <Link className="inline-block" href={`./`}>
                    <Image src={`/logo.png`} alt='artistlnk-logo' width={50} height={50} className='inline-block' />
                    <span className='inline-block font-bold text-lg align-middle'>Artistlnk</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Homepage</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2">
                                <li><a>Artist Link</a></li>
                                <li><a>Link Shortner</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Pricing</a></li>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                {
                    userId ? <UserButton /> : "Get Started" 
                }
            </div>
        </div>
    )
}

export default Navbar