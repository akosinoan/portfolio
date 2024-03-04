const Portfolio = () =>{
    return(
        <div className=" py-16 md:py-20 mx-[10%] lg:mx-[20%]"  id="portfolio">
            <h2 className="text-red-900 text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
            </h2>
            <h3 className="pt-6 font-header text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here are projects I have done in the past
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <a href="https://www.baristacoffeebeans.com/" target="_blank" >
                        <img src="./baristascreenshot.png" className="w-full lg:h-[70%] shadow" alt="portfolio image" />
                        
                    </a>
                    <div className="flex flex-col">
                    <h4 className=" font-header  font-medium text-red-900 sm:text-md lg:text-lg">
                        Technologies used:
                    </h4>
                            <ul className="flex">
                                <TechnologyList technologies={["NextJS","React","Bootstrap","CSS"]} />
                                
                            </ul>
                        </div>
                </div>
                <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <img src="./yosemite.jpg" className="w-full shadow" alt="portfolio image" />
                </a>
                <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <img src="./yosemite.jpg" className="w-full shadow" alt="portfolio image" />
                </a>
                <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <img src="./yosemite.jpg" className="w-full shadow" alt="portfolio image" />
                </a>
            </div>
        </div>
    )
}

const TechnologyList = (props) =>{
    const technologyList = {
        "NextJS":{name:"NextJS", href:"https://nextjs.org/", imgsrc:"./nextjs_logo.png"},
        "React":{name:"React", href:"https://react.dev/", imgsrc:"./reactjs_logo.png"},              
        "Bootstrap":{name:"Bootstrap", href:"https://getbootstrap.com/", imgsrc:"./bootstrap_logo.png"},  
    }
    
    return(
        <>
           {props.technologies.map((tech,index) => <Technology key={index} name={tech} href={technologyList[tech] ? technologyList[tech].href : "/"} imgsrc={technologyList[tech] ? technologyList[tech].imgsrc : ""} />)}    
        </>
    )
}

const Technology = (props) =>{
    return (
        <li className="px-2 group"><a href={props.href} target="_blank"><img src={props.imgsrc} alt={props.name}/> <span className="group-hover:visible absolute text-xs invisible border-2 border-gray-300 rounded-3xl p-2 bg-red-900 text-white ">{props.name}</span></a></li>
    )
}


export default Portfolio;
