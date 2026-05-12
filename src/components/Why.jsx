export default function Why(){
    return(
        <div className="mt-[85px] ml-[20px]">

            <div className="text-left">
                <span className="block font-inter text-[13px] font-[700] uppercase tracking-widest mb-2">WHY US</span>

                <span className="block font-soulcraft font-[700] text-[96px] leading-[84%] tracking-[-1.92px] text-black">WE ARE FOR THE</span>

                <span className="block font-soulcraft font-[700] text-[96px] leading-[84%] tracking-[-1.92px] text-[#FF2600]">STYLISTS/BARBERS</span>

                <p className="mt-4 text-[13px] max-w-[360px] leading-[145%]">
                    We know how hard it is to get exposure on social media
                    apps like Instagram and TikTok so let us make it easier for you
                </p>
            </div>

            {/* buttons */}
            <div className="text-right mr-[50]">
                <button className="bg-black text-white text-[12px] font-semibold w-[160px] py-2 rounded-[12px] mr-[10px]">
                    STYLIST/BARBER
                </button>
                <button className="bg-transparent border-1 text-black text-[12px] font-semibold w-[160px] py-2 rounded-[12px]">
                    CLIENT
                </button>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-3 gap-4 mt-6 mr-[50px]">
                {[
                    { num: "01", title: "EVERY USER IS YOUR AUDIENCE", desc: "On BLKBAR every viewer is a potential client" },
                    { num: "02", title: "SUBSCRIBE/FEE PAYMENTS", desc: "Allow payments to be made in advance — no bookings, no payments, no problems" },
                    { num: "03", title: "LET YOUR WORK SPEAK", desc: "Post your craft and build a portfolio that speaks for itself" },
                ].map((card) => (
                    <div key={card.num} className="relative rounded-[16px] border border-black/20 overflow-hidden aspect-4/3 bg-gray-100">
                        {/* Number badge */}
                        <div className="absolute top-3 left-3 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-[12px] font-bold">{card.num}</span>
                        </div>
                        {/* Image goes here */}
                        {/* Bottom text overlay */}
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