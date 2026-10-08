import { Button } from "@heroui/react";
import Image from "next/image";
import DateBn from "./Date";


const HeroSection = () => {
    return (
        <div className="w-full mt-5">
            <div className="max-w-7xl mx-auto px-4 rounded-xl bg-white border border-gray-200 ">
                <div className="w-full px-5 pt-12 pb-20 flex justify-between items-center">
                    <div className="max-w-140">
                        <div className="w-fit px-4 py-1.5 rounded-full border border-green-400 bg-green-200 text-green-700 "><DateBn/></div>
                        <h2 className="text-4xl font-bold mb-4 mt-2 ">আজকের বাজারের দাম এক নজরে</h2>
                        <p className="text-gray-500 mb-5">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                        <Button className="text-white font-medium text-xl py-5 px-6 rounded-xl bg-green-600">সব পণ্য দেখুন </Button>
                    </div>
                    <div>
                        <Image
                            src="/bazar-hero.png"
                            alt="Hero-image"
                            height={350}
                            width={350}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;