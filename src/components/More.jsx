export default function More(){
    return(
        <div className="bg-[#FF2600] p-8 sm:p-16 md:p-[50px] lg:p-[100px] border-2 border-black flex flex-col xl:flex-row items-start xl:items-center gap-6">
            <div className="text-white flex-1">
                <p className="text-[28px] sm:text-[64px] md:text-[96px] font-soulcraft leading-[84%] tracking-[-2px] sm:tracking-[-4px]">MORE QUESTIONS?</p>
                <p className="text-[11px] sm:text-[12px] leading-[145%] mt-1">Dont worry just ask</p>
            </div>
            <div className="shrink-0">
                <p className="text-white pb-3 text-[11px] sm:text-[13px]">Email us:</p>
                <span className="text-white border-3 py-2 px-4 rounded-full text-[14px] sm:text-[18px] md:text-[24px] leading-[145%]"><a href="mailto:Team@BLKBAR.com">Team@BLKBAR.com</a></span>
            </div>
        </div>
    )
}
