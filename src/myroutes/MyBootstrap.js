import React from 'react'
import { Button, Card, Carousel, Col, Container, Nav, Navbar,NavDropdown, Row, } from "react-bootstrap";

export default function MyBootstrap() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
      <Container>
        
        {/* <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand> */}
        <Navbar.Brand href="#home">
            <img
              src="/images/classphoto.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top rounded-pill"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <Carousel fade slide={false}> */}
    <Carousel variant="primary">
        <Carousel.Item interval={1000}>
            <img src="images/classphoto.jpg" height="300px" className="d-block w-100"></img>
            <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
            <img src="images/kb.jpg" height="300px" className="d-block w-100"></img>
            <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
            <img src="images/l2.jpg" height="300px" className="d-block w-100"></img>
            <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
    </Carousel>

   <Row>
    <Col md={4}>
    <Card >
        
      <Card.Img variant="top" src="images/osama.png" />
      <Card.ImgOverlay style={{ marginTop: '50px' }}>
        <Card.Title className="text-light"> Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Link</Card.Link>
        <Button variant="primary">Go somewhere</Button>
        </Card.ImgOverlay>
    </Card>
    </Col>
   </Row>
    </div>
  )
}
