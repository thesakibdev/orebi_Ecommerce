import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-headerBottom py-14">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between grid grid-cols-2 px-4">
          <div className="menu text-center">
            <Heading className="text-base mb-4 text-primary" title="Menu" />
            <div className="flex flex-col gap-2 text-brandOne">
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/journal">Journal</Link>
            </div>
          </div>

          <div className="Shop text-center">
            <Heading className="text-base mb-4 text-primary" title="Shop" />
            <div className="flex flex-col gap-2 text-brandOne">
              <Link to="/shop">Category 1</Link>
              <Link to="/shop">Category 2</Link>
              <Link to="/shop">Category 3</Link>
              <Link to="/shop">Category 4</Link>
              <Link to="/shop">Category 5</Link>
            </div>
          </div>

          <div className="Help mt-4 md:mt-0 text-center">
            <Heading className="text-base mb-4 text-primary" title="HELP" />
            <div className="flex flex-col gap-2 text-brandOne">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/special">Special E-shop</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/secure">Secure Payments</Link>
            </div>
          </div>

          <div className="md:text-base  text-primary mt-14 pl-4 md:pl-0 md:mt-4 text-center">
            <p>(052) 611-5711</p>
            <p className="text-xs">thesakibdev@gmail.com</p>
            <p className="text-xs mt-1">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          <div className="lg:w-[20%] mt-4 hidden lg:block">
            <img className="mx-auto" src={logo} alt="orebi" />
          </div>
        </div>

        <div className="px-4 lg:px-0 justify-between pt-16 grid grid-cols-2">

          <div className="flex gap-4 pb-2">
            <Link to="https://www.facebook.com/thesakibdev" target="_black"><FaFacebookF /></Link>
            <Link to="https://www.linkedin.com/in/thesakibdev/" target="_black"><FaLinkedinIn /></Link>
            <Link to="https://www.instagram.com/thesakibdev/" target="_black"><FaInstagram /></Link>
          </div>

          <div className="text-end">
            <p className="text-brandOne text-xs">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
