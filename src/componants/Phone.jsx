import React from 'react'

import phone from "../assets/phone.png"
import rect from "../assets/bink_rect.png"
import { Container, Image } from 'react-bootstrap'

const Phone = () => {
  return (
    <Container className='d-flex justify-content-end' style={{width:"fit-content"}}>
        <Image src={phone}  className='ms-lg-3 ps-lg-5 phone'/>
        <Image src={rect} className='position-absolute end-0 pt-5 mt-5 rect'/>
    </Container>
  )
}

export default Phone