import { useState, useEffect, createContext, useContext } from "react";
export const ActiveNavContext = createContext();

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Past Projects", id: "portfolio" },
  { name: "Work Experience", id: "workhistory" },
];

function scrollTo(id) {
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useContext(ActiveNavContext);

  const handleScroll = () => {
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.y <= 100 && bounding.y > -(bounding.height / 3)) {
          setActiveNav(link.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveNav(id);
    setIsOpen(false);
    scrollTo(id);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav className="flex justify-between items-center h-16 bg-red-950 text-white px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="./noanworks.svg" className="h-10 w-10" alt="logo" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              link={link}
              activeNav={activeNav}
              onClick={() => handleLinkClick(link.id)}
            />
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 border-t border-red-800 bg-red-950 px-6 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left px-3 py-2.5 rounded-md text-sm transition-colors hover:bg-red-800 ${
                activeNav === link.id ? "text-yellow-200" : "text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavLink = ({ link, activeNav, onClick }) => {
  return (
    <li className="group pr-2">
      <button
        onClick={onClick}
        className={`px-4 py-2 text-sm rounded-md transition-colors hover:text-yellow-200 ${
          activeNav === link.id ? "text-yellow-200" : "text-white"
        }`}
      >
        {link.name}
      </button>
      <span
        className={`block h-0.5 w-full bg-transparent group-hover:bg-yellow-200 ${
          activeNav === link.id ? "bg-yellow-200" : ""
        }`}
      ></span>
    </li>
  );
};

export default NavBar;
