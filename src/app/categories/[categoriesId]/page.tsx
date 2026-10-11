
import type { IproductType } from "@/app/types/IProductType";
import SortCategories from "./SortCategories"
import { notFound } from "next/navigation";
import { Suspense } from "react";



const CategoriesDetails = async ({ params }: { params: Promise<{ categoriesId: string }> }) => {
    const { categoriesId } = await params

    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await res.json();
    const categoriesData = data.filter((c:IproductType) => categoriesId === c.category)

    if(!categoriesData || categoriesData.length === 0 ){
        return notFound()
    }

    return (
        <div className="min-h-full">
            <Suspense fallback></Suspense>
            <SortCategories data={categoriesData}/>
        </div>
    )
}

export default CategoriesDetails