import Image from "next/image"
import { IoMdStar } from "react-icons/io";



export default function hero(){
    return(
        <>
        <div className="flex flex-col sm:flex-row sm:w-full overflow-hidden sm:ml-[20px] md:ml-[0px] items-stretch">

            {/* Left: text + description + buttons */}
            <div className="flex flex-col">
                <div className="text-center sm:text-left ml-[20px] max-w-[320px] sm:max-w-[350px] lg:max-w-[650px] pb-2.5 lg:pb-10">
                    <span className="block font-soulcraft text-black text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-[700] sm:leading-[50px] md:leading-[75px] leading-[35px]  tracking-[-1] sm:tracking-[-2] md:tracking-[-3.12px]">
                        WHY STRUGGLE FOR YOUR</span>

                    <span className="block font-soulcraft text-[#FF2600] text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-[700] sm:leading-[50px] md:leading-[75px] leading-[35px]  tracking-[-1] sm:tracking-[-2] md:tracking-[-3.12px]">
                        NEXT LOOK</span>

                    {/* <span className=" font-soulcraft text-[#F5C518] text-[90px] font-[700] leading-[95px]">?</span> */}
                </div>

                <div className="sm:ml-[14px] mb-2">
                    <div className="max-w-[300px] text-center ml-[20px] sm:ml-0 sm:text-left">
                        <span className="text-[10px] leading-[5%] sm:text-[13px] md:text-[13px]">BLKBAR is a social marketplace for black hair where stylists
                            and barbers can post their craft, clients looking for a barber
                            or stylist can discover and book their service in just a few taps.
                        </span>
                    </div>
                    <div className="flex flex-row justify-center sm:justify-start gap-5 mt-[12px]">
                        <button className="bg-black text-white md:text-[12px] text-[9px] font-semibold px-3 sm:px-6 py-1 sm:py-3 rounded-[12px]">
                            JOIN THE WAITLIST
                        </button>
                        <button className="bg-transparent text-black border-1 border-black md:text-[12px] text-[9px] font-semibold px-3 md:px-6 py-1 md:py-3 rounded-[12px]">
                            SEE HOW IT WORKS
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: images side by side, stretch to match left column height */}
            <div className="flex flex-row flex-1 -ml-[10px]">
                <Image src="/images/blackplaceholder.png" alt="woman" width={370} height={980} className="object-cover object-top  h-[250px] sm:h-[250px] md:h-full w-auto" />
                <Image src="/images/redplaceholder.png" alt="man" width={370} height={980} className="object-cover object-top h-[250px] sm:h-[250px] md:h-full w-auto md:hidden" />
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