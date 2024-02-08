import React from "react";
import Juri from "../../assets/flower-jur-two.png";
import SunGlass from "../../assets/sunglass.png";
import Headphone from "../../assets/headphone.png";
import TeeTable from "../../assets/tee-table.png";

import Heading from "../Heading"
import Rating from "./Rating";

const ProductInsider = () => {
  return (
    <div className="py-[330px] px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 justify-between ">
          <div className="">
            <img src={Juri} alt="" className="w-full mx-auto" />
          </div>
          <div className="">
            <img src={SunGlass} alt="" className="w-full mx-auto" />
          </div>
          <div className="">
            <img src={Headphone} alt="" className="w-full mx-auto" />
          </div>
          <div className="">
            <img src={TeeTable} alt="" className="w-full mx-auto" />
          </div>
        </div>

        {/* product details */}
        <div className=" mt-5 w-1/2 relative">
            <Heading title="Product" className="text-4xl" />

            {/* rating */}
            <div className="flex items-baseline gap-5">
            <Rating/>
            <p className="text-sm text-secondary">1 Review</p>
            </div>
            <div className="flex gap-5 mt-5 items-baseline pb-5">
                <h3 className="line-through text-base text-secondary">$88.00</h3>
                <h3 className="font-bold text-[20px] text-primary">$44.00</h3>
            </div>
            <span className="absolute bottom-0 h-0.5 bg-[#F0F0F0] inset-x-0 transform scale-x-100"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductInsider;
