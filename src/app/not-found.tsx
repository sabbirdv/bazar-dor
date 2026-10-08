import { Button } from '@heroui/react';
import Link from 'next/link';

const notFound = () => {
    return (
        <div className='min-h-[85vh]  bg-red-200 flex justify-center items-center'>
            <div className='h-full my-auto flex flex-col justify-center items-center gap-3 px-4'>
                <span className='text-8xl mb-5'>🧺</span>
                <h4 className='text-2xl font-bold text-center'>পাতাটি খুঁজে পাওয়া যায়নি</h4>
                <h5 className='text-center'>আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।</h5>
                <div className='flex items-center gap-4'>
                    <Link href={'/'}><Button>হোম পেজে যান</Button></Link>
                    <Link href={'/'}><Button>বাজার তুলনা দেখুন </Button></Link>
                </div>
            </div>

        </div>
    );
};

export default notFound;