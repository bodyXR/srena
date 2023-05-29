import React from 'react'

import question from "../assets/question.png"
import { Image } from 'react-bootstrap'

const why = () => {
  return (
    <div className = "ps-5 pb-2 w-100" style={{backgroundColor : "#FCF3F4" }}>
        <h1 className="fs-2 fw-bold pt-3 d-inline-block">Why Srena</h1>
        <Image src={question} className='mb-3' />
        <ul className = "me-3 mt-2 pb-2">
            <li><p>Fully integrated set of apps to cater for a “Super App”</p></li>
            <li><p>(Ticketing, Taxi, Deliver, Share, Parking, Service and more)</p></li>
            <li><p>Customizable per zones (Vehicles, services, business model.. etc.)</p></li>
            <li><p>Strong experience in internal transportation services</p></li>
            <li><p>Vast experience in EVs</p></li>
            <li><p>IoT devices, internet connected, builds connected vehicle mesh</p></li>
            <li><p>AI powered cameras to analyze drivers & riders & control actions</p></li>
            <li><p>En-route towards autonomous golf carts</p></li>
            <li><p>Smart city and Micromobility Infrastructure ready</p></li>
        </ul>
        {
        
        }
    </div>
  )
}

export default why