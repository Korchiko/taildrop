import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/new.png";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [timeoutId]);

  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 50);
    setTimeoutId(id);
  };

  const handleMouseEnter1 = () => {
    clearTimeout(timeoutId);
    setShowDropdown1(true);
  };

  const handleMouseLeave1 = () => {
    const id = setTimeout(() => {
      setShowDropdown1(false);
    }, 70);
    setTimeoutId(id);
  };

  const handleMouseEnter2 = () => {
    clearTimeout(timeoutId);
    setShowDropdown2(true);
  };

  const handleMouseLeave2 = () => {
    const id = setTimeout(() => {
      setShowDropdown2(false);
    }, 70);
    setTimeoutId(id);
  };

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-2 tracking-wide lg:flex-row lg:items-center lg:gap-12">
    <li className="flex items-center w-48 h-0">
      <a href="/">
        <img src={logo} alt="SY" className="w-28 h-32 mr-2  " />
      </a>
    </li>
    
    <li className="flex items-center">
      <a href="/" className="flex hover:text-green-700  font-bold items-center">
        Ana Sayfa
      </a>
    </li>
   
  
  

   
      <li as="li" variant="small" color="blue-gray">
        <NavLink
          to="/profile"
          className="flex font-bold  hover:text-green-700 items-center"
        >
          Op.Dr.Sadun Yalçın
        </NavLink>
      </li>
     
      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          to="#"
          className="flex font-bold group rounded-md  hover:text-green-700 items-center"
        >
          Hastalıklar
        </NavLink>
        {showDropdown && (
          <ul
            className="absolute top-10 left bg-white sm:bg-gray-100 z-50 rounded shadow-lg py-2 px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              minWidth: "160px",
            }}
          >
              
            <div className="hover:bg-green-800 rounded-md transition duration-700  hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik4" className=" ml-4">
                Diyabetik Retinopati
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik1" className=" ml-4">
                Sarı Nokta Hastalığı
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik2" className=" ml-4">
                Retina Dekolmanı
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik5" className=" ml-4">
                Epiretinal Membran
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik3" className=" ml-4">
                Makuler Hole(Sarı Nokta Deliği)
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik6" className=" ml-4">
                Glokom
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/hastalik7" className=" ml-4">
                Katarakt ve Akıllı Mercek
              </NavLink>
            </li>
            </div>
            
          </ul>
        )}
      </li>

      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="relative"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <NavLink
          to="#"
          className="flex font-bold hover:text-green-700  items-center"
        >
          Tanı Yöntemleri
        </NavLink>
        {showDropdown1 && (
          <ul
            className="absolute top-10 left-0 rounded-lg bg-white sm:bg-gray-100 z-50  shadow-lg py-2 px-4"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            style={{
              minWidth: "160px",
            }}
          > 
            <div className="hover:bg-green-800 rounded-md transition duration-700 ease-in-out hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tani1" className="ml-4">
                Fundus Floresein Anjiografisi (FFA)
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 ease-in-out hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tani2" className="ml-4">
                İndosiyanin Anjiografisi (ICG)
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 ease-in-out  hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tani3" className="ml-4">
                Optik Kohorens Tomografisi (OCT)
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 ease-in-out hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tani4" className="ml-4">
                Oftalmik Ultrasonografi (USG)
              </NavLink>
            </li>
            </div>
          </ul>
        )}
      </li>

      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="relative"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <NavLink
          to="#"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Tedaviler
        </NavLink>
        {showDropdown2 && (
          <ul
            className="absolute top-10 left bg-white sm:bg-gray-100 z-50 transition duration-700 rounded shadow-lg py-2 px-4"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={{
              minWidth: "160px",
            }}
          >
            <div className="hover:bg-green-800 rounded-md transition duration-700  hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tedavi1" className="ml-4">
                SMILE LASER TEDAVİSİ
              </NavLink>
            </li>
            </div>
            <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
            <li style={{ whiteSpace: "nowrap" }}>
              <NavLink to="/tedavi2" className="ml-4">
                Göz İçi İlaç Enjeksiyonları
              </NavLink>
            </li>
            </div>
          </ul>
        )}
      </li>

      <li as="li" variant="small" color="blue-gray">
        <NavLink
          to="#"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Makaleler
        </NavLink>
      </li>
      <li as="li" variant="small" color="blue-gray">
        <NavLink
          to="#"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Hastalar İçin +
        </NavLink>
      </li>
      <li as="li" variant="small" color="blue-gray">
        <NavLink
          to="/iletisim"
          className="flex font-bold hover:text-green-700 items-center"
        >
          İletişim
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 text-black sm:bg-blue-gray-50">
        <div className="flex items-center justify-around text-blue-gray-900">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="relative left-40 bottom-16 p-6 font-normal h-2 w-48"
          >
            
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
