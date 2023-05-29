import React from 'react'
import { Container, Image } from 'react-bootstrap'

import warning from "../assets/warning.png"

const Meet = () => {
  return (
    <Container style={{backgroundColor : "#0E2129"}} className='meet mt-4'>
      <div className='ms-3 mt-3'>
        <p className='text-light fs-1 fw-bold d-inline-block mt-lg-4'>Let's Meet</p>
        <Image src={warning} className='pb-lg-4'/>
        <p className='text-light w-75' style={{fontWeight : 600}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor ea ipsa quis, hic expedita eum, facere totam assumenda iure mollitia culpa pariatur</p>
      </div>
    </Container>
  )
}

export default Meet