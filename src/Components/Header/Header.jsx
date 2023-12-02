import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
           
        </Container>
    );
};

export default Header;