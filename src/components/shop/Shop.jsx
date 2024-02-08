import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading";
import ShopByCategory from "./ShopByCategory";
import ShopByColor from "./ShopByColor";
import ShopByBrand from "./ShopByBrand";
import ShopByPrice from "./ShopByPrice";

export const Shop = () => {
  return (
    <section id="shop" className="md:pt-72 md: pb-36">
      <div className="container mx-auto">
        {/* heading  */}
        <Heading title="Products" className="text-5xl" />
        <div className="mt-4 text-xs text-secondary mb-[130px]">
          <a href="/">Home</a>
          <a href="/shop">
            <IoIosArrowForward className="inline-flex" />
            Shop
          </a>
        </div>

        <ShopByCategory />
        <ShopByColor />
        <ShopByBrand />
        <ShopByPrice />

        <div className="flex justify-end">
          <div className="flex justify-between mt-14 w-2/3">
            <div className="">
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                1
              </button>
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                2
              </button>
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                3
              </button>
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                4
              </button>
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                ...
              </button>
              <button className="px-4 py-2 border border-[#F0F0F0] active:bg-primary active:text-white text-sm text-secondary mr-4">
                10
              </button>
            </div>

            <div className="flex items-center">
              <p className="text-secondary text-sm">
                Products from 1 to 12 of 80
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
