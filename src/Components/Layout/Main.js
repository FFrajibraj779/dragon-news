import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import LeftsideNav from '../LeftsideNav/LeftsideNav'

const Main = () => {
    return (
        <div>
            <Header></Header>
        <Container>
            <Row>
                <Col lg='2'className='d-none d-lg-block'>
                <LeftsideNav></LeftsideNav>
                </Col>
                <Col lg='7'>
                <Outlet></Outlet>
                </Col>
                <Col lg='3'><RightSideNav></RightSideNav></Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;