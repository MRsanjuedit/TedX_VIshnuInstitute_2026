import logo from "../assets/images/tedx_logo.jpg";
import logoMobile from "../assets/images/tedx_logo_mobile.png";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleVenueClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setMobileMenu(false);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenu(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Speakers", path: "/speakers" },
    { label: "Team", path: "/team" },
    { label: "Venue", path: "/venue" },
    { label: "Gallery", path: "/gallery" },
    { label: "Editions", path: "/editions" },
  ];

  const isEditionsActive = location.pathname.startsWith("/editions");

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-black shadow-lg">
      <div className="flex items-center justify-between px-5 py-4 lg:px-6 xl:px-10 h-20">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="hidden md:block h-10 lg:h-10 xl:h-12"
        />
        <img src={logoMobile} alt="Logo" className="md:hidden h-12" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
          {navItems.map((item) =>
            item.label === "Editions" ? (
              <DropdownMenu key={item.label} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="p-0 outline-none ring-0">
                  <NavLink
                    to="/editions"
                    className={`flex items-center gap-1 text-base lg:text-base xl:text-lg font-medium cursor-pointer transition hover:scale-110 ${
                      isEditionsActive
                        ? "text-red-500 font-semibold"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    Editions
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </NavLink>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-black outline-none border-none rounded shadow-md w-44">
                  <DropdownMenuItem asChild>
                    <a
                      href="https://tedxvishnuinstitute.vercel.app/"
                      className="block w-full text-white px-3 py-2 text-base lg:text-base xl:text-base font-medium hover:bg-red-600"
                    >
                      Season 1
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <a
                      href="https://www.tedxvishnuinstitute.in/"
                      className="block w-full text-white px-3 py-2 text-base lg:text-base xl:text-base font-medium hover:bg-red-600"
                    >
                      Season 2
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={
                  item.label === "Venue" ? handleVenueClick : handleNavClick
                }
                className={({ isActive }) =>
                  item.label === "Venue"
                    ? "text-base lg:text-base xl:text-lg font-medium transition-all duration-200 hover:scale-110 text-white"
                    : `text-base lg:text-base xl:text-lg font-medium transition-all duration-200 hover:scale-110 ${
                        isActive ? "text-red-500 font-semibold" : "text-white"
                      }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button label="Buy Tickets" onClick={() => {}} />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          {mobileMenu ? (
            <X
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <Menu
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      <div
        className={`
          lg:hidden overflow-hidden bg-black flex flex-col px-6 gap-4
          transition-all duration-500 ease-in-out
          ${
            mobileMenu
              ? "max-h-[550px] opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0"
          }
        `}
      >
        {navItems.map((item) =>
          item.label === "Editions" ? (
            <DropdownMenu key={item.label} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="p-0 outline-none ring-0">
                <div
                  className={`flex items-center gap-2 text-lg font-medium ${
                    isEditionsActive
                      ? "text-red-500 font-semibold"
                      : "text-white"
                  }`}
                >
                  Editions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-black rounded shadow-md w-44">
                <DropdownMenuItem asChild>
                  <a
                    href="https://tedxvishnuinstitute.vercel.app/"
                    className="block w-full text-white px-3 py-2 text-lg font-medium hover:bg-red-600"
                  >
                    Season 1
                  </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a
                    href="https://www.tedxvishnuinstitute.in/"
                    className="block w-full text-white px-3 py-2 text-lg font-medium hover:bg-red-600"
                  >
                    Season 2
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                setMobileMenu(false);
                item.label === "Venue" ? handleVenueClick() : handleNavClick();
              }}
              className={({ isActive }) =>
                item.label === "Venue"
                  ? "text-lg text-white font-medium"
                  : `text-lg font-medium ${
                      isActive ? "text-red-500 font-semibold" : "text-white"
                    }`
              }
            >
              {item.label}
            </NavLink>
          ),
        )}

        {/* Mobile Button */}
        <Button label="Buy Tickets" onClick={() => {}} />
      </div>
    </div>
  );
}

export default Navbar;
