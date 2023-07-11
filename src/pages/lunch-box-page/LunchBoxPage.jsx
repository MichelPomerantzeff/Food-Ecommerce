import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { banner } from "../../data/data";
import Lunchbox from "../../components/lunchbox/Lunchbox";

export default function LunchBoxPage() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.lunchBox} />
      <Lunchbox />
    </>
  );
}
