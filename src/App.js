import "./App.css";
import React, { useState, useEffect } from 'react';
import LoadingScreen from './Components/Spinner/Spinner';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

import Profile from "./Components/Profile/Profile";

import HastaOne from "./Components/Hasta/Hasta1";
import HastaTwo from "./Components/Hasta/Hasta2";
import HastaThree from "./Components/Hasta/Hasta3";
import HastaFour from "./Components/Hasta/Hasta4";
import HastaFive from "./Components/Hasta/Hasta5";
import HastaSix from "./Components/Hasta/Hasta6";
import HastaSeven from "./Components/Hasta/Hasta7";



import Tani from "./Components/Tani/Tani";
import TaniTwo from "./Components/Tani/Tani2";
import TaniThree from "./Components/Tani/Tani3";
import TaniFour from "./Components/Tani/Tani4";

import TedaviOne from "./Components/Tedavi/Tedavione";
import TedaviTwo from "./Components/Tedavi/Tedavitwo";

import Makale from "./Components/Cardsthree/Cardsthree";

import Contact from "./Components/Contact/Contact";

// 3 TEMEL BİLEŞEN VAR. <BrowserRouter,  Route ve Link>

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>

        

        <Route path="/profile" Component={Profile}></Route>


        <Route path="/hastalik1" Component={HastaOne}></Route>
        <Route path="/hastalik2" Component={HastaTwo}></Route>
        <Route path="/hastalik3" Component={HastaThree}></Route>
        <Route path="/hastalik4" Component={HastaFour}></Route>
        <Route path="/hastalik5" Component={HastaFive}></Route>
        <Route path="/hastalik6" Component={HastaSix}></Route>
        <Route path="/hastalik7" Component={HastaSeven}></Route>



        <Route path="/tani1" Component={Tani}></Route>
        <Route path="/tani2" Component={TaniTwo}></Route>
        <Route path="/tani3" Component={TaniThree}></Route>
        <Route path="/tani4" Component={TaniFour}></Route>

        <Route path="/tedavi1" Component={TedaviOne}></Route>
        <Route path="/tedavi2" Component={TedaviTwo}></Route>

        <Route path="/makaleler" Component={Makale}></Route>


        <Route path="/iletisim" Component={Contact}></Route>

        

      </Routes>
    </div>
  );
}

export default App;
