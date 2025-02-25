import {useRef} from 'react'
import useIsVisible from "../util/useIsVisible";

const WorkHistory = () =>{
     /* Refs for animation*/ 
    const ref1 = useRef();
    const ref2 = useRef();
    
    const isVisible1 = useIsVisible(ref1);
    const isVisible2 = useIsVisible(ref2);
    
    //Work Experience Data
    const workExperiences = [
        {name:"SSE", position:"Subject Matter Expert" ,date:"Jan 2021 - Apr 2024", duration:"3 yrs 4 mos", desc: "Description"},
        {name:"US Navy", position:"Aviation Structural Mechanic" ,date:"Dec 2015 - Dec 2019", duration:"4 yrs", desc: "Description"},
        {name:"Intevalue Services Inc.", position:"Java Web Developer" ,date:"2012 - 2015 ", duration:"3 yrs", desc: "Description"},
        {name:"Manila Cordage Company", position:"PHP Web Developer (Intern)" ,date:"May 2011 - Jul 2011 ", duration:"3 mos", desc: "Description"},
        
    ];

    return (
        <section className="bg-gray-200 scroll-mt-20 pt-20" id="workhistory" >
            
            
                <div ref={ref1} className={  ` text-center relative  ${(isVisible1 ? "animate-fadeLeftToRight" : "opacity-0")} `}>
                    <h2 className="text-red-900 text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        My Work Experience
                    </h2>
                </div>
            
            <div ref={ref2} className={`relative ${(isVisible2 ? "animate-fadeLeftToRight" : "opacity-0")} `} >
                <ol  className={` lg:list-none sm:list-disc lg:grid lg:grid-cols-2 sm:flex sm:flex-col px-10  py-16 sm:py-20 items-center`}>  
                    
                {workExperiences.map((workExperience,index) => <WorkExperience key={index} index={index} name={workExperience.name} position={workExperience.position} date={workExperience.date} desc={workExperience.desc }   duration={workExperience.duration} />)}
                
            
                    {/* <li ref={ref2} className={ `lg:w-[40%] lg:mt-28 text-center  lg:text-leftrelative  ${(isVisible2 ? "animate-fadeLeftToRight" : "opacity-0")} `}>
                                <h4 className="text-left pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                                    Company Logo
                                </h4>
                                
                                <h4 className="text-left pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                                    Company Name 
                                </h4>
                                <h3 className="text-left pt-0 font-header text-xl font-medium text-gray-400 sm:text-2xl lg:text-3xl">
                                    Date
                                </h3>
                                <p className="text-left pt-6 px-10 font-body leading-relaxed text-gray-400 ">
                                I'm motivated software developer who has three years of professional web development experience and four years of military service in aviation maintenance. 
                                Efficient in learning new knowledge while maintaining attention to details. Equally capable of working alone or as a member of a team, 
                                and comfortable exercising initiative and adapting to situations effortlessly.
                                <br /><br/>
                                Enjoys exploring something new.
                                </p>
                    </li> */}

                </ol>
            </div>
                        
        </section>
    )
}

const WorkExperience = (props) =>{
   
    const isEven = props.index % 2 == 0;
    return (    
        <li className={ `px-10 border-red-900 lg:w-auto sm:w-1/2  border-l-4  text-left ${isEven ? 'lg:border-r-0 lg:text-right lg:border-0' : 'lg:border-l-4'} `}>
            <h4 className={`pt-6 ${isEven ? '' : 'lg:mt-56'} font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl`}>
                {props.logo || 'logo'} 
            </h4>
            
            <h4 className={`pt-0 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl`}>
                {props.name}
            </h4>
            <h4 className={`pt-0 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl`}>
                {props.position}
            </h4>
            <h3 className={` pt-0 font-header text-xl font-medium text-gray-400 sm:text-2xl lg:text-3xl`}>
                {props.date}
            </h3>
            <h3 className={` pt-0 font-header text-xl font-medium text-gray-400 sm:text-2xl lg:text-3xl`}>
                {`(${props.duration})`}
            </h3>
            <p className=" pt-6 px-10 font-body leading-relaxed text-gray-400 ">
                {props.desc}
            </p>
        </li> 

    )
}

export default WorkHistory;
