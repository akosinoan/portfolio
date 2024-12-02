import './css/App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'
import { useState, useRef, useEffect,createContext,useContext} from "react";
import { ActiveNavContext } from './components/NavBar';
const App =() =>{
  const [activeNav , setActiveNav]=useState('Home');
    
  return (
    <div className='max-h flex flex-col'>
      <ActiveNavContext.Provider value={[activeNav , setActiveNav]}  >
        <Header />
        <MainComponent />
        <Footer />
        
        
      </ActiveNavContext.Provider>
      
    </div>
  )
}

export default App
