import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState, useEffect } from "react";
import MenuLinksSm from "./MenuLinksSm";

const NavbarLg = () => {
  return (
    <>
      <div className="container mx-auto px-24 mt-6 pb-20">
        <div className="flex flex-row justify-between items-center">
          <a href="" className="font-sans font-light tracking-widest">
            INTERIORS
          </a>
          <a href="" className="font-sans font-light tracking-widest">
            PROFILE
          </a>
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="my-2 font-forum tracking-widest font-bold text-3xl">
              THE DESIGN ATELIER
            </h1>
            <p className="capitalize font-sans font-light tracking-widest">
              TIMELESS INTERIORS
            </p>
          </div>
          <a href="" className="font-sans font-light tracking-widest">
            MEDIA
          </a>
          <a href="" className="font-sans font-light tracking-widest">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};
const NavbarSm = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideText, setHideText] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideText(true);
      } else {
        setHideText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="flex flex-col text-center items-center justify-center">
          <h1
            className={`my-2 font-forum tracking-widest font-bold ${
              hideText ? "text-xl" : "text-3xl"
            }`}
          >
            THE DESIGN ATELIER
          </h1>
          <p
            className={`capitalize font-sans font-light text-sm tracking-widest transition duration-300 ease-in-out ${
              hideText ? "hidden" : "block"
            }`}
          >
            TIMELESS INTERIORS
          </p>
          <div className={`${hideText ? "" : "my-4"}`}>
            <HiOutlineMenuAlt4
              className="text-3xl font-light"
              onClick={menuHandler}
            />
          </div>
        </div>
      </div>
      {showMenu ? <MenuLinksSm /> : ""}
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="bg-white fixed top-0 left-0 right-0 mb-24">
        <div className="lg:hidden">
          <NavbarSm />
        </div>
        <div className="hidden lg:block ">
          <NavbarLg />
        </div>
      </div>
    </>
  );
};

export default Navbar;
