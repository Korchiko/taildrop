import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [mouseEvent,setMouseEvent] = useState(false)
    console.log(mouseEvent)
  return (
    <>
    <div onMouseLeave={() => setMouseEvent(false)} onMouseEnter={() => setMouseEvent(true)} style={{cursor:"pointer"}}>Contact</div>
    {mouseEvent && <div>
        Component geldi
        </div>}
    </>
  )
}

export default Contact