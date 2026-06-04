import { Nav, Footer } from "@/components/layout";
import {
  FinalCTA,
  GitHubProof,
  Hero,
  HowIThink,
  Projects,
  TechStack,
  Timeline,
  TrustBar,
} from "@/components/sections";

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
