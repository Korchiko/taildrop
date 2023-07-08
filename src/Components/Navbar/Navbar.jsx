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
    }, 100);
    setTimeoutId(id);
  };
  const handleMouseEnter1 = () => {
    clearTimeout(timeoutId);
    setShowDropdown1(true);
  };

  const handleMouseLeave1 = () => {
    const id = setTimeout(() => {
      setShowDropdown1(false);
    }, 100);
    setTimeoutId(id);
  };
  const handleMouseEnter2 = () => {
    clearTimeout(timeoutId);
    setShowDropdown2(true);
  };
  
  const handleMouseLeave2 = () => {
    const id = setTimeout(() => {
      setShowDropdown2(false);
    }, 100);
    setTimeoutId(id);
  };

  const navList = (
    <ul className="mx-48 flex flex-col gap-2 lg:mb-0 lg:mt-2 lg:flex-row lg:items-center lg:gap-12">
      <nav as="li" variant="small" color="blue-gray">
        <NavLink
          to="/"
          className="flex hover:text-green-700 font-bold items-center"
        >
          Ana Sayfa
        </NavLink>
      </nav>
      <nav as="li" variant="small" color="blue-gray">
        <NavLink
          to="/doctor"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Op.Dr.Sadun Yalçın
        </NavLink>
      </nav>
      <nav
  as="li"
  variant="small"
  color="blue-gray"
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <NavLink
    to="/hastalik"
    className="flex font-bold hover:text-green-700 items-center"
  >
    Hastalıklar
  </NavLink>
  {showDropdown && (
    <ul
      className="absolute top-10 left bg-gray-100 rounded shadow-lg py-2 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth: '160px',
      }}
    >
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/hastalik1" className="hover:text-green-700">
          Sarı Nokta Hastalığı
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/hastalik2" className="hover:text-green-700">
          Retina Dekolmanı
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/hastalik3" className="hover:text-green-700">
          Makuler Hole(Sarı Nokta Deliği)
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/hastalik4" className="hover:text-green-700">
          Diyabetik Retinopati
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/hastalik5" className="hover:text-green-700">
        Epiretinal Membran
        </NavLink>
      </li>
    </ul>
  )}
</nav>

<nav
  as="li"
  variant="small"
  color="blue-gray"
  className="relative"
  onMouseEnter={handleMouseEnter1}
  onMouseLeave={handleMouseLeave1}
>
  <NavLink
    to="/tani"
    className="flex font-bold hover:text-green-700 items-center"
  >
    Tanı Yöntemleri
  </NavLink>
  {showDropdown1 && (
    <ul
      className="absolute top-10 left-0 bg-white rounded shadow-lg py-2 px-4"
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
      style={{
        minWidth: '160px',
      }}
    >
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/tani1" className="hover:text-green-700">
        
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/tani2" className="hover:text-green-700">
          
        </NavLink>
      </li>
    </ul>
  )}
</nav>
<nav
  as="li"
  variant="small"
  color="blue-gray"
  className="relative"
  onMouseEnter={handleMouseEnter2}
  onMouseLeave={handleMouseLeave2}
>
  <NavLink
    to="/tedaviler"
    className="flex font-bold hover:text-green-700 items-center"
  >
    Tedaviler
  </NavLink>
  {showDropdown2 && (
    <ul
      className="absolute top-10 left bg-gray-100 rounded shadow-lg py-2 px-4"
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
      style={{
        minWidth: '160px',
      }}
    >
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/tedavi1" className="hover:text-green-700">
          Laser Yöntemi
        </NavLink>
      </li>
      <li style={{ whiteSpace: 'nowrap' }}>
        <NavLink to="/tedavi2" className="hover:text-green-700">
        İntravitreal Enjeksiyon
        </NavLink>
      </li>
    </ul>
  )}
</nav>
      <nav as="li" variant="small" color="blue-gray">
        <NavLink
          to="/klinik"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Makaleler
        </NavLink>
      </nav>
      <nav as="li" variant="small" color="blue-gray">
        <NavLink
          to="/hastalar"
          className="flex font-bold hover:text-green-700 items-center"
        >
          Hastalar İçin +
        </NavLink>
      </nav>
      <nav as="li" variant="small" color="blue-gray">
        <NavLink
          to="/iletisim"
          className="flex font-bold hover:text-green-700 items-center"
        >
          İletişim
        </NavLink>
      </nav>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-blue-gray-50">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="relative left-40 bottom-16 p-6 font-normal h-2 w-48"
          >
            <NavLink to="/">
              <img src={logo} alt="SY" />
            </NavLink>
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
