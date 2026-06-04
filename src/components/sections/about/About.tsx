import { Section, Container } from "../../ui";
import { AboutIntro } from "./AboutIntro";
import { AboutSkills } from "./AboutSkills";

export function About() {
  return (
    <Section id="about" className="bg-gray-200">
      <Container className="py-16 md:py-20 flex flex-col lg:flex-row lg:items-start lg:gap-12">
        <AboutIntro />
        <AboutSkills />
      </Container>
    </Section>
  );
}
