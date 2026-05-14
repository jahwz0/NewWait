import Image from "next/image"

export default function Sneak(){
    return(
        <div id="sneak" className="bg-black flex p-20">
            <div className="pr-[100px]">
                <div className="font-inter font-[500] text-[12px] leading-[145%] pb-[13px]">
                <span className="text-white">02- SNEAK PEAK</span>
            </div>
            <div className="font-soulcraft text-[96px] leading-[84%] tracking-[-4px]">
                <span className="block text-white whitespace-nowrap">IT'S JUST</span>
                <div className="flex flex-row gap-4">
                    <span className="text-white">A </span><span className="text-[#FFD738]">FEED</span>
                    <Image src="/images/iphone.png" alt='iphone' width={96} height={96} /> 
                </div>
            </div>
            <div className="max-w-[336px] font-inter text-[12px] leading-[145%] text-white">
               <span>Difference is BLKBAR doesn’t show you nonsense only real work by real hands and is sorted by whose nearby. Tap once to book and pay in the same flow.</span>
            </div>
            </div>

            <div className="">
                <div className="flex flex-row gap-[26px] text-center">
                    <div className="text-white w-[380px]">
                        <Image src="/images/preview1.png" alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                        <p>View different haircuts and styles curated and posted by a stylist/barber also be able to check your calender to see bookings that our upcoming and your inbox for notifications on deals and promotions</p>
                    </div>

                    <div className="text-white w-[380px]">
                        <Image src="/images/preview2.png" alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                        <p>Be able to see the styles and haircuts that a stylist/barber can provide and prices. You can also view their portfolio showing of their work and reviews from other clients.</p>
                    </div>

                    <div className="text-white w-[380px]">
                        <Image src="/images/preview3.png" alt="iphone app preview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                        <p>Booking has never been simpler select from various different styles customised and hand picked by the stylist/barber and with only a few clicks payment is done and you are ready for your new look.</p>
                    </div>
                    
                    
                </div>


            </div>
            
        </div>
    )
}