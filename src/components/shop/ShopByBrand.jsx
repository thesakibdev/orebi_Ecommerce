import React from "react";
import { FaCircle } from "react-icons/fa";
import Heading from "../Heading";
import Card from "../Card";
import Iphone15 from "../../assets/iPhone-15-Pink.webp";
import TeeTable from "../../assets/tee-table.png";
import AshCap from "../../assets/ash-cap.png";

const ShopByColor = () => {
  return (
    <div className="flex justify-between">

      <div className="">
        <Heading title="Shop by Color" />
        <div className="flex flex-col items-start gap-10 mt-8">
          <button className="flex items-center gap-1">Brand 1</button>
          <button className="flex items-center gap-1">Brand 2</button>
          <button className="flex items-center gap-1">Brand 3</button>
          <button className="flex items-center gap-1">Brand 4</button>
          <button className="flex items-center gap-1">Brand 5</button>
        </div>
      </div>

        {/* products showing table  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
          <Card
            src={Iphone15}
            badge="-10%"
            title="iPhone"
            price="44.00"
            cate="Black"
          />
          <Card
            src={TeeTable}
            badge="-15%"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
          <Card
            src={AshCap}
            badge="-10%"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
        </div>
    </div>
  )
}

export default ShopByColor