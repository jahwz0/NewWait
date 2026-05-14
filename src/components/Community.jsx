const columns = [
    {
        speed: "26s",
        delay: "-8s",
        quotes: [
            { text: '"This app will help so much with my hair business"', big: false },
            { text: '"Impossible to find hairstylists — this app will be such a great help"', big: true },
            { text: '"i\'ve been struggling translating viewers into clients. With this my work is seen by people who love it."', big: false },
            { text: '"Why struggle for your new look oh i love it"', big: true },
            { text: '"This makes so much sense i need this app"', big: false },
        ],
    },
    {
        speed: "22s",
        delay: "-5s",
        quotes: [
            { text: '"i\'ve been struggling translating viewers on other social media into clients."', big: false },
            { text: '"100% using this"', big: true },
            { text: '"Impossible to find hairstylists — this app will be such a great help"', big: false },
            { text: '"This makes so much sense i need this app"', big: true },
            { text: '"Why struggle for your new look oh i love it"', big: false },
        ],
    },
]

function Column({ quotes, speed, delay }) {
    const items = [...quotes, ...quotes]
    return (
        <div className="overflow-hidden flex-1 h-full">
            <div
                className="flex flex-col gap-6"
                style={{
                    animation: `fall-loop ${speed} linear infinite`,
                    animationDelay: delay,
                }}
            >
                {items.map((q, i) => (
                    <p
                        key={i}
                        className={`font-inter text-black leading-[120%] ${
                            q.big ? "text-[20px] font-bold" : "text-[12px] font-normal"
                        }`}
                    >
                        {q.text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default function Community() {
    return (
        <div className="bg-[#FFD738] border-2 relative overflow-hidden " style={{ height: "320px" }}>

            {/* Heading — sits bottom-left, width capped to keep columns clear */}
            <div className="absolute top-1/2 -translate-y-1/2 left-10 z-10 w-500">
                <div className="font-soulcraft text-black text-[96px] leading-[84%] tracking-[-3px]">
                    <span className="block">THE COMMUNITY</span>
                    <span>LOVES OUR IDEA</span>
                </div>
            </div>

            {/* Falling columns start right of the heading */}
            <div className="absolute top-0 right-0 bottom-0 left-250 flex flex-row gap-10 overflow-hidden py-6 pr-10">
                {columns.map((col, i) => (
                    <Column key={i} quotes={col.quotes} speed={col.speed} delay={col.delay} />
                ))}
            </div>

        </div>
    )
}
