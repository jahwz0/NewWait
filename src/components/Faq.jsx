"use client"

import { useState } from "react"

const faqs = [
    { q: "WHEN DOES THE APP LAUNCH", a: "The app will be launching in June. Sign up to our waitlist to receive notifications and updates on the development of the app." },
    { q: "IS BLKBAR FREE FOR STYLISTS", a: "Yes, joining and listing your services on BLKBAR is completely free. We only take a small commission on completed bookings." },
    { q: "WHAT IF A CLIENT DOESN'T SHOW UP", a: "Because clients pay upfront through the app, you're protected. No-shows don't mean lost money." },
    { q: "HOW DO I GET A PAYMENT FROM A CLIENT", a: "Payments are processed directly through the app. Once a booking is completed, funds are released to your account." },
]

export default function Faq(){
    const [openIndex, setOpenIndex] = useState(null)

    return(
        <div id="faq" className="bg-[#FFD738] flex flex-row px-[37px] py-[60px] gap-[60px] border-2">

            {/* Left */}
            <div className="text-black min-w-[340px]">
                <span className="block font-inter text-[12px] leading-[145%]">04-FAQ</span>
                <span className="block font-soulcraft text-[96px] leading-[84%] tracking-[-4px]">FREQUENTLY</span>
                <span className="block font-soulcraft text-[96px] leading-[84%] tracking-[-4px]">ASKED</span>
                <span className="block font-soulcraft text-[96px] leading-[84%] tracking-[-4px]">QUESTIONS</span>
                <span className="block font-inter text-[12px] leading-[145%] mt-4">What do you want to know?</span>
            </div>

            {/* Right: FAQ accordion */}
            <div className="flex flex-col gap-4 flex-1">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="[box-shadow:4px_4px_0px_black] rounded-[8px] bg-[#F5F1EA] cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        <div className="flex flex-row items-center gap-4 px-5 py-4">
                            <div className="w-10 h-10 rounded-full bg-[#FF2600] flex items-center justify-center shrink-0">
                                <span className="text-white font-bold text-[16px]">!</span>
                            </div>
                            <span className="font-avant-garde font-[700] text-[16px] tracking-[-0.32px]">{faq.q}</span>
                        </div>
                        {openIndex === i && (
                            <div className="px-5 pb-4 pl-[76px]">
                                <p className="font-inter text-[13px] leading-[145%]">{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}