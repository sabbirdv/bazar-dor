'use client'
import { authClient } from '@/lib/auth-client';
import { FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';

const UserProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    const handleSigOut = async () => {
        authClient.signOut()
        toast.success('সফলভাবে সাইন আউট হয়েছেন');
    }
    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string }
        try {
            await authClient.updateUser({
                ...newUserData
            });
            toast.success('প্রোফাইল সফলভাবে আপডেট হয়েছে!');
        }
        catch (error) {
            console.log("profile page error", error)
            toast.error('আপডেট করতে সমস্যা হয়েছে!');
        }
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
                        ) : (<div className="h-20 w-20 bg-gray-200 rounded-full" />)
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
                    <Form onSubmit={handleUpdateProfile} className="space-y-3 px-3">
                        <TextField
                            name="name"
                            isRequired
                            validate={(value) => {
                                if (!value.trim()) return "নাম লিখুন";
                                return null;
                            }}>
                            <Label className="label mb-1 font-bold text-black">নাম</Label>
                            <Input
                                type="text" className="input w-full outline-none" placeholder="যেমন: রহিম উদ্দিন" />
                            <FieldError />
                        </TextField>
                        <button type="submit" className="btn w-full bg-green-700 text-white border-none rounded-lg">আপডেট</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;