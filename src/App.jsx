import React from 'react';

import Head from "./componants/Head"
import Hello from './componants/Hello';
import Imgs from './componants/imgs';
import Infos from './componants/infos';
import Why from './componants/Why';
import Way from './componants/Way';
import Servises from './componants/servises';
import Solution from './componants/Solution';
import Phone from './componants/phone';
import Meet from './componants/Meet';
import Clients from './componants/Clients';
import Drivers from './componants/drivers';
import Contacts from './componants/Contacts';
import Message from './componants/Message';
import Footer from './componants/Footer';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Head/> {/* {"👀"} */}
      <Row className='d-flex bg flex-wrap'>
          <Hello/>
          <Imgs/>
      </Row>
      <Row className='d-lg-flex flex-wrap flex-row-reverse'> {/* {"👀"} */}
        <Col className='d-flex flex-wrap' lg={7}>
          <Infos/>
          <Why/>
        </Col>
        <Col lg={4}>
          <Way />
        </Col>
      </Row>
      <Servises/> {/* {"👀"} */}
      <Container>
        <Row className='d-lg-flex flex-wrap'>
          <Col lg={4}>
            <Solution/>
          </Col>
          <Col>
            <Phone/>
          </Col>
        </Row>
      </Container>
      <Meet/> {/* {"👀"} */}
      <Clients/> {/* {"👀"} */}
      <Drivers/> {/* {"👀"} */}
      <Container> {/* {"👀....."} */}
        <Row>
          <Col lg={7}>
            <Contacts/>
          </Col>
          <Col lg={5}>
            <Message/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App
