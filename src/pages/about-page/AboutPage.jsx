import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
