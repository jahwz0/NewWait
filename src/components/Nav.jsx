'use client'

import { useState } from 'react'
import Image from 'next/image'

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav(){
    const [open, setOpen] = useState(false)

    return (
    <div>
        <header className="pt-5">
            <div className="font-inter text-[6px] sm:text-[12px] font-normal flex items-center py-1">
                <span className="inline-block w-2 sm:w-5 self-stretch bg-black" />
                <span className="flex-1 text-left pl-4">ISSUE 001 - SPRING 2026</span>
                <span className="flex-1 text-center">A MARKETPLACE FOR BLACK HAIR</span>
                <span className="flex-1 text-right pr-4">JOIN THE WAITLIST - FREE</span>
                <span className="inline-block w-2 sm:w-5 self-stretch bg-black" />
            </div>
        </header>

        <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
                <Image src="/images/outlinedlogo.png" alt="BLKBAR outlined logo" width={58} height={58} />
                <span className="text-[36px] lg:text-[56px] font-avant-garde font-bold leading-none">BLKBAR</span>
            </div>

            {/* Desktop: nav links */}
            <ul className="hidden sm:flex items-center gap-8 text-[13px] font-semibold">
                <li><button onClick={() => scrollTo('why')} className="hover:opacity-60 transition-opacity">WHY US</button></li>
                <li><button onClick={() => scrollTo('sneak')} className="hover:opacity-60 transition-opacity">HOW IT WORKS</button></li>
                <li><button onClick={() => scrollTo('sneak')} className="hover:opacity-60 transition-opacity">THE APP</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:opacity-60 transition-opacity">FAQ</button></li>
            </ul>

            {/* Desktop: CTA */}
            <button
                onClick={() => scrollTo('waitlist')}
                className="hidden sm:block bg-red-600 text-white text-[12px] font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
                JOIN THE WAITLIST
            </button>

            {/* Mobile/tablet: hamburger */}
            <button
                onClick={() => setOpen(!open)}
                className="sm:hidden flex flex-col justify-center gap-[5px] p-2"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
        </nav>

        {/* Mobile/tablet: dropdown — links only, no CTA */}
        {open && (
            <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-[14px] font-semibold border-b border-black/10">
                <button onClick={() => { scrollTo('why'); setOpen(false) }} className="text-left hover:opacity-60 transition-opacity">WHY US</button>
                <button onClick={() => { scrollTo('sneak'); setOpen(false) }} className="text-left hover:opacity-60 transition-opacity">HOW IT WORKS</button>
                <button onClick={() => { scrollTo('sneak'); setOpen(false) }} className="text-left hover:opacity-60 transition-opacity">THE APP</button>
                <button onClick={() => { scrollTo('faq'); setOpen(false) }} className="text-left hover:opacity-60 transition-opacity">FAQ</button>
            </div>
        )}
    </div>
    )
}