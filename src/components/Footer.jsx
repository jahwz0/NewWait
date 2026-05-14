import Image from "next/image"

export default function Footer(){
    return(
        <footer className="bg-black text-white flex flex-col">

            {/* Top red border line */}
            <div className="h-[3px] w-full" />

            {/* Main footer content */}
            <div className="flex flex-col px-[60px] pt-[70px] pb-[40px]">

                {/* Row 1: Logo + column headings */}
                <div className="flex flex-row gap-[400px] pb-4 items-end">
                    <div className="min-w-[380px] flex items-center gap-3">
                        <Image src="/images/outlinedlogo.png" alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-15 h-15" />
                        <span className="font-avant-garde font-[700] text-[56px] leading-none">BLKBAR</span>
                    </div>
                    <div className="flex flex-row flex-1 gap-[200px]">
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-45">Product</span>
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-45">Company</span>
                        <span className="font-inter font-[700] text-[12px] uppercase tracking-widest w-45">Get In Touch</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/20 mb-7" />

                {/* Row 2: Description + links */}
                <div className="flex flex-row gap-[400px]">
                    <div className="min-w-[380px]">
                        <p className="font-inter text-[13px] leading-[145%] text-white/70">A social market place for black hair</p>
                    </div>
                    <div className="flex flex-row flex-1 gap-[200px]">
                        <div className="flex flex-col gap-5 w-45">
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">For clients</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">For stylists/barbers</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">How it works</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">FAQ</a>
                        </div>
                        <div className="flex flex-col gap-5 w-45">
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">About</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">Contact</a>
                        </div>
                        <div className="flex flex-col gap-5 w-45">
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">Team@BLKBAR.com</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">@BLKBAR on Instagram</a>
                            <a className="font-inter text-[13px] text-white/70 hover:text-white">@BLKBAR on Tiktok</a>
                        </div>
                    </div>
                </div>

                {/* Big BLKBAR. text */}
                <div className="flex items-end gap-2">
                    <span className="font-soulcraft font-[700] text-[180px] leading-none text-[#FF2600] tracking-[-4px]">BLKBAR</span>
                    <span className="font-soulcraft font-[700] text-[180px] leading-none text-[#FFD738] tracking-[-4px]">.</span>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/20 px-[60px] py-4 flex flex-row justify-center gap-12">
                <a className="font-inter text-[12px] text-white/60 hover:text-white">Privacy</a>
                <a className="font-inter text-[12px] text-white/60 hover:text-white">Terms</a>
                <a className="font-inter text-[12px] text-white/60 hover:text-white">Cookies</a>
            </div>

        </footer>
    )
}