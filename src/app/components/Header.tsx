

import Link from "next/link";
import NavLink from "./NavLink";
import Marqee from "./Marqee";
import DateBn from "./Date";

const Header = () => {

    return (
        <header className="w-full px-4 sticky top-0 bg-white ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href={'/'}>
                    <div className="flex items-center gap-3 py-4">
                        <div className="bg-green-600 rounded-xl p-3">
                            <span>🛒</span>
                        </div>
                        <div className="flex flex-col justify-center ">
                            <h1 className="font-bold text-xl text-green-600">বাজার দর</h1>
                            {/* <span className="text-gray-500 text-sm"><DateBn/></span> */}
                        </div>
                    </div>
                </Link>
                <div>
                    <div className="flex gap-3 items-center border border-gray-200 rounded-xl px-4 py-1.5 ">
                        <div className="size-9 bg-blue-300 rounded-xl ">

                        </div>
                        <h3 className="font-semibold ">Sabbir</h3>
                    </div>
                </div>
            </div>
            <NavLink />
            <Marqee />
        </header>
    );
};

export default Header;