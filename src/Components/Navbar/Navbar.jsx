import React from "react";
import { Fragment } from 'react'

import {Link,NavLink,Outlet} from "react-router-dom"
import logo from '../images/new.png'
import {
  Navbar,
  MobileNav,
  Typography,
  
  IconButton,
  
} from "@material-tailwind/react";

 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mx-48 flex flex-col gap-2 lg:mb-0 lg:mt-2 lg:flex-row lg:items-center lg:gap-12">
      <nav
        as="li"
        variant="small"
        color="blue-gray"
        
      >
        <NavLink to="/" className="flex  hover:text-green-700 font-bold items-center">
          Ana Sayfa
        </NavLink>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      
      >
        <a href="#" className="flex font-bold hover:text-green-700  items-center">
          Op.Dr.Sadun Yalçın
        </a>
      </nav>
      
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
        <a href="#" className="flex font-bold hover:text-green-700 items-center">
          Hastalıklar
        </a>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
        <a href="#" className="flex font-bold hover:text-green-700 items-center">
          Tanı Yöntemleri
        </a>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
        <a href="#" className="flex font-bold hover:text-green-700 items-center">
          Tedaviler
        </a>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
        <a href="#" className="flex font-bold hover:text-green-700 items-center">
          Kliniğimiz
        </a>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
        <a href="#" className="flex font-bold hover:text-green-700 items-center">
          Hastalar İçin +
        </a>
      </nav>
      <nav
        as="li"
        variant="small"
        color="blue-gray"
      >
       
         
        
          
         <Fragment>
      
          <Link to="/contact" className="flex font-bold  hover:text-green-700 items-center">
            İletişim
          </Link>
        
      
      <Outlet />
    </Fragment>
          
       

        
        
      </nav>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" relative left-40 bottom-16  p-6  font-normal  h-2  w-48 "
      >
        <a href="#" >
          <img  src={logo} alt="SY"></img>
          
        </a>
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
        <MobileNav open={openNav}>
          {navList}
          
        </MobileNav>
      </Navbar>
      
    </>
  );
}