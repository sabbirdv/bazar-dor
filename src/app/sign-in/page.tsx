"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const SignInPage = () => {
const router = useRouter();
const [showPassword, setShowPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries());

            const { data, error } = await authClient.signIn.email({
            email: user.email as string,
            password: user.password as string,
            callbackURL: '/',
        });

            if (data) {
                console.log(data);
                router.push('/');
            }

            if (error) {
                setErrorMessage("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে");
                console.log(error);
            }
    };

return (
    <div className="w-full h-[85vh] px-4">
        <div className="max-w-7xl mx-auto  pt-20 flex flex-col justify-center items-center">
            <div className="pb-6">
                <h2 className="text-3xl text-black font-bold text-center pb-2">সাইন ইন</h2>
                <p className="text-gray-500 text-sm">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>

            <Form onSubmit={handleOnSubmit}>
                <fieldset className="fieldset bg-white border-base-300 rounded-lg w-md border p-4 space-y-2.5">
                    <TextField
                        name="email"
                        type="email"
                        isRequired
                        validate={(value) => {
                            if (!value.trim()) {
                                return "ইমেইল লিখুন";
                            }
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "সঠিক ইমেইল লিখুন";
                            }
                            return null;}}>
                        <Label className="label mb-1 font-bold text-black">
                            ইমেইল
                        </Label>

                        <Input
                            type="email"
                            className="input w-full outline-none"
                            placeholder="you@example.com"/>
                        <FieldError />
                    </TextField>
                    <TextField
                        name="password"
                        type={showPassword ? "text" : "password"}
                        isRequired
                        minLength={8}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                            }
                            return null;}}>
                        <Label className="label mb-1 font-bold text-black">পাসওয়ার্ড</Label>
                        <div className="relative w-full">
                            <Input type={showPassword ? "text" : "password"} className="input w-full outline-none pr-12" placeholder="কমপক্ষে ৮ অক্ষর"/>
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                            </button>
                        </div>
                        <FieldError />
                    </TextField>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <Button type="submit" className="btn bg-green-600 text-white mt-2.5 rounded-lg"> সাইন ইন </Button>
                    <div>
                        <div className="flex flex-nowrap justify-center items-center">
                            <div className="w-full h-0.5 bg-gray-200"></div>
                            <span className="text-black px-5"> আথবা </span>
                            <div className="w-full h-0.5 bg-gray-200"></div>
                        </div>
                        <div className="flex justify-center items-center gap-3 my-2">
                            <button type="button" className="btn bg-white text-black border-gray-200">
                                <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <g> <path d="m0 0H512V512H0" fill="white"></path> <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path> <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                    </g>
                                </svg>
                                Google দিয়ে চালিয়ে যান
                            </button>
                            <button
                                type="button"
                                className="btn text-black bg-white border-gray-200">
                                <svg
                                    aria-label="GitHub logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"><path fill="black" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" 
                                    ></path> 
                                </svg> 
                                GitHub দিয়ে চালিয়ে যান 
                            </button> 
                        </div> 
                        <div className="flex flex-wrap justify-center items-center gap-1 pt-3 text-sm"> 
                            <p>অ্যাকাউন্ট নেই?</p> 

                            <Link href="/sign-up" className="text-green-700"> সাইন আপ করুন 
                            </Link> 
                        </div> 
                    </div> 
                </fieldset> 
            </Form> 

            <Link 
                href="/" 
                className="text-center py-5 text-gray-500 text-sm" 
            > 
                ← হোম পেজে ফিরে যান 
            </Link> 
        </div> 
    </div> 
); 


};

export default SignInPage;
