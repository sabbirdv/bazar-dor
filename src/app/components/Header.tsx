

import Link from "next/link";
import NavLink from "./NavLink";
import DateBn from "./Date";
import { Button } from "@heroui/react";

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
                    <div className="flex items-center gap-2">
                        <Link href={'/sign-in'}>
                            <Button className='bg-white rounded-lg text-black font-bold hover:bg-gray-200'>সাইন ইন</Button>
                        </Link>
                        <Link href={'/sign-up'}>
                            <Button className='bg-green-600 text-whtie rounded-lg font-bold '>সাইন আপ</Button>
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center border border-gray-200 rounded-xl px-4 py-1.5 ">
                        <div className="size-9 bg-blue-300 rounded-xl ">

                        </div>
                        <h3 className="font-semibold ">Sabbir</h3>
                    </div>
                </div>
            </div>
            <NavLink />
        </header>
    );
};

export default Header;