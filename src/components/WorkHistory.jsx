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
        {name:"SSE", position:"Subject Matter Expert" ,date:"2021 - 2024", duration:"3 yrs 4 mos", desc: "Description" , imgSrc:"./sse_logo.jpeg"},
        {name:"US Navy", position:"Aviation Structural Mechanic" ,date:"2015 - 2019", duration:"4 yrs", desc: "Description",imgSrc:"./us_navy_logo.jpeg"},
        {name:"Intevalue Services Inc.", position:"Java Web Developer" ,date:"2012 - 2015 ", duration:"3 yrs", desc: "Description", imgSrc:"intevalue.jpeg"},
        {name:"Manila Cordage Company", position:"PHP Web Developer (Intern)" ,date:"2011", duration:"3 mos", desc: "Description"},
        
    ];

    return (
        <section className="px-10 scroll-mt-20 bg-gray-200 pt-20 " id="workhistory" >
            
            
                <div ref={ref1} className={  `text-center   ${(isVisible1 ? "animate-fadeLeftToRight" : "opacity-0")} `}>
                    <h2 className="bg-gradient-to-b from-red-900 via-red-700 to-red-300 text-transparent bg-clip-text inline-block  text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Work Experience
                    </h2>
                </div>
            
            <div ref={ref2} className={` relative ${(isVisible2 ? "animate-fadeLeftToRight" : "opacity-0")} `} >
                
                <ol  className={` w-full lg:list-none list-disc lg:grid lg:grid-cols-2 sm:flex sm:flex-col  py-16 sm:py-20 items-center`}>  
                    
                {workExperiences.map((workExperience,index) => <WorkExperience key={index} imgSrc={workExperience.imgSrc} index={index} name={workExperience.name} position={workExperience.position} date={workExperience.date} desc={workExperience.desc }   duration={workExperience.duration} />)}
                
            
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
        <>
        <li className={ `border-red-900 lg:w-auto w-full  lg:bg-inherit border-l-4  text-left ${isEven ? 'lg:border-r-0 lg:text-right lg:border-0 bg-gray-100' : 'lg:border-l-4 '} `}>
            <div className={`lg:flex lg:flex-row`}>
            
            {!isEven ? <div className={"hidden lg:flex pt-10 mt-56 text-4xl italic font-extrabold text-red-900 "}> {`<<`} </div>  :''}
                
                <div className={`px-4 w-full`}>
                    <div className={`lg:flex ${isEven ? ' lg:flex-row-reverse ' : ' lg:mt-56'} `}>
                        
                        <h4 className={` relative  pt-6  font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl`}>
                            <span className={``}> 
                                <img src={props.imgSrc || `noanworks.svg`} className= {`h-20 w-20 rounded-full sm:h-20 ${!props.imgSrc? 'opacity-10 ':''}`}  alt={ `logo` } /> 
                                {!props.imgSrc ? <div className={`absolute left-1 top-[50%] text-xs bg-white`} > Not available </div> : ''}
                            </span>
                        </h4>
                        
                        <div className={`lg:px-1 lg:pt-8`}>
                            <h4 className={`pt-0 font-header text-xl font-medium bg-gradient-to-b from-red-900 via-red-700 to-red-300 text-transparent bg-clip-text sm:text-2xl lg:text-3xl`}>
                                {props.name}
                            </h4>
                            
                            <h4 className={`italic pt-0 font-header text-sm font-medium bg-gradient-to-b from-red-900 via-red-700 to-red-300 text-transparent bg-clip-text leading-relaxed`}>
                                {props.position}
                            </h4>
                        </div>
                        
                    </div>
                 
                    <h3 className={` pt-0 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl`}>
                            {props.date}
                        </h3>
                        <h3 className={` pt-0 font-header font-medium text-gray-400 leading-relaxed`}>
                            {`(${props.duration})`}
                        </h3>
                    <p className=" pt-6 px-10 font-body leading-relaxed text-gray-400 ">
                        {props.desc}
                    </p>
                </div>
                {isEven ?  <div className={`hidden lg:flex px-2 mt-10 text-right w-14 text-4xl italic font-extrabold text-red-900`}> {`>>`}</div> : ''}
            </div>
        </li> 
        
        </>
    )
}

export default WorkHistory;
