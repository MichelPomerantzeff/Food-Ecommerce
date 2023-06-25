import "./App.css";
import Banner from "./components/banner/Banner";
import HealthyOption from "./components/healthy-option/HealthyOption";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Specials from "./components/specials/Specials";
import { dishes } from "./data";

function App() {
  return (
    <>
      <Navbar />
      {/* <HealthyOption /> */}
      <Banner/>
      <Specials />
      <Slider title={"CHICKEN"} dish={dishes.chicken}/>
      <Slider title={"BEEF"} dish={dishes.beef}/>
      <Slider title={"PASTA"} dish={dishes.pasta}/>
      <Slider title={"VEGETARIAN"} dish={dishes.vegetarian}/>
      <Slider title={"FISH"} dish={dishes.fish}/>
    </>
  );
}

export default App;
