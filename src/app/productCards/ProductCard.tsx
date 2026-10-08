import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import type { IproductType } from '../types/IProductType';
import Link from 'next/link';

const ProductCard = ({ data }: { data: IproductType }) => {
    return (
        <Link href={`/`}>
            <div className="w-full max-w-100 rounded-2xl border border-gray-300 hover:border-green-600 bg-white p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                        {data.image}
                    </div>

                    <div>
                        <h3 className="text-[18px] font-bold text-gray-900">
                            {data.nameBn}
                        </h3>
                        <p className="text-[13px] text-gray-500">
                            প্রতি {
                                data.unit === 'kg' ? 'কেজি'
                                : data.unit === 'litre' ? 'লিটার'
                                : data.unit === 'dozen' ? 'ডজন'
                                : 'পিস'
                            }
                        </p>
                    </div>
                </div>

                <div className="mt-3 flex items-end justify-between">
                    <div>
                        <p className="text-[12px] text-gray-500">আজকের দাম</p>
                        <p className="text-[20px] font-bold text-gray-900">
                            {data.today} <span className="text-[13px] font-normal">টাকা</span>
                        </p>
                    </div>

                    <div className={`flex items-center rounded-full bg-gray-100 px-2 py-1 text-[12px] font-medium ${
                        data.change.dir === 'down' ? 'text-green-600' : 'text-red-600'
                    }`}>
                        
                        {data.change.dir === 'down' ? <TiArrowSortedDown className="text-base" /> : <TiArrowSortedUp className="text-base" />}
                        {data.change.pct}%
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

