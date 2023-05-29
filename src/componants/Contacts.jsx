import React from 'react'
import { Container , Image } from 'react-bootstrap'

import mail from "../assets/mail.png"
import location from "../assets/location.png"
import phone from "../assets/cell_phone.png"

import linked from "../assets/in.png"
import insta from "../assets/insta.png"
import face from "../assets/face.png"
import tweeter from "../assets/tweet.png"


const Contacts = () => {
  return (
    <div className='pt-3 pb-3 bg-dark text-light'>
        <Container>
            <p className='fs-1 fw-bold mt-3'>Get In Touch</p>
            <p className="ms-3" style={{fontSize:"13px"}} >we are avilable 24h in 7 days at the week</p>
        </Container>
        <Container className="mb-3 mt-5">
            <div className='d-flex ms-5 ps-5 mt-1'>
                <Image className='pe-4 h-25' style={{width: "50px"}} src={phone}/>
                <p>0100000000</p>
            </div>
            <div className='d-flex ms-5 ps-5 mt-1'>
                <Image  className='pe-4 h-25' style={{width: "50px"}} src={mail}/>
                <p>Srena.com</p>
            </div>
            <div className='d-flex ms-5 ps-5 mt-1'>
                <Image  className='pe-4 h-25' style={{width: "45px"}} src={location}/>
                <p>Saudi arabia</p>
            </div>
        </Container>
        <Container>
            <p className='ms-5 ps-4' style={{fontSize:"12px"}}>Follow Us</p>
            <div className='ms-5 ps-5'>
                <Image src={linked} className='ms-2' style={{width:"36px"}} />
                <Image src={insta} className='ms-2' style={{width:"36px"}} />
                <Image src={face} className='ms-2' style={{width:"36px"}} />
                <Image src={tweeter} className='ms-2' style={{width:"36px"}} />
            </div>
        </Container>
    </div>
  )
}

export default Contacts