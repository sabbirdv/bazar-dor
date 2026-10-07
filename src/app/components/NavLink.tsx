import Link from "next/link";

interface InavLink {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLink = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', { cache: 'force-cache' });
    const data: InavLink[] = await res.json();
    return (
        <div className="w-full border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-2 overflow-x-auto flex gap-1 text-nowrap">
                {
                    data.map((n: InavLink) => {
                        return <Link
                            key={n.id}
                            href={`/categories/${n.slug}`}
                            className="px-3 py-1.5 rounded-xl hover:text-white hover:bg-green-600"
                        >{n.icon} {n.nameBn}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default NavLink;