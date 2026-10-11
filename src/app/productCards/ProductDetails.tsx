'use client'

import { useContext } from "react";
import { ProductContex } from "../contex/ProductContex";
import type { IproductType } from "../types/IProductType";
import { notFound } from "next/navigation";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ProductDetails = ({ productId }: { productId: string }) => {
    const { productData } = useContext(ProductContex);
    const data = productData.find((p: IproductType) => Number(productId) === p.id);

    if(!data){
            return notFound()
        }

    const minPrice = Math.min(...data.markets.map(m => m.min));
    const maxPrice = Math.max(...data.markets.map(m => m.max));
    const avgPrice = Math.round(data.markets.reduce((acc, m) => acc + ((m.min + m.max) / 2), 0) / data.markets.length);

    return (
        <div className="w-full min-h-screen bg-stone-100 text-gray-800 py-6 px-4">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center p-3 text-2xl">{data.image}</div>
                        <div>
                            <h1 className="text-4xl font-bold">{data.nameBn}</h1>
                            <p className="text-gray-500">প্রতি { data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'} · {data.categoryNameBn}</p>
                            <p className={`${Number(data.change.pct) === 0 ? 'text-gray-500' : data.change.dir === 'up' ? 'text-red-500' : 'text-green-500'} flex gap-1 items-center mt-1`}>গতকালের তুলনায় আজ দাম {Number(data.change.pct) === 0 ? '' : data.change.dir === 'up' ? 'বেড়েছে' : 'কমেছে'} · 
                                <span className="flex justify-center items-center"> {Number(data.change.pct) === 0 ? '—' : data.change.dir === 'up' ? <TiArrowSortedUp /> : <TiArrowSortedDown />}{data.change.pct}%</span></p>
                        </div>
                    </div>
                    <div className="bg-stone-100 px-6 py-4 rounded-xl w-full text-center sm:text-right max-sm:mx-auto md:w-auto">
                        <span className="font-medium text-gray-500 block">আজকের দাম</span>
                        <span className="text-3xl font-bold">{data.today}</span>
                        <span className="text-xs text-gray-500 block">টাকা / {  data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'}</span>
                        <span className={` ${Number(data.change.pct) === 0 ? 'text-gray-600' : data.change.dir === 'down' ? 'text-green-600' : 'text-red-600'} text-sm font-medium flex gap-1 items-center justify-center`}>
                            {Number(data.change.pct) === 0 ? <span>—</span> : data.change.dir === 'down' ? <TiArrowSortedDown className="text-base" /> : <TiArrowSortedUp className="text-base" />} {data.change.pct}%</span>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold">দামের সারসংক্ষেপ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-xl p-4">
                            <span className="font-medium ">সর্বনিম্ন দাম</span>
                            <p className="text-xl font-bold text-emerald-600 mt-1">{minPrice} টাকা</p>
                            <span className="text-[11px] text-gray-400">সবচেয়ে কম দামের বাজার</span>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <span className="font-medium ">সর্বাধিক দাম</span>
                            <p className="text-xl font-bold text-red-500 mt-1">{maxPrice} টাকা</p>
                            <span className="text-[11px] text-gray-400">সবচেয়ে বেশি দামের বাজার</span>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <span className="font-medium ">গড় দাম</span>
                            <p className="text-xl font-bold text-emerald-600 mt-1">{avgPrice} টাকা</p>
                            <span className="text-[11px] text-gray-400">প্রতি { data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'}-এর হিসাবে</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold">বাজারভিত্তিক আজকের দাম</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 text-sm">
                                    <th className="py-3 px-4">বাজার</th>
                                    <th className="py-3 px-4">বিভাগ</th>
                                    <th className="py-3 px-4">সর্বনিম্ন</th>
                                    <th className="py-3 px-4">সর্বাধিক</th>
                                    <th className="py-3 px-4">গড়</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {data.markets.map((item, index) => {
                                    const marketAvg = Math.round((item.min + item.max) / 2);
                                    return (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium  text-nowrap">{item.market}</td>
                                            <td className="py-3 px-4 text-gray-600">{item.division}</td>
                                            <td className="py-3 px-4">{item.min} টাকা</td>
                                            <td className="py-3 px-4">{item.max} টাকা</td>
                                            <td className="py-3 px-4 font-bold">{marketAvg} টাকা</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;