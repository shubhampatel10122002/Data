import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Modalities } from "@/components/Modalities";
import { Reach } from "@/components/Reach";
import { Process } from "@/components/Process";
import { Closing } from "@/components/Closing";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Modalities />
      <Reach />
      <Process />
      <Closing />
    </main>
  );
}
