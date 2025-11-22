import React from 'react'
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import BlurBlob from './components/BlurBlob';

function App() {
  return (
    <div  className="bg-[#050414]">

     <BlurBlob position={{ top: '40%', left: '30%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className='relative pt-20'>
          <NavBar></NavBar>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Work></Work>
          <Education></Education>
          <Contact></Contact>
        </div>
    </div>
  )
}

export default App
