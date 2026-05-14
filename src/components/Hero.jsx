import Image from "next/image"
import { IoMdStar } from "react-icons/io";



export default function hero(){
    return(
        <>
        <div className="flex flex-row w-full overflow-hidden ml-[20px] items-stretch">

            {/* Left: text + description + buttons */}
            <div className="flex flex-col">
                <div className="text-left max-w-[650px] pb-10">
                    <span className="block font-soulcraft text-black text-[90px] font-[700] leading-[75px] tracking-[-3.12px]">
                        WHY STRUGGLE FOR YOUR</span>

                    <span className="block font-soulcraft text-[#FF2600] text-[90px] font-[700] leading-[75px] tracking-[-3.12px]">
                        NEXT LOOK</span>

                    {/* <span className=" font-soulcraft text-[#F5C518] text-[90px] font-[700] leading-[95px]">?</span> */}
                </div>

                <div className="ml-[14px] mb-2">
                    <div className="max-w-[340px]">
                        <span className="text-[13px]">BLKBAR is a social marketplace for black hair where stylists
                            and barbers can post their craft, clients looking for a barber
                            or stylist can discover and book their service in just a few taps.
                        </span>
                    </div>
                    <div className="flex flex-row gap-5 mt-[12px]">
                        <button className="bg-black text-white text-[12px] font-semibold px-6 py-3 rounded-[12px]">
                            JOIN THE WAITLIST
                        </button>
                        <button className="bg-transparent text-black text-[12px] border-1 border-black font-semibold px-6 py-3 rounded-[12px]">
                            SEE HOW IT WORKS
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: images side by side, stretch to match left column height */}
            <div className="flex flex-row flex-1 -ml-[10px]">
                <Image src="/images/blackplaceholder.png" alt="woman" width={370} height={980} className="object-cover object-top h-full w-auto" />
                <Image src="/images/redplaceholder.png" alt="man" width={370} height={980} className="object-cover object-top h-full w-auto" />
            </div>

        </div>

        {/* Scrolling ticker */}
        <div className="bg-black text-white py-5 overflow-hidden w-full">
            <div className="flex whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
                {[...Array(2)].map((_, i) => (
                    <span key={i} className="flex items-center gap-6 pr-6 font-avant-garde text-[32px] font-[700] leading-[84%] tracking-[-1.92px] uppercase text-[#FFD738]">
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