import React from "react";
import Heading from "../Heading";
import Card from "../Card";

// all img
import AshCap from "../../assets/ash-cap.png";
import TeeTable from "../../assets/tee-table.png";
import HeadPhone from "../../assets/headphone.png";
import SunGlass from "../../assets/sunglass.png";
// all img

const SpecialOffers = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto">
        <Heading className="text-4xl mb-12" title="Special Offers" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
          <Card
            src={AshCap}
            alt="cap"
            badge="New"
            title="Ash Cap"
            price="44.00"
            cate="Ash"
          />
          <Card
            src={TeeTable}
            alt="cap"
            badge="New"
            title="Tee Table"
            price="44.00"
            cate="Brown"
          />
          <Card
            src={HeadPhone}
            alt="cap"
            badge="New"
            title="Maroon Headphone"
            price="44.00"
            cate="Maroon"
          />
          <Card
            src={SunGlass}
            alt="cap"
            badge="New"
            title="Black Sun Glass"
            price="44.00"
            cate="Black"
          />
        </div>

      </div>
    </div>
  );
};

export default SpecialOffers;
