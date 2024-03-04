import { useState } from "react";

const Header = () =>{
   
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    
    return (
        <header className='relative'>
            <div className="duration-75 transition"></div>
            <div className="absolute h-full w-full -z-50">
                <img src="./yosemite.jpg" className=" h-full w-full " alt="yosemite-background" />

            </div>
      
            <nav className="flex justify-between items-center h-20 bg-red-950 text-white bg-opacity-90">
                <div className="px-5">Logo</div>    
               
                <section className="MOBILE-MENU  lg:hidden">
                    <button
                        className="HAMBURGER-ICON space-y-2 mr-10 block pb-2 rounded-lg border-2 animate-pulse"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                            <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 m-2 w-8 animate-pulse bg-white"></span>
                    </button>

                    <div className={ "flex flex-col ease-in transition-[height]  duration-300 justify-evenly items-center absolute w-1/2 border-white top-0 left-[45%] z-50 bg-red-950 rounded-b-3xl border-2 shadow-xl" +
                        (isNavOpen ? " h-[30%]" : " overflow-hidden h-0 w-0 absolute -top-10") }>
                        <div
                            className="ml-24 flex-initial flex-row justify-end justify-self-end items-end cursor-pointer rounded-lg border-white border-2 animate-pulse"
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
                        <ul className="flex flex-col items-center justify-self-center w-full">
                            <NavLinks />
                        </ul>
                    </div>
                </section>
                <ul className=" hidden lg:flex justify-self-end items-center cursor-pointer ">
                    
                    <NavLinks />
                </ul>  
            </nav>

            <div className=" bg-red-950 bg-opacity-80 ">
                
                <div className=" relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="rounded-full border-8 shadow-xl">
                        <img src="./profpic2.jpg" className=" h-48 w-48 rounded-full sm:h-48" alt="author" />
                        </div>
                        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 className="text-center font-serif text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                            Hello I'm
                        </h1>
                        <h1 className="text-center font-serif text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                            Noel Angelo Babao!
                        </h1>
                        <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                                <p className="font-serif text-lg uppercase text-white">Let's connect!</p>
                            </div>
                            
                            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                
                                <ContactLink href="mailto:noanworks@gmail.com" imgSrc="./gmail_logo.png"/>
                                <ContactLink href="https://www.linkedin.com/in/noanbabao/" imgSrc="./linkedIn_logo.png"/>
                                <ContactLink href="https://www.instagram.com/nowander" imgSrc="./Instagram_logo.png"/>
                                <ContactLink href="https://www.facebook.com/Akosinoan/" imgSrc="./fb_logo.png"/>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

const NavLinks = (props) =>{

    const links = [
        {name:"About",href:"#about"},
        {name:"Past Projects",href:"#about"},
        {name:"Work History",href:"#about"},
        {name:"Contact",href:"#about"}
    
    ]
    return (
        <>
            {links.map((link,index) => <NavLink key={index} name={link.name} href={link.href} />)}
        </>
    )
}

const NavLink = (props) =>{

    return (
        <li className="group pr-5">
            <span className=" group-hover:text-yellow-200 active:text-yellow-200"> <a href={props.href}>{props.name}</a></span>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-200 active:bg-yellow-200"></span>
        </li>
    )
}

const ContactLink = (props) => {
    return (
        <button className=" p-2 inline-flex items-center space-x-2 rounded">
            <a href={props.href} target="_blank" ><img  src={props.imgSrc} /></a>
        </button>
    )
}

export default Header