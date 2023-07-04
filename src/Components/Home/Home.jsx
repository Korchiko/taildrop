// import Footer from "./Components/Footer/Footer";
// import Slider from "./Components/Slider/Slider";
// import Profile from "./Components/Profile/Profile";
// import Picture from "./Components/Picture/Picture";
// import Fatal from "./Components/Fatal/Fatal";
// import Second from "./Components/Second/Second";

import Footer from "../Footer/Footer"
import Slider from "../Slider/Slider"
import Picture from "../Picture/Picture"
import Second from "../Second/Second"
import Profile from "../Profile/Profile"
import Fatal from "../Fatal/Fatal"


const Home = () => {
  return (
    <>
      <Slider />
      <Picture />
      <Second />
      <Profile />
      <Fatal />
      <Footer />
    </>
  )
}
export default Home