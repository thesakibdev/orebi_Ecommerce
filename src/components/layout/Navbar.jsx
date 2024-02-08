import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/Logo.png";
import cartDemo from "../../assets/CartPopup.png";
import { Link } from "react-router-dom";
import Bar from "../icon/Bar";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Slice/counterSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // cart item
  const data = useSelector((state) => state.counter.value);
  let disPatch = useDispatch;

  // for dropdown
  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const signUpDrop = useRef(null);
  const signUpBtn = useRef(null);
  const cartRef = useRef(null);
  const cartBtn = useRef(null);

  let handleClick = (dropRefCum) => {
    const dropStyle = dropRefCum.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSide = (e, dropRefCum, btnRefCum) => {
    if (
      dropRefCum.current &&
      !dropRefCum.current.contains(e.target) &&
      !btnRefCum.current.contains(e.target)
    ) {
      dropRefCum.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      handleClickOutSide(e, dropRef, btnRef);
    });
    document.addEventListener("click", (e) => {
      handleClickOutSide(e, signUpDrop, signUpBtn);
    });
    document.addEventListener("click", (e) => {
      handleClickOutSide(e, cartRef, cartBtn);
    });
    return () => {
      document.removeEventListener("click", (e) => {
        handleClickOutSide(e, dropRef, btnRef);
      });
      document.removeEventListener("click", (e) => {
        handleClickOutSide(e, signUpDrop, signUpBtn);
      });
      document.removeEventListener("click", (e) => {
        handleClickOutSide(e, cartRef, cartBtn);
      });
    };
  }, []);

  return (
    <header className="bg-slate-50 fixed top-0 left-0 right-0 w-full z-50 sm:px-0 px-4">
      <div className="relative">
        {/* header top  */}
        <nav className="flex items-center px-4">
          <div className="container mx-auto">
            <div className="flex items-center py-8">
              {/* logo  */}
              <div className="lg:w-[5%] w-1/2">
                <img src={logo} alt="logo" />
              </div>
              {/* logo  */}

              {/* menu  */}
              <div className="w-[95%] hidden sm:block">
                <ul>
                  <div className="flex justify-center gap-10">
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <Link to="/shop">
                      <li>Shop</li>
                    </Link>
                    <Link to="/about">
                      <li>About</li>
                    </Link>
                    <Link to="/contacts">
                      <li>Contacts</li>
                    </Link>
                    <Link to="/journal">
                      <li>Journal</li>
                    </Link>
                  </div>
                </ul>
              </div>
              {/* menu  */}
            </div>
          </div>

          {/* navbar for sm device  */}
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5 text-primary" />
              ) : (
                <FaBars className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </nav>
        <hr />
        {/* sm device menu  */}
        <div className="">
          <ul
            className={`bg-headerBottom w-full z-50 py-3 left-0 absolute ${
              isMenuOpen ? "" : "hidden  -left-full"
            }`}
          >
            <div
              className="flex flex-col items-center gap-5
                "
            >
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contacts">
                <li>Contacts</li>
              </Link>
              <Link to="/journal">
                <li>Journal</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* header bottom  */}
      <div className="bg-headerBottom  py-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-baseline">
            {/* category  */}
            <div className="">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => {
                    handleClick(dropRef, btnRef);
                  }}
                  ref={btnRef}
                >
                  <Link to="#">
                    <div className="flex items-center gap-3">
                      <Bar className="cursor-pointer" />
                      <p>Shop by Category</p>
                    </div>
                  </Link>
                </div>
                <div
                  ref={dropRef}
                  className="bg-primary w-64 text-sm font-dm absolute top-[154px] left-[140px] hidden z-50"
                >
                  {/* drop down menu  */}
                  <ul className="text-colorThree">
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                    <li className=" block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500">
                      Accessories
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* search  */}
            <div className="w-[601px] relative hidden ">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-white py-2 pl-5"
              />
              <FaSearch className="absolute top-[12px] right-2" />
            </div>

            {/* account and sign up  */}
            <div className="flex gap-4">
              <div
                onClick={() => {
                  handleClick(signUpDrop, signUpBtn);
                }}
                ref={signUpBtn}
              >
                <Link to="#" className="flex">
                  <FaUser />
                  <FaCaretDown />
                </Link>
              </div>

              {/* drop down menu */}
              <div
                ref={signUpDrop}
                className="bg-white w-48 text-primary text-sm text-center absolute top-[154px] right-52 hidden z-50"
              >
                <ul>
                  <li>
                    <Link
                      className="border border-solid border-borderOne block py-4 hover:bg-userHoverBg hover:text-white hover:font-bold cursor-pointer duration-500"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border border-solid border-borderOne block py-4 hover:bg-userHoverBg hover:text-white hover:font-bold cursor-pointer duration-500"
                      to="/sign-up"
                    >
                      Sign UP
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="relative"
                onClick={() => {
                  handleClick(cartRef, cartBtn);
                }}
                ref={cartBtn}
              >
                <FaShoppingCart className="cursor-pointer" />
                <div className="bg-black rounded-full p-[2px] absolute top-[-12px] right-[-13px]">
                  <p className="text-white leading-none text-xs font-normal">
                    {data}
                  </p>
                </div>
              </div>
              {/* cart part */}
              <div
                className="bg-white w-[360px] border border-solid border-borderOne absolute top-20 right-36 hidden z-50"
                ref={cartRef}
              >
                <Link to="#">
                  <img
                    src={cartDemo}
                    alt="cartPopup"
                    className="w-full relative"
                  />
                </Link>
                <Link>
                  <FaTimes className="absolute top-14 right-5" />
                </Link>

                <div className=" text-center flex justify-center items-center pt-2">
                  <p className="px-2">Quantity</p>
                  <button
                    onClick={() => disPatch(decrement())}
                    className="bg-white inline-block py-2 leading-none px-3 border border-gray-200 text-primary text-xl font-extrabold rounded hover:bg-primary hover:text-white"
                  >
                    -
                  </button>
                  <div className="w-[60px] border border-solid border-gray-200 hover:border-teal-300 mx-1 rounded">
                    <p
                      className="bg-white inline-block py-2 leading-none px-4 mx-1 text-primary text-lg font-extrabold">
                        {data}
                    </p>
                  </div>
                  <button
                    onClick={() => disPatch(increment())}
                    className="bg-white inline-block py-2 leading-none px-3 border border-gray-200 text-primary text-xl font-extrabold rounded hover:bg-primary hover:text-white"
                  >+</button>
                </div>

                <div className="flex gap-x-1 py-3.5 pl-5">
                  <p className="text-secondary text-base ">Subtotal</p>
                  <p className="text-primary text-base font-bold ">$55.00</p>
                </div>

                <div className="flex px-5 justify-between pb-5">
                  <button className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primary text-sm font-dm font-bold hover:bg-primary hover:text-white">View Cart</button>
                  <button className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primary text-sm font-dm font-bold hover:bg-primary hover:text-white">Checkout</button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <hr />
    </header>
  );
};

export default Navbar;
