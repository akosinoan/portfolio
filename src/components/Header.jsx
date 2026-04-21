
import NavBar from './NavBar'
import profPic from '../assets/profpic2.jpg'
import yosemiteBg from '../assets/yosemite.jpg'

const Header = () =>{
   
    
    return (
        
        <header id="home" >
            
            <NavBar />

            <div className="mt-16 bg-red-950 bg-opacity-80 relative">
                <div className="absolute h-full w-full -z-50">
                        <img src={yosemiteBg} className=" h-full w-full " alt="yosemite-background" />

                    </div>
                <div className=" relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="rounded-full border-4 sm:border-8 shadow-xl">
                        <img src={profPic} className="h-32 w-32 sm:h-48 sm:w-48 rounded-full" alt="author" />
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



const ContactLink = (props) => {
    return (
        <button className=" p-2 inline-flex items-center space-x-2 rounded">
            <a href={props.href} target="_blank" ><img src={props.imgSrc} className="h-8 w-8" /></a>
        </button>
    )
}

export default Header