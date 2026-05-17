'use client'

import Image from "next/image"
import { IoMdStar } from "react-icons/io";

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function hero(){
    return(
        <>
        <div className="flex flex-col sm:flex-row sm:w-full overflow-hidden sm:ml-[20px] items-stretch ">

            {/* Left: text + description + buttons */}
            <div className="flex flex-col items-center md:items-start">
                <div className="text-center md:text-left max-w-[320px] sm:max-w-[350px] pb-2.5 lg:pb-10">
                    <span className="block font-soulcraft text-black text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px]">
                        WHY STRUGGLE FOR YOUR</span>

                    <span className="block font-soulcraft text-[#FF2600] text-[26px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-7 sm:leading-12 md:leading-15 lg:leading-20 tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px]">
                        NEXT LOOK</span>

                    {/* <span className=" font-soulcraft text-[#F5C518] text-[90px] font-[700] leading-[95px]">?</span> */}
                </div>

                <div className="sm:ml-[14px] mb-2 md:pb-5">
                    <div className="max-w-[300px] text-center ml-[20px] sm:ml-0 sm:text-left md:pb-5">
                        <span className="text-[10px] leading-[-50px] sm:text-[13px] md:text-[15px]">BLKBAR is a social marketplace for black hair where stylists
                            and barbers can post their craft, clients looking for a barber
                            or stylist can discover and book their service in just a few taps.
                        </span>
                    </div>
                    <div className="flex flex-row justify-center sm:justify-start gap-5 mt-[12px]">
                        <button onClick={() => scrollTo('waitlist')} className="bg-black text-white md:text-[12px] text-[9px] font-semibold px-3 sm:px-6 py-1 sm:py-3 rounded-[12px]">
                            JOIN THE WAITLIST
                        </button>
                        <button onClick={() => scrollTo('sneak')} className="bg-transparent text-black border-1 border-black md:text-[12px] text-[9px] font-semibold px-3 md:px-6 py-1 md:py-3 rounded-[12px]">
                            SEE HOW IT WORKS
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: images side by side, stretch to match left column height */}
            <div className="flex items-center md:items-end flex-row flex-1 justify-center md:justify-start 2xl:justify-center -ml-[10px] pt-[20px] xl:max-w-[450px] 2xl:max-w-full">
                <Image src="/images/black1.png" alt="woman" width={370} height={980} className="object-cover object-top h-62.5 sm:h-62.5 md:h-full w-auto" />
                <Image src="/images/red1.png" alt="man" width={370} height={980} className="object-cover object-top h-62.5 sm:h-62.5 md:h-full 2xl:h-150 w-auto md:hidden xl:inline-flex" />
            </div>

        </div>

        {/* Scrolling ticker */}
        <div className="bg-black text-white py-5 overflow-hidden w-full">
            <div className="flex whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
                {[...Array(2)].map((_, i) => (
                    <span key={i} className="flex items-center gap-6 pr-6 font-avant-garde md:text-[32px] font-[700] leading-[84%] tracking-[2px] md:tracking-[-1.92px] uppercase text-[#FFD738]">
                        <span>BOOK IN TWO TAPS</span><span><IoMdStar color="#FF2600" size={24} /></span>
                        <span>BLKBAR</span><span><IoMdStar color="#FF2600" size={24} /></span>
                        <span>WHY STRUGGLE FOR YOUR NEXT LOOK</span><span><IoMdStar color="#FF2600" size={24} /></span>
                        <span>BLKBAR</span><span><IoMdStar color="#FF2600" size={24} /></span>
                        <span>THE MARKETPLACE FOR BLACK HAIR</span><span><IoMdStar color="#FF2600" size={24} /></span>
                        <span>BLKBAR</span><span><IoMdStar color="#FF2600" size={24} /></span>
                    </span>
                ))}
            </div>
        </div>
        </>

    )
}