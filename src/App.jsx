import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home1 from './Components/Home1'
import Nav1 from './Components/Nav1'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact';





function App() {
  const [count, setCount] = useState(0)

  return (
     
<BrowserRouter>
   <Routes>
   <Route path="/" element={<Home1/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/Projects" element={<Projects/>}/>
   <Route path="/Skills" element={<Skills/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   </Routes>
</BrowserRouter>



  
    
  )
}

export default App
