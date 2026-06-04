import { useState } from "react";
import { ActiveNavContext } from "./context/ActiveNavContext";
import { Header, Footer } from "./components/layout";
import { About, Portfolio, WorkHistory, Education } from "./components/sections";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="min-h-screen flex flex-col">
      <ActiveNavContext.Provider value={[activeNav, setActiveNav]}>
        <Header />
        <main>
          <About />
          <Portfolio />
          <WorkHistory />
          <Education />
        </main>
        <Footer />
      </ActiveNavContext.Provider>
    </div>
  );
}
