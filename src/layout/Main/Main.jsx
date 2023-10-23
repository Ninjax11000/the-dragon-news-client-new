import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Components/LeftNav/LeftNav';
import RightNav from '../../Components/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3}  >

                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6} >

                        <h2>main content is comming</h2>
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

export default Main;