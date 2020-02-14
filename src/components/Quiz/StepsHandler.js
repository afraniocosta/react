import React, {useState} from 'react'
import InputRadio from './InputRadio'
//import Quiz from './Quiz.js'

function StepsHandler ({currentStep}) {
  const [check, setCheck] = useState('');

  function onRadioChange(evt){
    setCheck(evt.target.value)
    console.log(setCheck(evt.target.value))
  }

  let content = ''
  switch (currentStep) {
    case 0:
      content =
        <>
          <p>1- Em que ano o Cruzeiro conquistou o bi campeonato da Libertadores?</p>
          <label><InputRadio name="libertadores" value="2017" checked={check.selectedOption === '2017'} onChange={onRadioChange} />2017 nos penaltes.</label> 
          <label><InputRadio name="libertadores" value="1997" checked={check.selectedOption === '1997'} onChange={onRadioChange} />1997 com gol de Elivelton.</label> 
          <label><InputRadio name="libertadores" value="1996" checked={check.selectedOption === '1996'} onChange={onRadioChange} />1996 com um empate de 0 a 0.</label> 
          <label><InputRadio name="libertadores" value="1993" checked={check.selectedOption === '1993'} onChange={onRadioChange} />1993 com gol nos acréscimos.</label>
        </> 
      break
    case 1:
      content =
        <>
          <p>2- Em 2011 o Cruzeiro goleuou o Atlético na última rodada do brasileiro. Qual foi o placar?</p>
          <label><InputRadio name="goleada" value="3x0" />3 x 0</label> 
          <label><InputRadio name="goleada" value="4x1" />4 x 1</label> 
          <label><InputRadio name="goleada" value="6x1" />6 x 1.</label> 
          <label><InputRadio name="goleada" value="5x0" />5 x 0</label>
        </>
      break
    case 2:
      content =
        <>
          <p>3- De quem foi o gol da vitória do Cruzeiro no jogo Cruzeiro x Vasco em 2019?</p>
        </>
      break
    case 3:
        content =
        <>
          <p>4- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
        </>
      break
    case 4:   
        content =
        <>
          <p>5- De quem foi o gol da vitória do Cruzeiro no jogo Cruzeiro x Vasco em 2019?</p>
        </>
      break
    case 5:
        content =
        <>
          <p>6- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
        </>
      break
    case 6:
        content =
        <>
          <p>7- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
        </>
      break  
    case 7:
      content =
      <>
        <p>8- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
      </>
      break
    case 8:
        content =
        <>
          <p>9- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
        </>
      break
    case 9:
        content =
        <>
          <p>10- Em 2003 o Cruzeiro conquistou a Tríplice Coroa. Quais foram os títulos?</p>
        </>    
  }
    return content
}
  
export default (StepsHandler)