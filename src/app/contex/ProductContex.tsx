'use client'
import { createContext, useEffect, useState, type ReactNode} from "react";
import type { IproductType } from "../types/IProductType";

interface IProductContext {
    productData: IproductType[];
}

    export const ProductContex = createContext<IProductContext>({productData: []});

const ProductProvider = ({ children }: { children: ReactNode }) => {
    
    const [productData, setProductData] = useState<IproductType[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
            const data = await res.json();
            setProductData(data);
        };

        fetchProducts();
    }, []);

    const sheardData = {
        productData
    };

    return (
        <ProductContex.Provider value={ sheardData }>
            {children}
        </ProductContex.Provider>
    );
};

export default ProductProvider;

