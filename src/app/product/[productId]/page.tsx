import ProductDetails from '@/app/productCards/ProductDetails';
import { Suspense } from 'react';

    const ProductId = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const { productId } = await params

    return (
        <div className='min-h-full'>
            <Suspense fallback={<div>লোড হচ্ছে...</div>}>
                <ProductDetails productId={productId} />
            </Suspense>
        </div>
    );
};

export default ProductId;