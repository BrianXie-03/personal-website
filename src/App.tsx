import { useState } from 'react'
import Navbar from "@/scenes/navbar";

enum SelectedPage {
  AboutMe = "aboutme",
  Experiences = "experiences",
  Skills = "skills",
  Projects = "Projects",
  Contacts= "contacts"

}


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutMe);
  return( 
    <div className="app bg-sky-300 bg-opacity-60">
      <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
    </div>
  );
}

export default App
