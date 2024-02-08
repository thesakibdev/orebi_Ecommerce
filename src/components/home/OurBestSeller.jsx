import React from 'react'
import Heading from "../Heading";
import Card from "../Card";

// all img
import FlowerJur from "../../assets/flower-jur.png";
import AshBag from "../../assets/bag.png";
import CookingTool from "../../assets/cooking-tool.png";
import BlackBag from "../../assets/black-bag.png";
// all img

const OurBestSeller = () => {
  return (
    <div className="pb-32">
      <div className="container mx-auto">
        <Heading className="text-4xl mb-12" title="Our Bestsellers" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        <Card
              src={FlowerJur}
              title="Flower Jar"
              badge="New"
              price="44.00"
              cate="Black"
            />
          <Card
              src={AshBag}
              title="Smart Travel Bag"
              badge="New"
              price="44.00"
              cate="Black"
            />
          <Card
              src={CookingTool}
              title="Cooking Tool"
              badge="New"
              price="44.00"
              cate="Black"
            />
          <Card
              src={BlackBag}
              title="Black School Bag"
              badge="New"
              price="44.00"
              cate="Black"
            />
        </div>

      </div>
    </div>
  )
}

export default OurBestSeller