import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Profile from "./Components/Profile/Profile";
import Picture from "./Components/Picture/Picture";
import Fatal from "./Components/Fatal/Fatal";
import Second from "./Components/Second/Second";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />

      <Slider />
      <Picture />
      <Second />
      <Profile />
      <Fatal />
      <Footer />
    </div>
  );
}

export default App;
