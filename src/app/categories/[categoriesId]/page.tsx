
const CategorisDetails = async ({ params }: { params: Promise<{ categoriesId: string }> }) => {
    const { categoriesId } = await params

    return (
        <div>
            <div className='mb-5 '>
                <div>
                    {categoriesId}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 scroll-mt-50" id='allProducts'>সব পণ্য</h3>
                        <p>টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
                <div className='flex flex-wrap text-nowrap justify-end items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                        <span className='text-gray-500 text-sm'>সাজান</span>
                        {/* <select
                            defaultValue={'default'}
                            className="select rounded-xl w-50 justify-center outline-none"
                            onChange={(e) => setSortAllProducts(e.target.value as 'default' | 'low' | 'high')}
                        >
                            <option value={'default'}>ডিফল্ট</option>
                            <option value={'low'}>দামঃ কম থেকে বেশি</option>
                            <option value={'high'}>দামঃ বেশি থেকে কম</option>
                        </select> */}
                    </div>
                </div>
            </div>
            {/* {
                sortedProducts.length < 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center">
                    {
                        sortedProducts.map((u) =>
                            <ProductCard key={u.id} data={u} />)
                    }
                    </div>
                    :
                    <div>
                        <h4 className='text-xl font-bold text-red-600 my-20 text-center'>Faild to lode data!</h4>
                    </div>
            } */}

        </div>
    )
}

export default CategorisDetails