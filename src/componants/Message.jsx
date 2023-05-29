import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Message = () => {
  return (
    <div  style={{backgroundColor: "#aba1a1"}} className='pt-3 pb-3 d-flex justify-content-center'>

        <div className='pt-2 mt-3 ps-4 bg-dark text-light' style ={{width:"320px"}} >
            <p className='fs-3 fw-bold mt-3'>Send Message</p>
            <Form className="mb-5">
                <Form.Group controlId = "form">
                    <Form.Control type = "text" placeholder='name' style={{backgroundColor: "#d2cece00",fontSize:"13px" , width:"270px"}} className=' border-bottom border-0 mb-3 border-light rounded-0 text-light'/>
                    <Form.Control type = "email" placeholder='Email' style={{backgroundColor: "#d2cece00",fontSize:"13px" , width:"270px"}} className=' border-bottom border-0 mb-3 border-light rounded-0 text-light'/>
                    <Form.Control type = "text" placeholder='Message' style={{backgroundColor: "#d2cece00",fontSize:"13px",height:"60px" , width:"270px"}} className=' border-bottom border-0 mb-3 border-light rounded-0 pb-5 text-light'/>
                </Form.Group>
            </Form>
            <Container className='ms-3 ps-2 mb-4'>
                <Button variant="danger"  className='pt-0 pt-0 mb-0 mt-0 w-75'>
                    <p className='pt-2 pb-1 mb-0 mt-0 '>Send</p>
                </Button>
            </Container>
        </div>
    </div>
  )
}

export default Message