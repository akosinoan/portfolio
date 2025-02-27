import {useRef} from 'react'
import useIsVisible from "../util/useIsVisible";


const Portfolio = () =>{
   /* Refs for animation*/ 
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    

    return(
        <section className="scroll-mt-20 py-16 md:py-20 mx-[10%] lg:mx-[20%]"  id="portfolio">
            <div ref={ref1} className={ ` relative  ${(isVisible1 ? "animate-fadeIn" : "opacity-0")} `}>
                <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl bg-gradient-to-b from-red-900 via-red-800 to-red-300 text-transparent bg-clip-text ">
                    Check out my Portfolio
                </h2>
                <h3 className="pt-6 font-header text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    Here are my previous Projects
                </h3>
            </div>
          
            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            
                <Project name="Barista Coffee Beans - Static Web Page" href="https://www.baristacoffeebeans.com/" imgsrc="./baristascreenshot.png" technologies={["NextJS","React","Bootstrap","CSS"]} />
                <Project name="One Source Marketing Services - Static Web Page" href="https://onesource-pied.vercel.app/" imgsrc="./onesource.png" technologies={["NextJS","React","Shadcn","TailwindCSS"]} />
{/*                
                <Project name="Barista Coffee Beans - Static Web Page" href="https://www.baristacoffeebeans.com/" imgsrc="./baristascreenshot.png" technologies={["NextJS","React","Bootstrap","CSS"]} />
                
                <Project name="Barista Coffee Beans - Static Web Page" href="https://www.baristacoffeebeans.com/" imgsrc="./baristascreenshot.png" technologies={["NextJS","React","Bootstrap","CSS"]} />
                
                <Project name="Barista Coffee Beans - Static Web Page" href="https://www.baristacoffeebeans.com/" imgsrc="./baristascreenshot.png" technologies={["NextJS","React","Bootstrap","CSS"]} /> */
}

           
            </div>
            
        </section>
    )
}

const Project = (props) =>{
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return ( 
    <>
         <div ref={ref} className={ ` relative  ${(isVisible ? "animate-fadeIn" : "opacity-0")} `}>
            <div className="mx-auto transform transition-all hover:scale-105 md:mx-0 py-2">          
                <a href={props.href} target="_blank" >
                    <h3 className="font-bold bg-gradient-to-b from-red-900 via-red-600 to-red-300 text-transparent bg-clip-text sm:text-md lg:text-lg">{props.name}</h3>
                    <img src={props.imgsrc} className="w-full h-96 border-4 rounded-lg  shadow-2xl z-10" alt={props.name} />
                </a>
                <div className="pt-4 flex flex-col">
                    <h4 className="font-medium sm:text-md lg:text-lg bg-gradient-to-b from-red-950 via-red-700 to-red-300 text-transparent bg-clip-text">
                        Technologies used:
                    </h4>
                    <ul className="flex">
                        <TechnologyList technologies={props.technologies} />
                    </ul>
                </div>
                
            </div>
        </div>
        
        
        <hr className="lg:hidden"/>
    </>
    )
}

const TechnologyList = (props) =>{
    const technologyList = {
        "NextJS":{name:"NextJS", href:"https://nextjs.org/", imgsrc:"./nextjs_logo.png"},
        "React":{name:"React", href:"https://react.dev/", imgsrc:"./reactjs_logo.png"},              
        "Bootstrap":{name:"Bootstrap", href:"https://getbootstrap.com/", imgsrc:"./bootstrap_logo.png"},
        "CSS":{name:"CSS", href:"https://www.w3.org/Style/CSS/Overview.en.html",  imgsrc:"./w3_css-official.svg"},
        "Shadcn":{name:"Shadcn", href:"https://ui.shadcn.com/",  imgsrc:"./shadcn_logo.png"},
        "TailwindCSS":{name:"TailwindCSS", href:"https://tailwindcss.com/",  imgsrc:"./tailwindcss.svg"} ,
    
}
    
    return(
        <>
           {props.technologies.map((tech,index) => <Technology key={index} name={tech} href={technologyList[tech] ? technologyList[tech].href : "/"} imgsrc={technologyList[tech] ? technologyList[tech].imgsrc : ""} />)}    
        </>
    )
}

const Technology = (props) =>{
    return (
        <>
        <li className="px-2 group"><a href={props.href} target="_blank"><img className={"h-5 w-5"} src={props.imgsrc} alt={props.name}/> <span className="group-hover:visible absolute text-xs invisible  border-2 border-gray-300 rounded-3xl p-2 bg-red-900 text-white ">{props.name}</span></a></li>
        
        </>
    )
}


export default Portfolio;
