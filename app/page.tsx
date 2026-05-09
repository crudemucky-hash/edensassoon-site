import Hero from "@/components/Hero";
import About from "@/components/About";
import Legacy from "@/components/Legacy";
import Podcasts from "@/components/Podcasts";
import Connect from "@/components/Connect";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Legacy />
      <Podcasts />
      <Connect />
      <Footer />
    </main>
  );
}
