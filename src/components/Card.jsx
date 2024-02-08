import React from "react";
import Badge from "../components/Badge";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Compare from "./icon/Compare";
import { Link } from "react-router-dom";

const Card = ({ src, alt, badge, title, price, cate }) => {
  return (
    <div className="relative cursor-pointer">
      <Badge title={badge} className="absolute  top-5 left-4 z-10" />

      <div className="relative overflow-hidden group">
        <img src={src} alt={alt} className="w-full" />
        {/* hover effect  */}
        <div className="py-6 bg-white w-full absolute right-0 bottom-[-100%] group-hover:bottom-0 transition-all ease-in-out duration-500">
          <div className="grid gap-5">
            <a href="#">
              <div className="flex items-center gap-3 justify-end">
                <p>Add To Wish List</p>
                <FaHeart size={12} />
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-3 justify-end">
                <p>Compare</p>
                <Compare />
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-3 justify-end">
                <p>Add to Cart</p>
                <FaShoppingCart size={12} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* card body  */}
      <div>
        <div className="flex items-center justify-between pt-4 mb-3">
          <Link to="/product-insider" ><Heading className="text-[20px]" title={title} /></Link>
          <p className="text-base text-secondary">${price}</p>
        </div>
        <p className="text-base text-secondary">{cate}</p>
      </div>
    </div>
  );
};

export default Card;
