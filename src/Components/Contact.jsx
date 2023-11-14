import React from 'react'
import {Button, Col, Row, Nav, Form,Container } from 'react-bootstrap'
import Nav1 from './Nav1'

const Contact = () => {
  return (
    <div className='containerContactBg'>
    <Nav1/>
  <Container className='m-5 p-5'>
    <Row>
      <Col>
      <h1 className='text-center m-5 contactTextColor' >Let's Connect & Create Something Great!</h1>
      <h3 className='text-center m-5 contactTextColor'>Tell me about your project</h3>
      <a href=""></a>

      
      </Col>
      <Col className='m-5'>
          <Form className="formContact">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contactTextColor'>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contactTextColor'>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contactTextColor'>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='contactTextColor'>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
   <Button className='submitContactBtn'>Submit</Button>
      </Col>
    </Row>

  </Container>
    
  
</div>
  
    
  )
}

export default Contact
