'use client'

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav(){
    return (
    <div>
        <header className="pt-5">
            <div className="font-inter text-[12px] font-normal flex items-center py-1">
                <span className="inline-block w-5 self-stretch bg-black" />
                <span className="flex-1 text-left pl-4">ISSUE 001 - SPRING 2026</span>
                <span className="flex-1 text-center">A MARKETPLACE FOR BLACK HAIR</span>
                <span className="flex-1 text-right pr-4">JOIN THE WAITLIST - FREE</span>
                <span className="inline-block w-5 self-stretch bg-black" />
            </div>
        </header>

        <nav className="flex items-center justify-between px-6 py-4">
            <span className="text-[56px] font-avant-garde font-bold leading-none">BLKBAR</span>

            <ul className="flex items-center gap-8 text-[13px] font-semibold">
                <li><button onClick={() => scrollTo('why')} className="hover:opacity-60 transition-opacity">WHY US</button></li>
                <li><button onClick={() => scrollTo('sneak')} className="hover:opacity-60 transition-opacity">HOW IT WORKS</button></li>
                <li><button onClick={() => scrollTo('sneak')} className="hover:opacity-60 transition-opacity">THE APP</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:opacity-60 transition-opacity">FAQ</button></li>
            </ul>

            <button
                onClick={() => scrollTo('waitlist')}
                className="bg-red-600 text-white text-[12px] font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
                JOIN THE WAITLIST
            </button>
        </nav>
    </div>
    )
}