import { useEffect, useState } from 'react'
import Navbar from "@/scenes/navbar";
import Home from '@/scenes/home'
import Experiences from '@/scenes/experiences'
import { SelectedPage } from "@/shared/types"
import Skills from './scenes/skills';
import Projects from './scenes/projects'
import ContactUs from './scenes/contact'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutMe);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  }, [])

  return( 
    <div className="app bg-mint">
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <Home setSelectedPage = {setSelectedPage} />
      <Experiences setSelectedPage = {setSelectedPage} />
      <Skills setSelectedPage = {setSelectedPage} />
      <Projects setSelectedPage = {setSelectedPage} />
      <ContactUs setSelectedPage = {setSelectedPage} />
    </div>
  );
}

export default App
