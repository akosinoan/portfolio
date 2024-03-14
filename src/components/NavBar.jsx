import { useState, useRef, useEffect,createContext,useContext} from "react";
export const ActiveNavContext = createContext();

const NavOpenContext = createContext(false);

const NavBar = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    const [activeNav,setActiveNav] = useContext(ActiveNavContext);  
    
    const links = [
        {name:"About",id:"about",},
        {name:"Past Projects",id:"portfolio", },
        {name:"Work History",id:"home"},
        {name:"Contact",id:"home"}
    ];

    const handleScroll= (e) =>{  
        links.map((link)=>{
            const element = document.getElementById(link.id) ;  
            if(element){
                const bounding = element.getBoundingClientRect();
                if( bounding.y <=100 && bounding.y>(-bounding.height/3)){
                return setActiveNav(link.id);
                }
            }
        })
  
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[])
    
    
    return (
        
            <div className="fixed top-0 z-50 w-full">
            <NavOpenContext.Provider value={[isNavOpen,setIsNavOpen]} >
            <nav className="flex justify-between items-center h-20 bg-red-950 text-white">
                <div className="px-5" ><a href="#home">Logo</a> </div>    
                
                
                    <section className="MOBILE-MENU  lg:hidden">
                        <button
                            className="HAMBURGER-ICON space-y-2 mr-10 block pb-2 rounded-lg border-2 animate-pulse"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                                <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                                <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                                <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                        </button>

                        <div id="mobile-nav" className={ "flex flex-col w-1/2 py-4 ease-in transition-all duration-300 delay-75 justify-evenly items-center absolute  border-white  z-50  bg-red-950 rounded-b-3xl border-2 shadow-xl" +
                            (isNavOpen ? " z-50 top-0 left-[55%] opacity-100" : "invisible -z-50 -top-10 left-[100%] opacity-0") }>
                            <div
                                className="ml-24  cursor-pointer rounded-lg border-white border-2 animate-pulse"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-white"
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
                            </div>
                            <ul className="flex flex-col items-center  w-full">
                                <NavLinks links={links}  />
                            </ul>
                        </div>
                    </section>
                    <ul className=" hidden lg:flex justify-self-end items-center cursor-pointer ">
                        <NavLinks links={links} />
                    </ul>
                
            </nav>
            </NavOpenContext.Provider>
        </div>
    
    )
}

const NavLinks = (props) =>{
   const links = props.links;
    
    return (
        <> 
            {links.map((link,index) => <NavLink key={index} name={link.name} id={link.id} href={`#${link.id}`} />)}
        </>
    )
}

const NavLink = (props) =>{
    const [activeNav,setActiveNav] = useContext(ActiveNavContext); 
    const [isNavOpen, setIsNavOpen] = useContext(NavOpenContext); 
    const handleNavClick = (e,id) =>{
        const classList = document.getElementById("mobile-nav").classList
        //classList.add("invisible")
        setIsNavOpen(false)
        setActiveNav(id);
    }
    return (
        
            <li className={` ${activeNav} group pr-5`}>
                <span className={`${activeNav===props.id?"text-yellow-200":""} group-hover:text-yellow-200`}> 
                    <a href={props.href} onClick={(e)=>handleNavClick(e,props.id)}>{props.name}</a>
                </span>
                <span className={`${activeNav===props.id?"bg-yellow-200":""} block h-0.5 w-full bg-transparent group-hover:bg-yellow-200`}></span>
            </li>
        
    )
}

export default NavBar;