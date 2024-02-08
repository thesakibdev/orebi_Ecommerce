import React from "react";
import Heading from "../Heading";
import Card from "../Card";
import FlowerJur from "../../assets/flower-jur-two.png";
import Clock from "../../assets/clock.png";
import BlackSunGlass from "../../assets/sunglass.png";

const ShopByColor = () => {
  return (
    <div className="flex justify-between">
      
      <div className="">
        <Heading title="Shop by Color" />
        <div className="flex flex-col items-start gap-10 mt-8">
          <button className="flex items-center gap-1">$0.00-$9.99</button>
          <button className="flex items-center gap-1">$10.00-$19.99</button>
          <button className="flex items-center gap-1">$20.00-$29.99</button>
          <button className="flex items-center gap-1">$30.00-$39.99</button>
          <button className="flex items-center gap-1">$40.00-$69.99</button>
        </div>
      </div>

      {/* products showing table  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
        <Card
          src={FlowerJur}
          badge="-10%"
          title="Flower Jur"
          price="44.00"
          cate="Black"
        />
        <Card
          src={Clock}
          badge="-15%"
          title="New Clock"
          price="44.00"
          cate="Black"
        />
        <Card
          src={BlackSunGlass}
          // badge="-10%"
          title="New Clock"
          price="44.00"
          cate="Black"
        />
      </div>

    </div>
  );
};

export default ShopByColor;
