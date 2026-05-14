"use client"

import { useState } from "react"
import Image from "next/image"

const stylistCards = [
    { num: "01", title: "EVERY USER IS YOUR AUDIENCE", desc: "On BLKBAR every viewer is a potential client", img: "/images/Frame403.png" },
    { num: "02", title: "SUBSCRIBE/FEE PAYMENTS", desc: "Allow payments to be made in advance — no bookings, no payments, no problems", img: "/images/Frame404.png" },
    { num: "03", title: "LET YOUR WORK SPEAK", desc: "Post your craft and build a portfolio that speaks for itself", img: "/images/Frame405.png" },
]

const clientCards = [
    { num: "01", title: "FIND YOUR STYLIST", desc: "Browse stylists and barbers near you in just a few taps", img: "/images/Frame403.png" },
    { num: "02", title: "BOOK IN SECONDS", desc: "No back and forth — see availability and book instantly", img: "/images/Frame404.png" },
    { num: "03", title: "PAY SEAMLESSLY", desc: "Pay directly through the app, no cash needed", img: "/images/Frame405.png" },
]

export default function Why(){
    const [isStylist, setIsStylist] = useState(true)
    const [leaving, setLeaving] = useState(false)
    const cards = isStylist ? stylistCards : clientCards

    const toggle = (val) => {
        if (val === isStylist || leaving) return
        setLeaving(true)
        setTimeout(() => {
            setIsStylist(val)
            setLeaving(false)
        }, 350)
    }

    return(
        <div id="why" className="mt-[85px] ml-[20px]">

            <div className="text-left">
                <span className="block font-inter text-[13px] font-[700] uppercase tracking-widest mb-2">WHY US</span>
                <span className="block font-soulcraft font-[700] text-[96px] leading-[84%] tracking-[-1.92px] text-black">WE ARE FOR THE</span>

                {/* Animated heading — slides up out, then new text slides up in */}
                <span
                    className="block font-soulcraft font-[700] text-[96px] leading-[84%] tracking-[-1.92px] text-[#FF2600]"
                    style={{ animation: leaving ? 'slideUpOut 0.35s ease forwards' : 'slideUpIn 0.4s ease forwards' }}
                >
                    {isStylist ? "STYLISTS/BARBERS" : "CLIENTS"}
                </span>

                <p
                    className="mt-4 text-[13px] max-w-[360px] leading-[145%]"
                    style={{ animation: leaving ? 'slideUpOut 0.35s ease forwards' : 'slideUpIn 0.4s ease 0.08s both' }}
                >
                    {isStylist
                        ? "We know how hard it is to get exposure on social media apps like Instagram and TikTok so let us make it easier for you"
                        : "We know how hard it is to find a stylist or barber you can trust so let us make it easier for you"
                    }
                </p>
            </div>

            {/* buttons */}
            <div className="text-right mr-[50]">
                <button
                    onClick={() => toggle(true)}
                    className={`text-[12px] font-semibold w-[160px] py-2 rounded-[12px] mr-[10px] ${isStylist ? "bg-black text-white" : "bg-transparent border border-black text-black"}`}>
                    STYLIST/BARBER
                </button>
                <button
                    onClick={() => toggle(false)}
                    className={`text-[12px] font-semibold w-[160px] py-2 rounded-[12px] ${!isStylist ? "bg-black text-white" : "bg-transparent border border-black text-black"}`}>
                    CLIENT
                </button>
            </div>

            {/* Image grid — cards slide down off screen, then slide back up */}
            <div className="grid grid-cols-3 gap-4 mt-6 mr-[50px] mb-[100px]">
                {cards.map((card, i) => (
                    <div
                        key={card.num}
                        className="relative rounded-2xl border border-black/20 overflow-hidden aspect-5/4 bg-gray-100"
                        style={{
                            animation: leaving
                                ? `slideDownOut 0.3s ease ${i * 0.05}s forwards`
                                : `slideUpIn 0.4s ease ${0.1 + i * 0.08}s both`,
                        }}
                    >
                        <span className="absolute top-3 left-4 font-soulcraft text-[#FFD738] text-[48px] font-bold leading-none z-10">{card.num}</span>
                        <Image src={card.img} alt={card.title} fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white text-[11px] font-bold uppercase">{card.title}</p>
                            <p className="text-white text-[10px] mt-1 leading-tight">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}