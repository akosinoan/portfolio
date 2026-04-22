import About from './About'
import Portfolio from './Portfolio';
import WorkHistory from './WorkHistory'
import Education from './Education'
import { useEffect, useState, useRef } from "react";




const MainComponent = () => {




    return (
        <main className='' >
           <About />
           <Portfolio />
            <WorkHistory />
            <Education />
        </main>
    )
}



export default MainComponent;