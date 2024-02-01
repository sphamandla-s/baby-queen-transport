import About from "@/components/About";
import Banner from "@/components/Banner";
import Team from "@/components/Team";
import Values from "@/components/Values";


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Banner />
      <About />
      <Values />
      <Team />
    </main>
  );
}
