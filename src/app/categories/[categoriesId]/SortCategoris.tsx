'use client'
import ProductCard from '@/app/productCards/ProductCard';
import type { IproductType } from '@/app/types/IProductType';
import { useState } from 'react';



const SortCategoris = ({ data }: { data: IproductType[] }) => {

    const [sortAllProducts, setSortAllProducts] = useState("default");
    const shortProduct = () => {
        const sorted = [...data]

        if (sortAllProducts === 'low') {
            return sorted.sort((a, b) => a.today - b.today);
        } else if (sortAllProducts === 'high') {
            return sorted.sort((a, b) => b.today - a.today);
        } else {
            return sorted;
        }
    }

    const sortedProducts = shortProduct()

    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='my-5 '>
                    <div className='flex flex-wrap text-nowrap justify-between items-center'>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 scroll-mt-50" id='allProducts'>সব পণ্য</h3>
                            <p>টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                            <span className='text-gray-500 text-sm'>সাজান</span>
                            <select
                                defaultValue={'default'}
                                className="select rounded-xl w-50 justify-center outline-none"
                                onChange={(e) => setSortAllProducts(e.target.value as 'default' | 'low' | 'high')}
                            >
                                <option value={'default'}>ডিফল্ট</option>
                                <option value={'low'}>দামঃ কম থেকে বেশি</option>
                                <option value={'high'}>দামঃ বেশি থেকে কম</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    sortedProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center">
                        {
                            sortedProducts.map((c) =>
                                <ProductCard key={c.id} data={c} />)
                        }
                    </div>
                        :
                        <div>
                            <h4 className='text-xl font-bold text-gray-200 my-20 text-center'>Loading data...</h4>
                        </div>
                }
            </div>

        </div>
    );
};

export default SortCategoris;