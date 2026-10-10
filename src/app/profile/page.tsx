'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

const UserProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    const handleSigOut = async () => {
        authClient.signOut()
    }


    return (
        <div className="min-h-screen bg-green-50 px-4 py-6">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800">আমার প্রোফাইল</h2>
                <p className=" text-gray-500 mb-5">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                <div className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-5 mb-4">
                    <div className="flex items-center gap-3">
                        {user?.image ? (
                            <Image src={user.image} height={80} width={80} alt="profile" className="rounded-full object-cover"
                            />
                            ) : ( <div className="h-20 w-20 bg-gray-200 rounded-full" />)
                        }
                        <div>
                            <h3 className="font-bold text-gray-800 capitalize">{user?.name}</h3>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                    <button onClick={handleSigOut} className="flex items-center gap-1 border border-red-400 text-red-500 rounded-lg px-3 py-2 text-sm cursor-pointer"><FaArrowLeft /> সাইন আউট</button>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className=" text-3xl font-bold text-gray-800 mb-6 ">তথ্য</h3>
                    <form className="space-y-3 px-3">
                        <label className="block  text-gray-700">নাম</label>
                        <input type="text" className="input input-bordered w-full bg-white border-gray-200 outline-none" />
                        <button type="submit" className="btn w-full bg-green-700 text-white border-none rounded-lg">আপডেট</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;