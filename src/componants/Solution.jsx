import React from 'react'
import { Button, Image } from 'react-bootstrap'

import file from "../assets/file.png"

const Solution = () => {
  return (
    <div className="ms-3 mt-2 solution">
        <p style={{color : "#B5153A"}} className = "fs-2 fw-bold">Our Solution</p>
        <p className = "fw-bold" style={{fontSize:"15px"}}> is tailored to your specific needs, whether you're transporting goods, employees or clients. </p>
        <ul>
            <li className='mt-2' style={{fontSize:"13px"}}>Reporting</li>
            <li className='mt-2' style={{fontSize:"13px"}}> Customer Panel Step By Step Flow</li>
            <li className='mt-2' style={{fontSize:"13px"}}>Driver Console Step By Step Flow</li>
            <li className='mt-2' style={{fontSize:"13px"}}>Dispatcher Console Flow (Renting employee)</li>
            <li className='mt-2' style={{fontSize:"13px"}}>Delivery Service</li>
            <li className='mt-2' style={{fontSize:"13px"}}>Admin Panel Step By Step Flow</li>
        </ul>
        <p style={{fontSize:"15px"}}>To more details , You can view the company's profile with all services from here</p>
        <Button variant="dark" className='pt-3 mb-4 ms-2 d-flex align-items-center'>
            <Image src={file} className='ps-2 pe-3 pb-3 d-inline-block w-25' />
            <p className='text-light'>
                Company Profile
            </p>
        </Button>
    </div>
  )
}

export default Solution