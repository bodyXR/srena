import React from 'react'
import { Container } from 'react-bootstrap'

const Infos = () => {
  return (
    <Container style={{backgroundColor : "#FFFFFF" }} className = "ms-2 mt-5 pb-2" >
          <p style={{color : "#B5153A"}} className = "fs-2 fw-bold d-lg-inline" >Srenaسرينا </p>
          <p className = "fs-4 fw-bold d-lg-inline" >Smart internal Transportation</p>
          <p className="w-75" style = {{fontSize:"15px",fontWeight:600}}>Internal transportation in <b>Saudi Arabia</b> is untouched market and is only running in a very antiquated traditional ways. Adding to that the Parking limitations and congestions. </p>
    </Container>
  )
}

export default Infos