import React from 'react'

import { Container, Image } from 'react-bootstrap'
import cards from "../cards.js"

import ticket from "../assets/ticket.png"
import edit from "../assets/edit.png"
import road from "../assets/road.png"


const Servises = () => {
  return (
      <Container className='curve mb-5 w-100'>
            <div className='servises pt-5 mb-5'>
            <p className='text-center fs-2 fw-bold mt-5 pe-5 me-3' style={{color : "#B5153A"}}>Srena Services</p>
            <div className='d-flex flex-wrap justify-content-start mt-1 ms-4 w-100'>
                {cards.map((card)=>{
                    return(
                        <div className="me-3 mt-3 service" key={cards.indexOf(card)}>
                            <Image src={card.img} className='ms-5 mb-2' style={{width: "49.3px"}}/>
                            <p style={{width: "146.37px" , fontSize:"13px",height:"50px"}} className='fw-bold mb-3 text-center' >{card.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex justify-content-center mt-3 ms-3' >
                <div className='ms-2'>
                    <Image src={ticket} className='w-50'/>
                    <p className='fs-5 fw-bold'>Book</p>
                    <p className='' style={{fontSize : "12px"}}>Book your transportation needs with just a few clicks</p>
                </div>
                <div className='ms-2'>
                    <Image src={road} className='w-50'/>
                    <p className='fs-5 fw-bold'>Track</p>
                    <p className='' style={{fontSize : "12px"}}>Track your transportation needs with just a few clicks</p>
                </div>
                <div className='ms-2'>
                    <Image src={edit} className='w-50'/>
                    <p className='fs-5 fw-bold'>Manage</p>
                    <p className='' style={{fontSize : "12px"}}>manage your transportation needs with just a few clicks</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Servises