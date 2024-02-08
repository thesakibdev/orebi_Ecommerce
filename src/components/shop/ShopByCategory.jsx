import React from "react";
import Heading from "../Heading";
import Grid from "../icon/Grid";
import { FaList, } from "react-icons/fa";
import Card from "../Card";
import CookingToll from "../../assets/cooking-tool.png";
import HeadPhone from "../../assets/headphone.png";
import TeaTable from "../../assets/tee-table.png";

const ShopByCategory = () => {
  return (
    <div className="flex justify-between">

      <div className="">
        <Heading title="Shop by Category" />
        <div className="flex flex-col items-start gap-10 mt-8">
          <button>Category 1</button>
          <button>Category 2</button>
          <button>Category 3</button>
          <button>Category 4</button>
          <button>Category 5</button>
        </div>
      </div>

      <div className="">
        {/* product category selector navigation */}
        <div className="flex justify-between items-center mb-14">
          <div className="flex gap-5">
            <Grid />
            <FaList size={36} />
          </div>

          <div className="flex items-center gap-2">
            <h3>Short by:</h3>
            <select
              name="Featured"
              id="Featured"
              className="border border-borderOne py-1 pl-5 pr-24 text-secondary text-base"
            >
              <option value="Featured 1">Featured 1</option>
              <option value="Featured 2">Featured 2</option>
              <option value="Featured 3">Featured 3</option>
              <option value="Featured 4">Featured 4</option>
              <option value="Featured 5">Featured 5</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <h3>Show:</h3>
            <select
              name="Featured"
              id="Featured"
              className="border border-borderOne py-1 pl-5 pr-24 text-secondary text-base"
            >
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="34">34</option>
              <option value="36">36</option>
              <option value="38">38</option>
            </select>
          </div>
        </div>

        {/* products showing table  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
          <Card
            src={CookingToll}
            badge="New"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
          <Card
            src={HeadPhone}
            badge="-10%"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
          <Card
            src={TeaTable}
            badge="New"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
