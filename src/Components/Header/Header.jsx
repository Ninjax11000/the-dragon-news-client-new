import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                
                <img style={{height: "3rem"}} src={logo} alt="" />
                
                
                <p className='text-secondary fs-4'>Journalism Without Fear or Favour</p>
                <p className='text-black fs-4'>{moment().format("dddd,")}<span className='text-secondary'>{moment().format(" MMMM D, YYYY")}</span></p>

            </div>
            <div className='d-flex align-items-center bg-secondary-subtle px-2 py-2  '>
                <div className='bg-danger mx-2 px-3 py-1 d-flex align-items-center '>
                    <p className='text-white fs-5 fw-normal my-1'>Latest</p>
                </div>
                <Marquee className='fs-5' pauseOnHover={true} speed={50} >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-white">
                <Container>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                        </Nav>
                        <Nav className='align-items-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Secondary</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;