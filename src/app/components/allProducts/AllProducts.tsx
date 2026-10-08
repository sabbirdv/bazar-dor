
import PriceDown from "./PriceDown";
import PriceUp from "./PriceUp";
import Products from "./Products";







const AllProducts = () => {

    return (
        <div className="w-full mt-10">
            <div className="max-w-7xl mx-auto px-4 space-y-10 ">
                    <PriceUp/>
                    <PriceDown/>
                    <Products/>
            </div>
        </div>
    );
};

export default AllProducts;