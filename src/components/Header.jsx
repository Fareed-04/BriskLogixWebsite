import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={brainwave} width={90} height={90} alt="BriskLogix" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <div key={item.id} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                        item.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                        item.url === pathname.pathname
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    >
                      {item.title}
                    </button>
                    <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-n-8 ring-1 ring-black ring-opacity-5 ${
                      openDropdown ? "block" : "hidden"
                    } lg:group-hover:block`}>
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            onClick={handleClick}
                            className="block px-4 py-2 text-sm text-n-1 hover:bg-n-7 hover:text-[#AC6AFF]"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === pathname.pathname
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button 
          className="hidden lg:flex" 
          href={pathname.pathname === '/staff-augmentation' ? '#contact-form' : '#Collaboration'}
        >
          contact us
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
