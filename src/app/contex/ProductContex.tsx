'use client'
import { createContext, useEffect, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import type { IproductType } from "../types/IProductType";

interface IProductContext {
    productData: IproductType[];
    sortAllProducts: string;
    setSortAllProducts: Dispatch<SetStateAction<string>>;
}

export const ProductContex = createContext<IProductContext>({productData: [],sortAllProducts: "default",setSortAllProducts: () => {}});

const ProductProvider = ({ children }: { children: ReactNode }) => {
    
    const [productData, setProductData] = useState<IproductType[]>([]);
    const [sortAllProducts, setSortAllProducts] = useState('default');

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
            const data = await res.json();
            setProductData(data);
        };

        fetchProducts();
    }, []);

    const sheardData = {
        productData,
        sortAllProducts,
        setSortAllProducts
    };

    return (
        <ProductContex.Provider value={ sheardData }>
            {children}
        </ProductContex.Provider>
    );
};

export default ProductProvider;

