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
const [currentPage, setCurrentPage] = useState('home')

  return (
     
<BrowserRouter>
   <Routes>
   <Route path="/" element={<Home1 onPageChange={() => handlePageChange('home')}/>}/>
   <Route path="/About" element={<About onPageChange={() => handlePageChange('about')}/>}/>
   <Route path="/Projects" element={<Projects onPageChange={() => handlePageChange('projects')}/>}/>
   <Route path="/Skills" element={<Skills onPageChange={() => handlePageChange('skills')}/>}/>
   <Route path="/Contact" element={<Contact onPageChange={() => handlePageChange('contact')}/>}/>
   </Routes>
</BrowserRouter>



  
    
  )
}

export default App
