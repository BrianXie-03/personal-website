import { useEffect, useInsertionEffect, useState } from 'react'
import Navbar from "@/scenes/navbar";
import Home from '@/scenes/home'
import { SelectedPage } from "@/shared/types"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.BrianXie);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.BrianXie);
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



    </div>
  );
}

export default App
