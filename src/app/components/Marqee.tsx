
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Imarqee {
    "id": number,
    "nameBn": string,
    "categoryIcon": string,
    "today": number,
    "change": {
        "dir": "down" | "up",
        "pct": number
    }
}

const Marqee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { cache: 'force-cache' });
    const data = await res.json();
    return (
        <div className="border-y border-gray-200 py-1" >
            <MarqueeText
                duration={15}
                pauseOnHover={true}
                direction="right"
                
            >
                {
                    data.map((m: Imarqee) => {
                        
                        return <span key={m.id}>
                            <span className="px-2 flex items-center">{m.categoryIcon} {m.nameBn} {m.today} টাকা/কেজি{m.change.dir === 'down' ? <span className="flex items-center gap-0.5 ps-0.5 text-red-700"><TiArrowSortedDown />
 {m.change.pct}%</span> : <span className="flex items-center gap-0.5 ps-0.5 text-green-700"><TiArrowSortedUp /> {m.change.pct}%
</span> }</span>
                        </span> 
                    })
                }
            </MarqueeText>
        </div>
    );
};

export default Marqee;