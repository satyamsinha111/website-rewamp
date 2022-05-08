import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [menushow, setMenushow] = useState(true);

  const handleResize = () => {
    console.log("Hello");
    if (window.innerWidth < 768 || window.innerWidth < 1002) {
      setMenushow(false);
    } else {
      setMenushow(true);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 768 || window.innerWidth < 1002) {
      setMenushow(false);
    } else {
      setMenushow(true);
    }
  }, []);

  let toggleMenu = () => {
    console.log("Toggle menu");
    setMenushow(!menushow);
  };

  let closeDropdown = () => {
    console.log("Hello");
    if (window.innerWidth < 768 || window.innerWidth < 1002) {
      setMenushow(false);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 select-none">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" onClick={closeDropdown}>
            <span className="font-semibold text-xl tracking-tight">
              Satyam sinha
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {menushow ? (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end	">
            <div className="text-sm mr-4">
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="about"
                onClick={closeDropdown}
              >
                About
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="works"
                onClick={closeDropdown}
              >
                Works
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                to="contact"
                onClick={closeDropdown}
              >
                Contact
              </Link>
            </div>
            <div>
              <a
                href="https://www.youtube.com/c/GeekySatyam"
                rel="noreferrer"
                target="_blank"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                <i className="fa fa-youtube-play mr-2"></i>
                Youtube videos
              </a>
            </div>
            {/* <button>
              <i className="fa fa-sun-o text-white	ml-2"></i>
            </button> */}
            {/* <button>
              <i className="fa fa-moon-o text-white	ml-2"></i>
            </button> */}
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Header;
