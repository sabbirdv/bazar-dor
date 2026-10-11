import ProductDetails from '@/app/productCards/ProductDetails';
import { Suspense } from 'react';

    const ProductId = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const { productId } = await params

    return (
        <div>
            <Suspense fallback={<div>Loading product details...</div>}>
                <ProductDetails productId={productId} />
            </Suspense>
        </div>
    );
};

export default ProductId;