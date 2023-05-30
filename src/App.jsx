import React from "react";

import Head from "./componants/Head";
import Hello from "./componants/Hello";
import Imgs from "./componants/imgs";
import Infos from "./componants/infos";
import Why from "./componants/Why";
import Way from "./componants/Way";
import Servises from "./componants/servises";
import Solution from "./componants/Solution";
import Phone from "./componants/phone";
import Meet from "./componants/Meet";
import Clients from "./componants/Clients";
import Drivers from "./componants/drivers";
import Contacts from "./componants/Contacts";
import Message from "./componants/Message";
import Footer from "./componants/Footer";
import { Col, Container, Row, Stack } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#FCF3F4" }}>
        <Container >

          <Head /> {/* {"👀"} */}
        </Container>
      </Container>
      <Container fluid className="bg">
        <Container fluid="lg">
          <Row className="   first__section pt-5">
            <Col className="col-12 col-lg-6" style={{ marginTop: "80px" }}>
              <Hello />
            </Col>
            <Col className="col-12 col-lg-6">
              <Imgs />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid="lg">
        <Row className="flex-row-reverse">
          <Col className="d-flex flex-wrap ps-0" lg={7}>
            <Infos />
            <Why />
          </Col>
          <Col lg={5} className="pe-lg-0">
            <Way />
          </Col>
        </Row>
      </Container>
      <Container fluid className="curve">
        <Container fluid="lg">
          <Servises /> {/* {"👀"} */}
        </Container>
      </Container>
      <Container>
        <Row className="d-lg-flex flex-wrap">
          <Col lg={6}>
            <Solution />
          </Col>
          <Col lg={6}>
            <Phone />
          </Col>
        </Row>
      </Container>
      <Container>
        <Meet /> {/* {"👀"} */}
      </Container>
      <Clients /> {/* {"👀"} */}
      <Drivers /> {/* {"👀"} */}
      <Container>
        {" "}
        {/* {"👀....."} */}
        <Row>
          <Col lg={6} className="pe-0" id = "contacts">
            <Contacts />
          </Col>
          <Col lg={6} className="ps-0" id="message" >
            <Message />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
