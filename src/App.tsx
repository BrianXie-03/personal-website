import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "@/scenes/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("About Me")
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
