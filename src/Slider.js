import React, { useState, useEffect } from 'react'
import data from './slides.json'

function Slider(){

const [ currentSlide, setCurrentSlide ] = useState(item.name[0])

return(
  console.log(item[0])
    <>
      { data.map((item, index) => (
        <p>{ item.name }</p>
      )) }
    </>
  )
}

export default (Slider)