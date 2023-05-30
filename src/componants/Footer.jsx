import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container  style={{fontSize:"13px",fontWeight:600}} >
        <Row className='d-flex justify-content-between pt-3 pb-3'>
          <Col className='col-2'>
            <span>@2023</span>
            <span>Srena</span>
          </Col>
          <Col className='col-8 col-lg-3 '>
            <span className=''>  Privacy Policy </span>
            <span className=''>Terms&Condditions</span> 
          </Col>
        </Row>
    </Container>
  )
  // <a className='text-danger' href='#'>Top</a>
}

export default Footer