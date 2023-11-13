import React from 'react'

import Nav1 from "./Nav1";
import {Button, Col, Row, Nav, Image, Container} from 'react-bootstrap'
import FloatingIcons from './floatingIcons';



const Skills = () => {


  return (
    <div className='containerSkillsBg'>
    <Container>
    <Nav1/>
    <Container className='FloatingIconsContain'>
        <FloatingIcons/>
        </Container>
      
       
        
    </Container>

</div>
   
  )
}

export default Skills
