import Navbar from "../../components/navbar/Navbar";
import Snacks from "../../components/snacks/Snacks";
import Footer from "../../components/footer/Footer";
import { banner, snacks } from "../../data/data";

export default function SnacksPage() {
  return (
    <>
      <Navbar />
      <div className="banner-wrapper">
        <img src={banner.snacks} alt="Banner Image" />
      </div>
      <Snacks title={"SAVORY"} snacks={snacks.savory} />
      <Snacks title={"SWEETS"} snacks={snacks.sweets} />
      <Footer/>
    </>
  );
}
