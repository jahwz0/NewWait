'use client'
import { useState } from 'react'

function WaitlistForm() {
    const [role, setRole] = useState('client')
    const [privacy, setPrivacy] = useState(false)
    const [emails, setEmails] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <div className="bg-[#1a1a1a] rounded-[20px] p-6 sm:p-8 flex flex-col gap-5 w-full sm:w-80 md:w-150 lg:w-100 xl:w-150">

            {/* Email input */}
            <div className="flex flex-col gap-1">
                <label className="font-inter text-[11px] text-white/50 uppercase tracking-widest">Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="You@email.com"
                    className="bg-transparent border-b border-white/30 text-white text-[16px] sm:text-[22px] font-inter pb-2 outline-none placeholder:text-white/30 focus:border-white/70 transition-colors"
                />
            </div>

            {/* Role toggle */}
            <div className="flex flex-row gap-3">
                <button
                    onClick={() => setRole('client')}
                    className={`flex-1 py-2 sm:py-3 rounded-full font-inter text-[11px] sm:text-[12px] font-bold uppercase tracking-widest transition-colors ${
                        role === 'client'
                            ? 'bg-[#FF2600] text-white'
                            : 'bg-transparent border border-white/40 text-white/60'
                    }`}
                >
                    Client
                </button>
                <button
                    onClick={() => setRole('stylist')}
                    className={`flex-1 py-2 sm:py-3 rounded-full font-inter text-[11px] sm:text-[12px] font-bold uppercase tracking-widest transition-colors ${
                        role === 'stylist'
                            ? 'bg-[#FF2600] text-white'
                            : 'bg-transparent border border-white/40 text-white/60'
                    }`}
                >
                    Stylist/Barber
                </button>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)} className="w-4 h-4 accent-[#FF2600]" />
                    <span className="font-inter text-[11px] sm:text-[12px] text-white/60">I agree to the Privacy policy</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={emails} onChange={e => setEmails(e.target.checked)} className="w-4 h-4 accent-[#FF2600]" />
                    <span className="font-inter text-[11px] sm:text-[12px] text-white/60">Accept occasional email about launch and other notices</span>
                </label>
            </div>

            {/* Submit */}
            <button className="w-full bg-[#FF2600] text-white font-inter text-[12px] sm:text-[13px] font-bold uppercase tracking-widest py-4 sm:py-5 rounded-full hover:bg-[#e02200] transition-colors">
                Join the Waitlist
            </button>

        </div>
    )
}

export default function Waitlist() {
    return (
        <div id="waitlist" className="border-2 pt-10 sm:pt-20 pb-10 sm:pb-20">

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 px-5 lg:px-18.5 pb-8 sm:pb-12.5 gap-y-4 sm:gap-y-0 text-center justify-items-center">
                {[
                    { label: 'ON THE WAITLIST', value: 'XXXX' },
                    { label: 'STYLISTS/BARBERS', value: 'XXXX' },
                    { label: 'CLIENTS', value: 'XXXX' },
                    { label: 'LAUNCH', value: 'XXXX' },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-5">
                        <span className="font-inter text-[8px] sm:text-[9px] md:text-[12px] font-normal">{stat.label}</span>
                        <span className="font-inter text-[22px] sm:text-[32px] font-[700] leading-[84%]">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Main row: copy left, form right */}
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-10 xl:gap-20 px-5 sm:px-18.5">

                {/* Left: heading + benefits */}
                <div className="flex flex-col flex-1">
                    <span className="font-inter font-[500] text-[12px] leading-[145%] pb-[13px]">03-WAITLIST</span>
                    <div className="font-soulcraft font-[700] text-[36px] sm:text-[50px] md:text-[70px] lg:text-[96px] font-[700] leading-[30px] md:leading-[60px] lg:leading-[80px] tracking-[-2%] sm:tracking-[-1.92px] md:tracking-[-1.92px] ">
                        <span className="block">JOIN THE</span>
                        <span className="block"><span className="text-[#FF2600]">BLKBAR</span> SQUAD</span>
                    </div>

                    <span className="block text-[11px] sm:text-[13px] font-inter mb-6">When you join the waitlist you get</span>

                    <div className="flex flex-col gap-4">
                        {[
                            'Updates to the development of the app',
                            'Early access to the beta of the app',
                            'Get prizes like skull caps and hair products in our giveaways',
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-row items-center gap-4">
                                <div className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 rounded-full bg-[#FF2600] flex items-center justify-center">
                                    <span className="font-soulcraft text-[18px] sm:text-[24px] leading-none text-white">{i + 1}</span>
                                </div>
                                <span className="font-inter text-[12px] sm:text-[14px]">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: form card */}
                <div className="w-full sm:w-auto flex items-center justify-center shrink-0">
                    <WaitlistForm />
                </div>

            </div>

        </div>
    )
}
