import React from 'react';
import Header from '../../Components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Components/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../../Components/RightNav/RightNav';
import Footer from '../../Components/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                   
                    <Col lg={9} >

                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3} >

                        <RightNav></RightNav>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;