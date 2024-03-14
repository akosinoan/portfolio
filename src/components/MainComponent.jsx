import About from './About'
import Portfolio from './Portfolio';
import { useEffect, useState, useRef } from "react";
import WiggleButton from './WiggleButton';



const MainComponent = () => {
    


    
    return (
        <main className='' >
                
            
           <About />
           <Portfolio />
            
            <WiggleButton/>
          
        </main>
    )
}



export default MainComponent;