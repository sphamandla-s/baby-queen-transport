import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Values from "@/components/Values";


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Banner />
      <About />
      <Hero />
      <Values />
      <Team />
      <Footer />
    </main>
  );
}
