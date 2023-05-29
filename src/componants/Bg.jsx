import React from 'react'

import bg1 from "../assets/bg1.png"
import { Image } from 'react-bootstrap'

const Bg = () => {
  return (
    <div className='position-absolute top-2 h-100'>
        <Image src={bg1} className = "" style={{width : "100vw" , height : "862px"}}/>
    </div>
  )
}

export default Bg