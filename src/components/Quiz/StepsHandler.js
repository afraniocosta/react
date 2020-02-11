import React from 'react'
//import Quiz from './Quiz.js'

function StepsHandler ({currentStep}) {
  let content = ''
  switch (currentStep) {
    case 0:
      content =
        <>
          <p>1- Em que ano o Cruzeiro conquistou o bi campeonato da Libertadores?</p>
          <label><input type='radio' name='libertadores' value='libertadores'></input>1976 com gol de Joazinho.</label>
          <label><input type='radio' name='libertadores' value='libertadores'></input>Em 2002 após uma virada histórica.</label>
          <label><input type='radio' name='libertadores' value='libertadores'></input>1997 com gol de Elivelton.</label>
          <label><input type='radio' name='libertadores' value='libertadores'></input>Em 2014 nos pênaltis.</label>
        </>
      break
    case 1:
      content =
        <>
          <p>1- Em 2011 o Cruzeiro goleou o Atlético na última rodada do brasileiro. Qual foi o placar?</p>
          <label><input type='radio' name='libertadores' value='s'></input>4 x 0</label>
          <label><input type='radio' name='libertadores' value='s'></input>5 x 1</label>
          <label><input type='radio' name='libertadores' value='s'></input>3 x 0</label>
          <label><input type='radio' name='libertadores' value='s'></input>6 x 1</label>
        </>
      break
    case 2:
      content = 
      <p>Terceira pergunta</p>
  }
    return content
}
  
export default (StepsHandler)