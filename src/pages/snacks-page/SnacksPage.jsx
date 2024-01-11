import Navbar from "../../components/navbar/Navbar";
import Snacks from "../../components/snacks/Snacks";
import Footer from "../../components/footer/Footer";
import { banner, snacks } from "../../data/data";

export default function SnacksPage() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
        <img src={banner.snacks} alt="Banner Image" />
      </div>
      <Snacks title={"SAVORY"} snacks={snacks.savory} />
      <Snacks title={"SWEETS"} snacks={snacks.sweets} />
      <Footer/>
    </main>
  );
}
