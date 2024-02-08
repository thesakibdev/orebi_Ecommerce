import React from "react";
import { FaCircle } from "react-icons/fa";
import Heading from "../Heading";
import Card from "../Card";
import AshCap from "../../assets/ash-cap.png";
import BlackBag from "../../assets/black-bag.png";
import WallClock from "../../assets/wall-clock.png";

const ShopByColor = () => {
  return (
    <div className="flex justify-between">

      <div className="">
        <Heading title="Shop by Color" />
        <div className="flex flex-col items-start gap-10 mt-8">
          <button className="flex items-center gap-1"><FaCircle className="text-black" /> Color 1</button>
          <button className="flex items-center gap-1"><FaCircle className="text-colorOne" /> Color 2</button>
          <button className="flex items-center gap-1"><FaCircle className="text-colorTwo" /> Color 3</button>
          <button className="flex items-center gap-1"><FaCircle className="text-colorThree" /> Color 4</button>
          <button className="flex items-center gap-1"><FaCircle className="text-colorFour" /> Color 5</button>
        </div>
      </div>

        {/* products showing table  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
          <Card
            src={AshCap}
            badge="New"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
          <Card
            src={WallClock}
            badge="New"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
          <Card
            src={BlackBag}
            badge="New"
            title="New Clock"
            price="44.00"
            cate="Black"
          />
        </div>
    </div>
  )
}

export default ShopByColor