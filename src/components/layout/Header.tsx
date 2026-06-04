import profPic from "../../assets/profpic2.jpg";
import yosemiteBg from "../../assets/yosemite.jpg";
import { NavBar } from "./NavBar";
import { socials } from "../../data/socials";
import { site } from "../../data/site";
import type { Social } from "../../types";

export function Header() {
  return (
    <header id="home">
      <NavBar />

      <div className="mt-16 bg-red-950 bg-opacity-80 relative">
        <div className="absolute h-full w-full -z-50">
          <img
            src={yosemiteBg}
            className=" h-full w-full "
            alt="yosemite-background"
          />
        </div>
        <div className=" relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-4 sm:border-8 shadow-xl">
              <img
                src={profPic}
                className="h-32 w-32 sm:h-48 sm:w-48 rounded-full"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-serif text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                {site.hero.greeting}
              </h1>
              <h1 className="text-center font-serif text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                {site.hero.name}
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-serif text-lg uppercase text-white">
                    {site.hero.connect}
                  </p>
                </div>

                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  {socials.map((social) => (
                    <ContactLink key={social.label} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContactLink({ social }: { social: Social }) {
  return (
    <button className=" p-2 inline-flex items-center space-x-2 rounded">
      <a href={social.href} target="_blank" rel="noopener noreferrer">
        <img src={social.imgSrc} className="h-8 w-8" alt={social.label} />
      </a>
    </button>
  );
}
