import React from 'react'
import {Button, Col, Row, Nav, Form,Container } from 'react-bootstrap'
import Nav1 from './Nav1'

const Contact = () => {
  return (
    <>
    <Nav1/>
  <Container className='m-5 p-5'>
    <Row>
      <Col>
      <h1 className='text-center m-5'>Let's Connect & Create Something Great!</h1>
      <h3 className='text-center m-5'>Tell me about your project</h3>
      <a href=""></a>

      
      </Col>
      <Col className='m-5'>
          <Form className="formContact">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
   <Button>Submit</Button>
      </Col>
    </Row>

  </Container>
    
  
</>
  
    
  )
}

export default Contact
