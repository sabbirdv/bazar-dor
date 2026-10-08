'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';

const UserBtns = () => {

    const {data : session} = authClient.useSession();
    const user = session?.user
    const handleSigOut= async ()=>{
        authClient.signOut()
    }
    return (
        <div>
            {
                user ? <div className="flex gap-3 items-center border border-gray-200 rounded-xl px-4 py-1.5 ">
                            <Link href={'/profile'} className='flex items-center gap-2'>
                                <div className="size-9 bg-blue-300 rounded-xl"></div>
                                <div>
                                    <h3 className="font-semibold capitalize">{user?.name.split(" ")[0]}</h3>
                                    <p className='text-gray-500 text-sm'>{user?.email}</p>
                                </div>
                            </Link>
                            <Button onClick={handleSigOut} className='bg-red-400 text-whtie rounded-lg font-bold '>সাইন আউট</Button>
                        </div> :
                        <div className="flex items-center gap-2">
                            <Link href={'/sign-in'}>
                                <Button className='bg-white rounded-lg text-black font-bold hover:bg-gray-200'>সাইন ইন</Button>
                            </Link>
                            <Link href={'/sign-up'}>
                                <Button className='bg-green-600 text-whtie rounded-lg font-bold '>সাইন আপ</Button>
                            </Link>
                        </div>
            }
            
        </div>
    );
};

export default UserBtns;