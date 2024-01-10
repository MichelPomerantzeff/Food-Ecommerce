import Specials from "../../components/specials/Specials";
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import { banner, dishes } from "../../data/data";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
        <img src={banner.home} alt="Banner Image" />
      </div>
      <Specials />
      <Slider title={"CHICKEN"} dish={dishes.chicken} />
      <Slider title={"BEEF"} dish={dishes.beef} />
      <Slider title={"PASTA"} dish={dishes.pasta} />
      <Slider title={"VEGETARIAN"} dish={dishes.vegetarian} />
      <Slider title={"FISH"} dish={dishes.fish} />
      <Footer />
    </main>
  );
}
