import "./App.css";
import Header from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider/Slider";

// 3 TEMEL BİLEŞEN VAR. <BrowserRouter,  Route ve Link>

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/Contact" Component={Slider}></Route>
      </Routes>
    </div>
  );
}

export default App;
