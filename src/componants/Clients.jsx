import React from 'react'

import pic from "../assets/client.png"
import right from "../assets/right.png"
import left from "../assets/left.png"
import { Col, Container, Image, Row } from 'react-bootstrap'

const Clients = () => {
  return (
    <Container>
        <div className='d-flex justify-content-center flex-column mb-5 pb-5'>
            <p className='fs-2 fw-bold mt-4 text-center mb-4'>Our Clients</p>
            <div className='d-flex justify-content-center'>
                <p style={{color : "#EFDFE2"}} className = "ms-3 me-3 fs-1 fw-bold d-lg-block d-none" >Srena<br/>سرينا</p>
                <p style={{color : "#EFDFE2"}} className = "ms-3 me-3 fs-1 fw-bold" >Srena<br/>سرينا</p>
                <p style={{color : "#EFDFE2"}} className = "ms-3 me-3 fs-1 fw-bold" >Srena<br/>سرينا</p>
                <p style={{color : "#EFDFE2"}} className = "ms-3 me-3 fs-1 fw-bold" >Srena<br/>سرينا</p>
                <p style={{color : "#EFDFE2"}} className = "ms-3 me-3 fs-1 fw-bold d-lg-block d-none" >Srena<br/>سرينا</p>
            </div>
            <Container className='d-lg-flex justify-content-center'>
              <Col className='ps-5 ms-5' lg={3}>
                <Image src={pic} className='mt-3' style={{width:"130px"}}/>
                <p className='fs-5 mt-4 ms-3 mb-0' style={{fontWeight : 600}} >Ahmad ajami</p>
                <p className='ms-2'>Ceo company name</p>
              </Col>
              <Col className='d-lg-flex align-items-center' lg={5}> 
                <p className='ps-4 pe-4 mt-4 ' style = {{fontSize:"13px",fontWeight:600}}>Internal transportation in <b>Saudi Arabia</b> is untouched market and is only running in a very antiquated traditional ways. Adding to that the Parking limitations and congestions. </p> 
              </Col>
            </Container>
            <div className='position-absolute switch' style={{right:"10vw"}}>
              <Image src={left} className='d-inline m-1'/>
              <p className='d-inline m-1'><b>1</b>/3</p>
              <Image src={right} className='d-inline m-1'/>
            </div>
        </div>
    </Container>
  )
}

export default Clients