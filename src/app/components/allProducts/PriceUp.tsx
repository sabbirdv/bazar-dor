'use client'
import { ProductContex } from "@/app/contex/ProductContex";
import ProductCard from "@/app/productCards/ProductCard";
import { useContext } from "react";
import { TiArrowSortedUp } from "react-icons/ti";


const PriceUp = () => {

    const { productData } = useContext(ProductContex)
    
    return (
        <div>
            <h3 className="flex gap-1 items-center flex-nowrap text-2xl font-bold mb-5"><span className="text-red-700 "><TiArrowSortedUp /></span> 
            আজ দাম বেড়েছে
            </h3>

            {
                productData.length < 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center">
                        {
                            productData.filter((u)=> u.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0,6).map((u) => 
                            <ProductCard key={u.id} data={u} />)
                        }  
                    </div>
                    :
                    <div>
                        <h4 className='text-xl font-bold text-red-600 my-20 text-center'>Faild to lode data!</h4>
                    </div>
            }  


        </div>
    );
};

export default PriceUp;