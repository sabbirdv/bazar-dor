
import type { IproductType } from "@/app/types/IProductType";
import SortCategoris from "./SortCategoris"
import { Suspense } from "react";



const CategorisDetails = async ({ params }: { params: Promise<{ categoriesId: string }> }) => {
    const { categoriesId } : {categoriesId : string} = await params

    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await res.json();

    const categoriesData = data.filter((c:IproductType) => categoriesId === c.category)

    return (
        <div>
            <SortCategoris data={categoriesData}/>
        </div>
    )
}

export default CategorisDetails