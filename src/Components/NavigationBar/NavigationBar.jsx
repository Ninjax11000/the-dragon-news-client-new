import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
            logOut()
            .then(()=>{
                alert('logout successfull!!!!');
            })
            .catch(error=>console.log(error.message))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-white">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link to='/'>Home</Link>

                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='align-items-center'>
                            {user ?
                                <>
                                    <Nav.Link href="#deets">{user.displayName}</Nav.Link>

                                    <Button onClick={handleLogOut} variant="secondary">LogOut</Button>
                                </>
                                :
                                <>
                                 <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;