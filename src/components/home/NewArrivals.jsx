import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide,} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, } from "swiper/modules";
import Heading from "../Heading";
import Card from "../Card";
import clock from "../../assets/clock.png";
import Crew from "../../assets/basic-crew.png";
import Juri from "../../assets/juri.png";
import Doll from "../../assets/rabbit-taddy.png";
import FlowerJur from "../../assets/flower-jur.png";
import AshBag from "../../assets/bag.png";
import CookingTool from "../../assets/cooking-tool.png";
import BlackBag from "../../assets/black-bag.png";

let title = "New Arrivals";
const NewArrivals = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto">
        <Heading className="text-left text-4xl mb-12" title={title} />

        {/* slider part  */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        //   pagination={{
        //     clickable: false,
        //   }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay,  Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              src={clock}
              title="Basic Crew Clock"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={Crew}
              title="Basic Crew Neck"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={Juri}
              title="The Pair"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={Doll}
              title="Cute Rabbit Teddy"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={FlowerJur}
              title="Flower Jar"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={AshBag}
              title="Smart Travel Bag"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={CookingTool}
              title="Cooking Tool"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src={BlackBag}
              title="Black School Bag"
              badge="New"
              price="44.00"
              cate="Black"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
