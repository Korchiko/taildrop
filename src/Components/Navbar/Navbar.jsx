import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/new.png";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

import "./Navbar.css";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [menuTransparent, setMenuTransparent] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      setMenuTransparent(true);
    } else {
      setMenuTransparent(false);
    }
  };

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
    setWindowWidth(window.innerWidth);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    if (windowWidth > 760) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 50);
    setTimeoutId(id);
  };

  const handleMouseEnter1 = () => {
    clearTimeout(timeoutId);
    if (windowWidth > 760) {
      setShowDropdown1(true);
    }
  };

  const handleMouseLeave1 = () => {
    const id = setTimeout(() => {
      setShowDropdown1(false);
    }, 70);
    setTimeoutId(id);
  };

  const handleMouseEnter2 = () => {
    clearTimeout(timeoutId);
    if (windowWidth > 760) {
      setShowDropdown2(true);
    }
  };

  const handleMouseLeave2 = () => {
    const id = setTimeout(() => {
      setShowDropdown2(false);
    }, 70);
    setTimeoutId(id);
  };

  const handleClick1 = () => {
    if (window.innerWidth <= 760) {
      setShowDropdown(!showDropdown);
    }
  };

  const handleClick2 = () => {
    if (window.innerWidth <= 760) {
      setShowDropdown1(!showDropdown1);
    }
  };
  const handleClick3 = () => {
    if (window.innerWidth <= 760) {
      setShowDropdown2(!showDropdown2);
    }
  };

  const navList = (
    <ul
      className={`deneme_deneme bg-gradient-to-r from-gray-200 via-white-400 to-light-green-100 ${
        menuTransparent ? "transparent-bg" : ""
      }`}
    >
      <div className="left-menü">
        <li>
          <NavLink to="/" className="etiket-container">
            <img src={logo} alt="SY" className="img_img-container" />
          </NavLink>
        </li>
      </div>

      <div className="right-menu">
        <li>
          <NavLink
            to="/"
            className="flex hover:text-green-700 font-bold items-center"
          >
            Ana Sayfa
          </NavLink>
        </li>

        <li as="li" variant="small" color="blue-gray">
          <NavLink
            to="/profile"
            className="flex font-bold hover:text-green-700 items-center"
          >
            Op.Dr.Sadun Yalçın
          </NavLink>
        </li>

        <li
          as="li"
          variant="small"
          color="blue-gray"
          className="relative"
          onMouseEnter={window.innerWidth > 768 ? handleMouseEnter : null}
          onMouseLeave={window.innerWidth > 768 ? handleMouseLeave : null}
        >
          <NavLink
            to="#"
            className="flex font-bold group rounded-md hover:text-green-700 items-center"
            onClick={() => {
              if (window.innerWidth >= 760) {
                handleClick1();
              }
            }}
          >
            Hastalıklar
            {window.innerWidth <= 760 && (
              <button
                className="ml-2  focus:outline-none hst-btn "
                onClick={() => handleClick1()}
              >
                {" "}
                <div className>{showDropdown ? "-" : "+"}</div>
              </button>
            )}
          </NavLink>
          {showDropdown && (
            <ul
              className="absolute top-10 left hst-bg bg-white sm:bg-gray-100 z-50 rounded shadow-lg py-2 px-4"
              style={{ minWidth: "160px" }}
            >
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik4" className="ml-4">
                    Diyabetik Retinopati
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik1" className="ml-4">
                    Sarı Nokta Hastalığı
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik2" className="ml-4">
                    Retina Dekolmanı
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik5" className="ml-4">
                    Epiretinal Membran
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik3" className="ml-4">
                    Makuler Hole(Sarı Nokta Deliği)
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik6" className="ml-4">
                    Glokom
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/hastalik7" className="ml-4">
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
          onMouseEnter={window.innerWidth > 768 ? handleMouseEnter1 : null}
          onMouseLeave={window.innerWidth > 768 ? handleMouseLeave1 : null}
        >
          <NavLink
            to="#"
            className="flex font-bold hover:text-green-700 items-center"
            onClick={() => {
              if (window.innerWidth >= 760) {
                handleClick2();
              }
            }}
          >
            Tanı Yöntemleri
            {window.innerWidth <= 760 && (
              <button
                className="ml-2 focus:outline-none tn-btn"
                onClick={() => handleClick2()}
              >
                <div>{showDropdown1 ? "-" : "+"}</div>
              </button>
            )}
          </NavLink>

          {showDropdown1 && (
            <ul
              className="absolute top-10 left tn-bg bg-white sm:bg-gray-100 z-50 transition duration-700 rounded shadow-lg py-2 px-4"
              style={{ minWidth: "160px" }}
            >
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/tani1" className="ml-4">
                    Fundus Floresein Anjiografisi (FFA)
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/tani2" className="ml-4">
                    İndosiyanin Anjiografisi (ICG)
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
                <li style={{ whiteSpace: "nowrap" }}>
                  <NavLink to="/tani3" className="ml-4">
                    Optik Kohorens Tomografisi (OCT)
                  </NavLink>
                </li>
              </div>
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
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
          onMouseEnter={window.innerWidth > 768 ? handleMouseEnter2 : null}
          onMouseLeave={window.innerWidth > 768 ? handleMouseLeave2 : null}
        >
          <NavLink
            to="#"
            className="flex font-bold hover:text-green-700 items-center"
            nClick={() => {
              if (window.innerWidth >= 760) {
                handleClick3();
              }
            }}
          >
            Tedaviler
            {window.innerWidth <= 760 && (
              <button
                className="ml-2 focus:outline-none td-btn"
                onClick={() => handleClick3()}
              >
                <div>{showDropdown2 ? "-" : "+"}</div>
              </button>
            )}
          </NavLink>
          {showDropdown2 && (
            <ul
              className="absolute top-10 left td-bg bg-white sm:bg-gray-100 z-50 transition duration-700 rounded shadow-lg py-2 px-4"
              style={{ minWidth: "160px" }}
            >
              <div className="hover:bg-green-800 rounded-md transition duration-700 hover:text-white">
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
        <li className={showDropdown2 ? "animasyon_göster" : "animasyon_göster2"} >
          asdasdasd
          <p>asaskfsdg</p>
          <p>asaskfsdg</p>
          <p>asaskfsdg</p>
          <p>asaskfsdg</p>

        </li>

        {/* <li as="li" variant="small" color="blue-gray">
          <NavLink
            to="#"
            className="flex font-bold hover:text-green-700 items-center"
          >
            Makaleler
          </NavLink>
        </li> */}
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
      </div>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 bg-gradient-to-r from-gray-200 via-white-400 to-light-green-100 text-black  lg:py-4">
        <div className="flex items-center justify-around text-blue-gray-900">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit text-green-800 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
