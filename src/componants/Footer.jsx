import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='d-flex justify-content-around pt-3 pb-3' style={{fontSize:"13px",fontWeight:600}} >
        <Container className="">
          <span>@2023</span>
          <span>Srena</span>

        </Container>
        
        <Container className=" ">
            <span className=''>  Privacy Policy </span>
            <span className=''>Terms&Condditions</span> 
        </Container>
    </Container>
  )
  // <a className='text-danger' href='#'>Top</a>
}

export default Footer