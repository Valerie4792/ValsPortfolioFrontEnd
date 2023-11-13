import React, { useState } from 'react';
import { Button, Col, Row, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';


const Nav1 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/Contact');
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <Row className='m-0 p-0'>
      <Col md={2} className='valerie'>
        <h1 className='valerie'>{'<VALERIE/>'}</h1>
      </Col>

      <Col className='d-flex justify-content-center'>
        <Navbar expanded={expanded} expand='md'>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse className='navMedia768' id='responsive-navbar-nav'>
            <Nav defaultActiveKey='/' as='ul' className='navMediaMargins'>
              <Nav.Item as='li'>
                <Nav.Link as={Link} to='/' className='navLinkColor'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={Link} to='/About' className='navLinkColor'>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={Link} to='/Projects' className='navLinkColor'>
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={Link} to='/Skills' className='navLinkColor'>
                  Skills
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col md={1} className='d-flex justify-content-end mx-2'>
        <Button onClick={handleClick} className='mt-3 navContactBtn'>
          Contact
        </Button>
      </Col>
      <div className='lineNav p-0 m-0 '></div>
    </Row>
  );
};

export default Nav1;
