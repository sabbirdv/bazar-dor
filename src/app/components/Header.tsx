

import Link from "next/link";
import NavLink from "./NavLink";
import DateBn from "./Date";
import UserBtns from "../profile/UserBtns";

const Header = () => {

    return (
        <header className="w-full px-4 bg-white sticky top-0  z-100 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href={'/'}>
                    <div className="flex items-center gap-3 py-4">
                        <div className="bg-green-600 rounded-xl p-3">
                            <span>🛒</span>
                        </div>
                        <div className="flex flex-col justify-center ">
                            <h1 className="font-bold text-xl text-green-600">বাজার দর</h1>
                            <div className="text-gray-500 text-sm "><DateBn/></div>
                        </div>
                    </div>
                </Link>
                <div>
                    <UserBtns/>                   
                </div>
            </div>
            <NavLink />
        </header>
    );
};

export default Header;