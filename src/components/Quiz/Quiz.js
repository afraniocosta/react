import React, { useState } from 'react'
import './css/quiz.css'
import StepsHandler from './StepsHandler.js'

function Quiz(){
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  function handleNextStep () {
    // if(answer === true) {
    //   setScore(score + 1)
    //   console.log(score)
    // }
    setCurrentStep(currentStep + 1)
  }
  
  function handlePreviousStep () {
    setCurrentStep(currentStep - 1)
  }

  return(
    <>
      <div className='container'>
        <div className='content'> 
          <StepsHandler currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          <div className='mt-15 botoes'>
            {currentStep != 0 ? <button className='button' onClick={handlePreviousStep}>Anterior</button>: ''}
            {currentStep != 2 ? <button className='button' onClick={handleNextStep}>Próximo</button> : ''}
          </div>
        </div>
      </div>
    </>  
  )
}  
    
export default (Quiz)