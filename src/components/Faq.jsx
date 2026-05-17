"use client"

import { useState } from "react"

const faqs = [
    { q: "How does BLKBAR work?", a: "BLKBAR is a marketplace app that connects you with talented hairstylists and barbers near you. Browse stylist profiles, view their work, check availability, and book your appointment — all in one place. Once booked, you'll receive a confirmation and can track everything through the app." },
    { q: "I'm a stylist — how do I get clients through BLKBAR?", a: "Create your profile, showcase your portfolio, set your services and pricing, and you're live. Clients in your area can discover and book you directly. You get paid through the app with no chasing invoices — BLKBAR handles the transaction so you can focus on the work." },
    { q: "Is it free to use?", a: "BLKBAR is free to download and browse. Clients pay for bookings through the app. Stylists only pay when they earn — a small platform fee is taken per completed booking, with no upfront or monthly subscription costs." },
    { q: "When does BLKBAR launch?", a: "We're putting the finishing touches on the app right now. Join the waitlist to be first in line when we go live — waitlisted stylists and clients from our launch community get priority access and early supporter perks." },
]

export default function Faq(){
    const [openIndex, setOpenIndex] = useState(null)

    return(
        <div id="faq" className="bg-[#FFD738] flex flex-col xl:flex-row px-5 sm:px-9.25 py-10 sm:py-15 gap-8 sm:gap-15 border-2">

            {/* Left */}
            <div className="text-black sm:min-w-85">
                <span className="block font-inter text-[11px] sm:text-[12px] leading-[40px]">04-FAQ</span>
                <div className="font-soulcraft text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px]">
                    <span className="block">FREQUENTLY</span>
                    <span className="block">ASKED</span>
                    <span className="block">QUESTIONS</span>
                </div>
                <span className="block font-inter text-[11px] sm:text-[12px] leading-[145%] mt-4">What do you want to know?</span>
            </div>

            {/* Right: FAQ accordion */}
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="[box-shadow:4px_4px_0px_black] rounded-[8px] bg-[#F5F1EA] cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        <div className="flex flex-row items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF2600] flex items-center justify-center shrink-0">
                                <span className="text-white font-bold text-[14px] sm:text-[16px]">!</span>
                            </div>
                            <span className="font-avant-garde font-[700] text-[12px] sm:text-[16px] tracking-[-0.32px]">{faq.q}</span>
                        </div>
                        {openIndex === i && (
                            <div className="px-4 sm:px-5 pb-3 sm:pb-4 pl-15 sm:pl-19">
                                <p className="font-inter text-[11px] sm:text-[13px] leading-[145%]">{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}
