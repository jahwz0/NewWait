"use client"

import { useState } from "react"
import Image from "next/image"

const previews = [
    { img: "/images/preview1.png", desc: "View different haircuts and styles curated and posted by a stylist/barber also be able to check your calender to see bookings that our upcoming and your inbox for notifications on deals and promotions" },
    { img: "/images/preview2.png", desc: "Be able to see the styles and haircuts that a stylist/barber can provide and prices. You can also view their portfolio showing of their work and reviews from other clients." },
    { img: "/images/preview3.png", desc: "Booking has never been simpler select from various different styles customised and hand picked by the stylist/barber and with only a few clicks payment is done and you are ready for your new look." },
]

export default function Sneak(){
    const [index, setIndex] = useState(0)

    const prev = () => setIndex(i => (i - 1 + previews.length) % previews.length)
    const next = () => setIndex(i => (i + 1) % previews.length)

    return(
        <div id="sneak" className="bg-black flex flex-col sm:flex-row md:flex-col pt-[20px] sm:pt-[85px] pl-[20px] pb-[20px] sm:pb-[85px]">

            {/* Left: heading + description */}
            <div className="sm:pr-[100px] md:pr-0">
                <div className="font-inter font-[500] text-[12px] leading-[145%] pb-[13px]">
                    <span className="text-white">02- SNEAK PEAK</span>
                </div>
                <div className="font-soulcraft flex flex-row items-center gap-4 text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px] ">
                    <span className="text-white">IT'S JUST A</span>
                    <div className="flex flex-row gap-2">
                    <span className="text-[#FFD738] ml-[-6px]">FEED</span>
                        {/* <Image src="/images/iphone.png" alt="iphone" width={96} height={96} className="h-[34px] sm:h-full md:h-[70px] w-auto pb-[23x]" /> */}
                    </div>
                </div>
                <div className="max-w-[350px] md:max-w-[500px] font-inter text-[9px] sm:text-[12px] leading-[145%] text-white pt-3 sm:pt-0 md:pt-5 md:pb-5 text-center md:text-left mx-auto md:mx-0">
                    <span>Difference is BLKBAR doesn't show you nonsense only real work by real hands and is sorted by whose nearby. Tap once to book and pay in the same flow.</span>
                </div>
            </div>

            {/* Right: previews */}
            <div className="mt-6 sm:mt-0">

                {/* Mobile: single card + arrows */}
                <div className="sm:hidden flex flex-col items-center gap-3 text-white text-[9px] text-center">
                    <Image src={previews[index].img} alt="iphone app preview" width={0} height={0} sizes="100vw" loading="eager" className="w-[180px] h-auto" />
                    <p className="max-w-[260px]">{previews[index].desc}</p>
                    <div className="flex items-center gap-6 mt-1">
                        <button onClick={prev} className="text-white text-[20px] leading-none">&#8592;</button>
                        <span className="text-white/50 text-[10px]">{index + 1} / {previews.length}</span>
                        <button onClick={next} className="text-white text-[20px] leading-none">&#8594;</button>
                    </div>
                </div>

                {/* Desktop: all three side by side */}
                <div className="hidden sm:flex flex-row gap-[26px] justify-center text-center">
                    {previews.map((p, i) => (
                        <div key={i} className="text-white w-[150px] md:w-[200px] lg:w-[380px] text-[9px] md:text-[12px]">
                            <Image src={p.img} alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                            <p className="mt-2">{p.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
