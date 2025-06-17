import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import { briskLogixLogo } from "../assets";
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
      <div className="flex items-center px-3 lg:px-5 xl:px-8 max-lg:py-0 lg:py-0">
        <Link className="block w-[8rem] xl:mr-4" to="/">
          <img src={briskLogixLogo} width={100} height={26} alt="BriskLogix" className="object-contain" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[2.5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-start pt-8 lg:justify-center lg:pt-0 m-auto lg:flex-row">
            {navigation.map((item) => (
              <div key={item.id} className="relative group w-full lg:w-auto">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                        item.onlyMobile ? "lg:hidden" : ""
                      } w-full text-center px-4 py-4 md:py-6 lg:w-auto lg:text-left lg:-mr-0.25 lg:text-xs lg:font-semibold lg:py-1 lg:px-8 ${
                        item.url === pathname.pathname
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    >
                      {item.title}
                    </button>
                    <div className={`relative lg:absolute left-0 mt-0 lg:mt-2 w-full lg:w-80 rounded-md shadow-lg bg-n-8 ring-1 ring-black ring-opacity-5 ${
                      openDropdown ? "block" : "hidden"
                    } lg:group-hover:block`}>
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            onClick={handleClick}
                            className="block px-4 py-3 text-lg lg:text-sm text-n-1 hover:bg-n-7 hover:text-[#AC6AFF] text-center lg:text-left border-b border-n-6/30 last:border-b-0"
                          >
                            <div className="font-semibold">{dropdownItem.title}</div>
                            {dropdownItem.description && (
                              <div className="text-xs text-n-3 mt-1 leading-tight">
                                {dropdownItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleClick();
                      if (item.url.startsWith('#')) {
                        // For anchor links, use smooth scrolling
                        setTimeout(() => {
                          const element = document.getElementById(item.url.slice(1));
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      } else {
                        // For regular links, navigate
                        window.location.href = item.url;
                      }
                    }}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } w-full text-center px-4 py-4 md:py-6 lg:w-auto lg:text-left lg:-mr-0.25 lg:text-xs lg:font-semibold lg:py-1 lg:px-8 ${
                      item.url === pathname.pathname
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                  </button>
                )}
              </div>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button 
          className="hidden lg:flex text-xs py-1 px-3" 
          href={pathname.pathname === '/staff-augmentation' ? '#contact-form' : '#welcome'}
        >
          contact us
        </Button>

        <Button
          className="ml-auto lg:hidden text-xs py-1"
          px="px-2"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
