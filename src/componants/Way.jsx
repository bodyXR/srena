import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import way from "../assets/way.png"
import box from "../assets/box.png"

const Way = () => {
  return (
    <Container className='d-flex flex-wrap justify-content-center mt-3 pe-lg-5 '>
          <Image src= {way} className="pe-lg-5 way" />
          <Image className="position-absolute pb-4 box" src= {box}/>
    </Container>    
  )
}

export default Way