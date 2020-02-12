import React, { useState } from 'react'
import InputRadio from './InputRadio'
//import Quiz from './Quiz.js'

function StepsHandler ({currentStep}) {
const [check, setCheck] = useState('')

  let content = ''
  switch (currentStep) {
    case 0:
      content =
        <>
          <p>1- Em que ano o Cruzeiro conquistou o bi campeonato da Libertadores?</p>
          <InputRadio type='radio' />
          {/* <input type='radio' value={option1} checked={setCheck.selectedOption === 'option1'}/> */}
        </> 
      break
    case 1:
      content =
        <>
         <p>Segunda pergunta</p>
        </>
      break
    case 2:
      content = 
      <p>Terceira pergunta</p>
  }
    return content
}
  
export default (StepsHandler)