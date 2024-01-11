import Navbar from "../../components/navbar/Navbar";
import MainCourse from "../../components/main-course/MainCourse";
import { banner } from "../../data/data";
import { dishes } from "../../data/data";
import Footer from "../../components/footer/Footer";

export default function MainCoursePage() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
        <img src={banner.mainCourse} alt="Banner Image" />
      </div>
      <MainCourse title={"CHICKEN"} dishes={dishes.chicken} />
      <MainCourse title={"BEEF"} dishes={dishes.beef} />
      <MainCourse title={"FISH"} dishes={dishes.fish} />
      <MainCourse title={"PASTA"} dishes={dishes.pasta} />
      <MainCourse title={"VEGETARIAN"} dishes={dishes.vegetarian} />
      <Footer />
    </main>
  );
}
