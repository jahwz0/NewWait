'use client'

import Image from "next/image"

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer(){
    return(
        <footer className="bg-black text-white flex flex-col">

            {/* Top red border line */}
            <div className="h-[3px] w-full" />

            {/* Main footer content */}
            <div className="flex flex-col px-6 sm:px-10 lg:px-[60px] pt-10 sm:pt-[70px] pb-8 sm:pb-[40px]">

                {/* Row 1: Logo + column headings */}
                <div className="flex flex-col sm:flex-row sm:justify-between pb-4 sm:items-end gap-4">
                    <div className="flex items-center gap-3">
                        <Image src="/images/outlinedlogo.png" alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-10 h-10 sm:w-15 sm:h-15" />
                        <span className="font-avant-garde font-[700] text-[40px] sm:text-[44px] lg:text-[56px] leading-none">BLKBAR</span>
                    </div>
                    <div className="hidden sm:flex flex-row gap-10 md:gap-16 lg:gap-24">
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-28 lg:w-36">Product</span>
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-28 lg:w-36">Company</span>
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-28 lg:w-36">Get In Touch</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/20 mb-7" />

                {/* Row 2: Description + links */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                    <div className="max-w-60">
                        <p className="font-inter text-[13px] leading-[145%] text-white/70">A social market place for black hair</p>
                    </div>
                    <div className="flex flex-row gap-10 md:gap-16 lg:gap-24">
                        <div className="flex flex-col gap-4 sm:gap-5 w-28 lg:w-36">
                            <span className="font-inter font-[700] text-[12px] uppercase tracking-widest sm:hidden">Product</span>
                            <button onClick={() => scrollTo('why')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">For clients</button>
                            <button onClick={() => scrollTo('why')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">For stylists/barbers</button>
                            <button onClick={() => scrollTo('sneak')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">How it works</button>
                            <button onClick={() => scrollTo('faq')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">FAQ</button>
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 w-28 lg:w-36">
                            <span className="font-inter font-[700] text-[12px] uppercase tracking-widest sm:hidden">Company</span>
                            <button onClick={() => scrollTo('why')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">About</button>
                            <button onClick={() => scrollTo('waitlist')} className="font-inter text-[13px] text-white/70 hover:text-white text-left">Contact</button>
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 w-28 lg:w-36">
                            <span className="font-inter font-[700] text-[12px] uppercase tracking-widest sm:hidden">Get In Touch</span>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">Team@BLKBAR.com</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">@BLKBAR on Instagram</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">@BLKBAR on Tiktok</a>
                        </div>
                    </div>
                </div>

                {/* Big BLKBAR. text */}
                <div className="flex items-end gap-1 mt-6 sm:mt-0 overflow-hidden">
                    <span className="font-soulcraft font-[700] text-[18vw] sm:text-[15vw] lg:text-[180px] leading-none text-[#FF2600] tracking-[-2px] lg:tracking-[-4px]">BLKBAR</span>
                    <span className="font-soulcraft font-[700] text-[18vw] sm:text-[15vw] lg:text-[180px] leading-none text-[#FFD738] tracking-[-2px] lg:tracking-[-4px]">.</span>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/20 px-6 sm:px-[60px] py-4 flex flex-row justify-center gap-12">
                <a href="/business/BLKBARLtdPrivacyPolicy.html" className="font-inter text-[12px] text-white/60 hover:text-white">Privacy</a>
                <a href="/business/BLKBARLtdTermsandConditions.html" className="font-inter text-[12px] text-white/60 hover:text-white">Terms</a>
                <a className="font-inter text-[12px] text-white/60 hover:text-white">Cookies</a>
            </div>

        </footer>
    )
}
