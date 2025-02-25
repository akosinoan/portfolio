import About from './About'
import Portfolio from './Portfolio';
import WorkHistory from './WorkHistory'
import { useEffect, useState, useRef } from "react";




const MainComponent = () => {
    


    
    return (
        <main className='' >
           <About />
           <Portfolio />
            <WorkHistory />  
        </main>
    )
}



export default MainComponent;