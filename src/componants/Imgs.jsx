import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import tall from "../assets/tall.png"
import car from "../assets/car.png"
import bus from "../assets/bus.png"

const Imgs = () => {
  return (
    <div className='pb-4 d-flex flex-wrap mt-5 ms-3'style={{width:"55%" , marginBottom:"10vh"}}>
        <Row>
          <Col xs= {5} lg={3}>
            <Image src={car} className='mt-4 ms-3' style={{width:"150px"}}/>
            <Image src={bus} className='mt-2 ms-5' style={{width:"150px"}}/>
          </Col>
          <Col xs= {5} lg={1} >
            <Image src={tall} className='mt-2 img' />
          </Col>
        </Row>
    </div>
  )
}

export default Imgs