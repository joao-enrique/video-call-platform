import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { PhoneCall } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <div className='flex h-16 items-center px-4 conatiner mx-auto'>
            {/* left side -LOGO */}
            <Link href="/" className='flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80'>
                <PhoneCall className='size-8 text-emerald-500'/>
                <span className='bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent'>
                    HireCall
                </span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
