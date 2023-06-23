import "./App.css";
import Slider from "./components/slider/Slider";
import Specials from "./components/specials/Specials";
import { dishes } from "./data";

function App() {

  return (
    <>
      <Specials />
      <Slider title={"CHICKEN"} dish={dishes.chicken}/>
      <Slider title={"BEEF"} dish={dishes.beef}/>
    </>
  );
}

export default App;
