import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Snacks from "../../components/snacks/Snacks";
import Footer from "../../components/footer/Footer";
import { banner, snacks } from "../../data/data";

export default function SnacksPage() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.snacks} />
      <Snacks title={"SAVORY"} snacks={snacks.savory} />
      <Snacks title={"SWEETS"} snacks={snacks.sweets} />
      <Footer/>
    </>
  );
}
