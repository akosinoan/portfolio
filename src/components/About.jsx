const About = () =>{
    return (
        <section className="bg-gray-200" id="about">
            

            <div className=" flex flex-col mx-10  py-16 md:py-20 lg:flex-row items-center lg:justify-center ">
                <div className=" lg:w-[40%] text-center  lg:text-left">
                    <h2 className="text-red-900 text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Who am I?
                    </h2>
                    <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        I'm Noel Angelo Babao, <br/> a Web Developer & U.S. Navy Veteran
                    </h4>
                    <p className="pt-6 font-body leading-relaxed text-gray-400 ">
                    I'm motivated software developer who has three years of professional web development experience and four years of military service in aviation maintenance. 
                    Efficient in learning new knowledge while maintaining attention to details. Equally capable of working alone or as a member of a team, 
                    and comfortable exercising initiative and adapting to situations effortlessly.
                    <br /><br/>
                    Enjoys exploring something new.
                    </p>
                    
                    
                </div> 
                <div className=" pl-0 pt-10 w-[50%] lg:w-[20%] lg:pl-12 lg:pt-0">
                    <h4 className="pt-6 font-header text-center text-xl font-medium text-red-900 sm:text-2xl lg:text-3xl">
                        Skills
                    </h4>
                    <SkillDisplay skillName="HTML & CSS" skillPercentage="80" />
                    <SkillDisplay skillName="Javascript" skillPercentage="85"/>
                    <SkillDisplay skillName="ReactJS" skillPercentage="65"/>
                    <SkillDisplay skillName="Java" skillPercentage="55"/>
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
            <div className={`h-3 rounded-full bg-red-900`} style={{width: props.skillPercentage + `%`}}></div>
            </div>
        </div>

    )
}

export default About;
