export default function Nav(){
    return (
    <div>
        <header>
            {/* black tab thing on both sides */}
            <div className="font-inter text-[12px] font-normal grid grid-cols-3 px-6 py-2">
                <span className="text-left">ISSUE 001 - SPRING 2026</span>
                <span className="text-center">A MARKETPLACE FOR BLACK HAIR</span>
                <span className="text-right">JOIN THE WAITLIST - FREE</span>
            </div>
        </header>

        <nav className="flex items-center justify-between px-6 py-4">
            {/* Image here */}
            <span className="text-[56px] font-avant-garde font-bold leading-none">BLKBAR</span>

            <ul className="flex items-center gap-8 text-[13px] font-semibold">
                <li><a href="...">WHY US</a></li>
                <li><a href="...">HOW IT WORKS</a></li>
                <li><a href="...">THE APP</a></li>
                <li><a href="...">FAQ</a></li>
            </ul>

            <button className="bg-red-600 text-white text-[12px] font-semibold px-6 py-3 rounded-full">
                JOIN THE WAITLIST
            </button>
        </nav>
    </div>
    );
}