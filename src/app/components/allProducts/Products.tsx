'use client'
import { ProductContex } from '@/app/contex/ProductContex';
import ProductCard from '@/app/productCards/ProductCard';
import { useContext } from 'react';

const Products = () => {
    const { productData, sortAllProducts, setSortAllProducts } = useContext(ProductContex)

    const shortProduct = () => {
        const sorted=[...productData]

        if (sortAllProducts === 'low') {
            return sorted.sort((a, b) => a.today - b.today);
        } else if (sortAllProducts === 'high') {
            return sorted.sort((a, b) => b.today - a.today);
        }else {
            return sorted;
        }
    }

    const sortedProducts = shortProduct()


    return (
        <div>
            <div className='mb-5 '>
                <h3 className="text-2xl font-bold mb-2 scroll-mt-50" id='allProducts'>সব পণ্য</h3>
                <div className='flex justify-between items-center gap-10'>
                    <p className='text-gray-500 text-sm'>মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে</p>
                    <div className='flex gap-3 justify-center items-center'>
                        <span className='text-gray-500 text-sm'>সাজান</span>
                        <select
                            defaultValue={'default'}
                            className="select rounded-xl w-50 justify-center outline-none"
                            onChange={(e)=>setSortAllProducts(e.target.value as 'default' | 'low' | 'high')}
                        >
                            <option value={'default'}>ডিফল্ট</option>
                            <option value={'low'}>দামঃ কম থেকে বেশি</option>
                            <option value={'high'}>দামঃ বেশি থেকে কম</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center">
                {
                    sortedProducts.map((u) =>
                        <ProductCard key={u.id} data={u} />)
                }
            </div>
        </div>
    );
};

export default Products;