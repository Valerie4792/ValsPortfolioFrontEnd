import React from 'react'
import {Button, Col, Row, Nav,} from 'react-bootstrap'
import { useNavigate, Link} from 'react-router-dom'



const Nav1 = () => {
  let navigate= useNavigate()
  const handleClick= () =>{
    navigate('/Contact')
  }

  return (
    <Row className='m-0 p-0'>   
   
   <Col md={2} className= 'd-flex justify-content-start'>
       <h1 className='valerie'>{'<VALERIE/>'}</h1>
    </Col >
     

    <Col className= 'd-flex justify-content-center'>
     <Nav defaultActiveKey="/" as="ul" className='mt-4'> 
     
     

    <Nav.Item as="li">
        <Nav.Link as={Link} to='/' className='navLinkColor'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to='/About' className='navLinkColor'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to='/Projects'className='navLinkColor'>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to='/Skills' className='navLinkColor'>Skills</Nav.Link>
      </Nav.Item>
       
    
    </Nav></Col>
    <Col md={1} className='d-flex justify-content-end mx-2'>
        <Button onClick={handleClick} className='mt-3 navContactBtn'>Contact</Button>
    </Col>
 <div className="lineNav p-0 m-0 "></div>
 
  
    
   
  
</Row>
  )
}

export default Nav1
