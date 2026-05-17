"use client"

import { useState } from "react"
import Image from "next/image"

const stylistCards = [
    { num: "01", title: "EVERY USER IS YOUR AUDIENCE", desc: "On BLKBAR every viewer is a potential client", img: "/images/Frame403.png" },
    { num: "02", title: "LOCATION FEATURES", desc: "Be discovered by the local community", img: "/images/Frame404.png" },
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
        <div id="why" className="mt-[20px] sm:mt-[85px] ml-[20px]">

            <div className="text-left sm:max-w-[320px] md:max-w-[650px] sm:pb-6 pr-[20px] sm:pr-0">
                <span className="block font-inter font-[500] text-[14px] leading-[145%] pb-[13px]">01-WHY US</span>
                <span className="block font-soulcraft text-black text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px]">
    WE ARE FOR THE</span>

                {/* Animated heading — slides up out, then new text slides up in */}
                <span
                    className="block font-soulcraft text-[#FF2600] text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px]"
                    style={{ animation: leaving ? 'slideUpOut 0.35s ease forwards' : 'slideUpIn 0.4s ease forwards' }}
                >
                    {isStylist ? "STYLISTS/BARBERS" : "CLIENTS"}
                </span>

                <p
                    className="mt-4 pb-5 sm:pb-0 text-[10px] sm:text-[15px] max-w-[360px] leading-[145%]"
                    style={{ animation: leaving ? 'slideUpOut 0.35s ease forwards' : 'slideUpIn 0.4s ease 0.08s both' }}
                >
                    {isStylist
                        ? "We know how hard it is to get exposure on social media apps like Instagram and TikTok so let us make it easier for you!"
                        : "We know how hard it is to find a stylist or barber you can trust so let us make it easier for you!"
                    }
                </p>
            </div>

            {/* buttons */}
            <div className="flex flex-row sm:text-right mr-[50]">
                <button
                    onClick={() => toggle(true)}
                    className={`sm:text-[12px] text-[9px] font-semibold w-[100px] sm:w-[160px] py-1 sm:py-2 rounded-[12px] mr-[10px] ${isStylist ? "bg-black text-white" : "bg-transparent border border-black text-black"}`}>
                    STYLIST/BARBER
                </button>
                <button
                    onClick={() => toggle(false)}
                    className={`sm:text-[12px] text-[9px] font-semibold w-[100px] sm:w-[160px] py-1 sm:py-2 rounded-[12px] ${!isStylist ? "bg-black text-white" : "bg-transparent border border-black text-black"}`}>
                    CLIENT
                </button>
            </div>

            {/* Image grid — cards slide down off screen, then slide back up */}
            <div className="grid grid-cols-3 gap-4 mt-6 mr-[20px] sm:mr-[50px] mb-[50px] sm:mb-[100px]">
                {cards.map((card, i) => (
                    <div
                        key={card.num}
                        className="flex flex-col"
                        style={{
                            animation: leaving
                                ? `slideDownOut 0.3s ease ${i * 0.05}s forwards`
                                : `slideUpIn 0.4s ease ${0.1 + i * 0.08}s both`,
                        }}
                    >
                        {/* card image */}
                        <div className="relative rounded-2xl border border-black/20 overflow-hidden aspect-5/4 bg-gray-100">
                            <span className="absolute top-3 left-4 font-soulcraft text-[#FFD738] text-[20px] sm:text-[48px] font-bold leading-none z-10">{card.num}</span>
                            <Image src={card.img} alt={card.title} fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
                            {/* overlay text — hidden on mobile, shown sm+ */}
                            <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white text-[11px] md:text-[16px] font-bold uppercase">{card.title}</p>
                                <p className="text-white text-[10px] md:text-[15px] mt-1 leading-tight">{card.desc}</p>
                            </div>
                        </div>
                        {/* below-card text — mobile only */}
                        <div className="sm:hidden mt-2 px-1">
                            <p className="text-black text-[10px] font-bold uppercase leading-tight">{card.title}</p>
                            <p className="text-black/70 text-[9px] mt-1 leading-tight">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}