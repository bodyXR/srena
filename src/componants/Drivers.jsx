import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Drivers = () => {
  return (
    <div style={{backgroundColor: "#FCF3F4"}} className='drivers'>
        <Container className='pt-3 pb-3 d-lg-flex'>
          <div className='' >
            <p className='fs-3 fw-bold mt-4 text-left text-s-center mb-2 me-5'>Join Our Drivers</p>
            <p className="text-left me-5"  style={{fontWeight : 540}}>Join & enjoy many benefits with srena</p>
          </div>
          <Button variant="dark" className=' pb-2 pt-2 ps-5 pe-5 mb-0 mt-5 ms-5 h-50 rounded-0'>
              <p className='pb-0 mb-0 mt-0 '> Join Now</p>
          </Button>
        </Container>
    </div>
  )
}

export default Drivers