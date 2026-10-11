'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Dropdown, Label } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaSortDown, FaUserAlt } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';

const UserBtns = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const handleSigOut = async () => {
        await authClient.signOut();
        toast.success('সফলভাবে সাইন আউট হয়েছেন');
    };

    return (
        <div>
            {user ? (
                <div className="flex gap-3 items-center">
                    <Dropdown>
                        <Button 
                            aria-label="Menu"
                            className='flex flex-nowrap items-center bg-white gap-2 px-2 py-6  cursor pointer'
                        >
                            <div>
                                {user?.image ? (
                                    <Image src={user.image} height={36} width={36} alt="profile" className="rounded-full object-cover" />
                                ) : (
                                    <div className="h-9 w-9 bg-gray-200 rounded-xl" />
                                )}
                            </div>
                            <h3 className="text-base font-semibold text-black capitalize text-start">{user?.name?.split(" ")[0]}</h3>
                            <FaSortDown className='text-gray-500 mb-3' />
                        </Button>
                        <Dropdown.Popover className='rounded-xl p-2 border border-gray-200 me-4'>
                            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                <Dropdown.Item key="user-info" className='cursor-default hover:bg-white' textValue="User Info">
                                    <div>
                                        <h3 className="text-sm font-semibold text-black capitalize text-start">{user?.name}</h3>
                                        <p className='text-gray-600 text-sm'>{user?.email}</p>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item key="profile" id="profile" textValue="Profile">
                                    <Link href={'/profile'} className='flex items-center text-black gap-1'>
                                        <FaUserAlt />
                                        <Label>Profile</Label>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item key="sign-out" id="sign-out" textValue="Sign out">
                                    <div onClick={handleSigOut} className='flex items-center text-red-500 gap-1 cursor-pointer w-full'>
                                        <TbLogout2 />
                                        <Label>সাইন আউট</Label>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link href={'/sign-in'}>
                        <Button className='bg-white rounded-lg text-black font-bold hover:bg-gray-200'>সাইন ইন</Button>
                    </Link>
                    <Link href={'/sign-up'}>
                        <Button className='bg-green-600 text-white rounded-lg font-bold'>সাইন আপ</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserBtns;