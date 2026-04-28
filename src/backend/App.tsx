import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { HowIThink } from "@/components/sections/HowIThink";
import { Timeline } from "@/components/sections/Timeline";
import { GitHubProof } from "@/components/sections/GitHubProof";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Projects />
        <TechStack />
        <HowIThink />
        <Timeline />
        <GitHubProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
