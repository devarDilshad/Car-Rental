import { logo } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center py-[1.8rem] px-[1rem] md:px-[6.9rem] w-full h-auto max-w-[130rem] absolute top-0 right-0 left-0 z-10">
      {/* Mobile Menu Overlay */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } h-full w-full fixed z-10 top-0 left-0 bg-gray-900 overflow-x-hidden pt-20 justify-center`}
      >
        <i
          className="fa-solid fa-xmark absolute top-5 right-9 text-4xl ml-12 py-2 pr-2 pl-8 text-red-500 block"
          onClick={() => setToggle((prev) => !prev)}
        ></i>
        <ul className="list-none flex flex-col justify-start items-center space-y-3">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a
                href={navLink.link}
                onClick={() => setToggle((prev) => !prev)}
                className="font-rubik font-medium text-white text-[1rem] cursor-pointer no-underline"
              >
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Logo */}
      <div className="w-[9rem]">
        <a href="#">
          <img src={logo} alt="car__rental" className="w-full h-full" />
        </a>
      </div>
      {/* Nav Links */}
      <ul className="list-none hidden lg:flex flex-row justify-between mx-2">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`${
              index === navLinks.length - 1 ? "mr-0" : "mr-[1.2rem]"
            }`}
          >
            <a
              href={navLink.link}
              className="font-rubik font-medium text-secondary text-[1rem] cursor-pointer no-underline"
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Signin/Register container */}
      <div className="hidden lg:flex flex-row justify-center items-center">
        <a
          href="#"
          className="font-rubik font-medium text-secondary text-[1rem] cursor-pointer no-underline mr-3"
        >
          Sign in
        </a>
        <a
          href="#"
          className="font-rubik font-medium bg-primary text-white text-[1rem] rounded-[3px] py-[0.7rem] px-[1.8rem] cursor-pointer no-underline shadow-xl shadow-orange-500/40"
        >
          Register
        </a>
      </div>
      {/* Mobile Menu Container */}
      <div className="w-[14rem] flex justify-end items-center lg:hidden mr-3">
        <i
          onClick={() => setToggle((prev) => !prev)}
          className={`${
            !toggle ? "fa-solid fa-bars fa-lg" : "fa-solid fa-xmark fa-lg"
          } hover:text-primary`}
        ></i>
      </div>
    </nav>
  );
};
export default Navbar;
