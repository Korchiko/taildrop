import React, { useState } from "react";
import logo from "../images/new.png";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import "./Navbar.css";

const navlinks = [
  {
    title: "Ana Sayfa",
    link: "/",
  },
  {
    title: "Op.Dr.Sadun Yalçın",
    link: "/profile",
  },
  {
    title: "Hastalıklar",
    subMenuItems: [
      { title: "Diyabetik Retinopati", link: "/hastalik4" },
      { title: "Sarı Nokta Hastalığı", link: "/hastalik1" },
      { title: "Retina Dekormanı", link: "/hastalik2" },
      { title: "Epiretinal Membran", link: "/hastalik5" },
      { title: "Makuler Hole", link: "/hastalik3" },
      { title: "Glokom", link: "/hastalik6" },
      { title: "Katarakt ve Akıllı Mercek", link: "/hastalik7" },
    ],
  },
  {
    title: "Tanı Yöntemleri",
    subMenuItems: [
      { title: "Fundus Floresein Anjiografisi (FFA)", link: "/tani1" },
      { title: "İndosiyanin Anjiografisi (ICG)", link: "/tani2" },
      { title: "Optik Kohorens Tomografisi (OCT)", link: "/tani3" },
      { title: "Oftalmik Ultrasonografi (USG)", link: "/tani4" },
    ],
  },
  {
    title: "Tedaviler",
    subMenuItems: [
      { title: "Smile Laser Tedavisi", link: "/tedavi1" },
      { title: "Göz İçi İlaç Enjeksiyonları", link: "/tedavi2" },
    ],
  },
  {
    title: "Hastalar İçin",
  },
  {
    title: "İletişim",
    link: "/iletisim",
  },
];

const SubmenuItem = ({ item }) => {
  return (
    <li className="menu-efect-li text-black transition-all duration-500  hover:bg-green-900 hover:text-white px-6 py-2 w-1/2 rounded-md cursor-pointer">
      <a href={item.link}>{item.title}</a>
    </li>
  );
};

const Submenu = ({ subMenuItems }) => {
  return (
    <ul>
      {subMenuItems.map((item, subIndex) => (
        <SubmenuItem key={subIndex} item={item} />
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState(null);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmenuToggle = (index) => {
    if (submenuOpen && currentSubmenu === index) {
      setSubmenuOpen(false);
      setCurrentSubmenu(null);
    } else {
      setSubmenuOpen(true);
      setCurrentSubmenu(index);
    }
  };

  const handleSubmenuClick = (link) => {
    window.location.href = link;
    setSubmenuOpen(false);
    setCurrentSubmenu(null);
  };

  return (
    <div className="bg-gray-200 sticky top-0 z-50 cursor-pointer">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="flex items-center">
            <a href="/" className="">
              <img
                src={logo}
                className="logo object-cover mt-2 w-36 h-20"
                alt="SY"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleSubmenuToggle(index)}
                  onMouseLeave={() => handleSubmenuToggle(index)}
                >
                  <a
                    className="text-black transition-all duration-500  hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                  {link.subMenuItems && (
                    <div
                      className={` absolute left-0 mt-2 w-72 bg-white border-2 border-green-900 rounded-lg shadow-lg z-10  ${
                        submenuOpen && currentSubmenu === index
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <ul className="p-2">
                        {link.subMenuItems.map((item, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-black py-2 transition-all duration-500  hover:bg-green-900  rounded-md pl-2 hover:text-white cursor-pointer"
                            onClick={() => handleSubmenuClick(item.link)}
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-6 flex md:hidden ">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-xl text-black transition-all duration-500  hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            >
              <span className="sr-only ">Aç/Kapat Ana Menü</span>
              {open === true ? <FaTimes /> : <FaBars className=" " />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className=" mobile-efect md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <a
                    className="text-black transition-all duration-500  hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                  {link.subMenuItems && (
                    <button
                      onClick={() => handleSubmenuToggle(index)}
                      className=" text-black transition-all duration-500  hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      {currentSubmenu === index ? <FaMinus /> : <FaPlus />}
                    </button>
                  )}
                </div>
                {submenuOpen &&
                  currentSubmenu === index &&
                  link.subMenuItems && (
                    <div className="pl-5 text-black transition-all duration-500  px-3 py-2 rounded-md text-md font-medium">
                      <Submenu subMenuItems={link.subMenuItems} />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
