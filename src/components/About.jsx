import {useRef} from 'react'
import useIsVisible from "../util/useIsVisible";

const About = () =>{
     /* Refs for animation*/ 
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);
    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

    return (
        <section className="bg-gray-200 scroll-mt-20" id="about">
            

            <div className=" flex flex-col mx-10  py-16 md:py-20 lg:flex-row items-center lg:justify-center ">
                <div className=" lg:w-[40%] text-center  lg:text-left">
                
                    <div ref={ref1} className={ `relative  ${(isVisible1 ? "animate-fadeLeftToRight" : "opacity-0")} `}>
                        <h2 className=" text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text inline-block ">
                            Who am I?
                        </h2>
                        <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                            I'm Noel Angelo Babao, <br/> a Web Developer & U.S. Navy Veteran
                        </h4>
                    </div>
                    <div ref={ref2} className={ `relative  ${(isVisible2 ? "animate-fadeLeftToRight" : "opacity-0")} `}>
                        <p className="pt-6 font-body leading-relaxed text-gray-400 ">
                        I'm motivated software developer who has three years of professional web development experience and four years of military service in aviation maintenance. 
                        Efficient in learning new knowledge while maintaining attention to details. Equally capable of working alone or as a member of a team, 
                        and comfortable exercising initiative and adapting to situations effortlessly.
                        <br /><br/>
                        Enjoys exploring something new.
                        </p>
                        
                    </div>
                </div> 
                <div className=" pl-0 pt-10 w-[50%] lg:w-[20%] lg:pl-12 lg:pt-0">
                    <div ref={ref3} className={ `relative  ${(isVisible3 ? "lg:animate-fadeRightToLeft animate-fadeLeftToRight" : "opacity-0")} `}>
                        <h4 className="pt-6 font-header text-center text-xl font-medium sm:text-2xl lg:text-3xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text  ">
                            Skills
                        </h4>
                        <SkillDisplay skillName="HTML & CSS" skillPercentage="80" />
                        <SkillDisplay skillName="Javascript" skillPercentage="85"/>
                        <SkillDisplay skillName="ReactJS" skillPercentage="65"/>
                        <SkillDisplay skillName="Java" skillPercentage="55"/>
                        <SkillDisplay skillName="C" skillPercentage="40" />
                        <SkillDisplay skillName="PHP" skillPercentage="30" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const SkillDisplay = (props) =>{
    if(!props){
        props.skillPercentage="0%";
    }
    return (    
        <div>
            <div className="flex items-end justify-between">
            <h4 className=" font-semibold  text-black">
               {props.skillName}
            </h4>
            <h3 className=" text-3xl font-bold text-primary">{props.skillPercentage}%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-gray-300">
            <div className={`h-3 rounded-full bg-red-900 bg-gradient-to-r from-red-950 via-red-800 to-red-300 text-transparent `} style={{width: props.skillPercentage + `%`}}></div>
            </div>
        </div>

    )
}

export default About;
