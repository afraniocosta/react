import React from 'react'
import './css/quiz.css'
import data from './quiz.json'

function Quiz(){

  // const [nameValue, setNameValue] = useState('');
  // const [ageValue, setAgeValue] = useState('');

  // function handleChange(evt) {
  //     setNameValue(evt.target.nameValue)
  // }

  return(
    <>
      <div className='container'>
        <div className='content'>
          {
            data.map((item, index) => (
              <p><strong>{ item.answer}</strong></p>
            ))
          }
          {
            data.map((item, index) => (
              <>
                <label><input type='radio' name="libertadores" value={ item.children.one}></input>{ item.children.one}<br/></label>
                <label><input type='radio' name="libertadores" value={ item.children.two}></input>{ item.children.two}</label>
                <label><input type='radio' name="libertadores" value={ item.children.trhee}></input>{ item.children.trhee}</label>
                <label><input type='radio' name="libertadores" value={ item.children.four}></input>{ item.children.four}</label>
              </>
            ))
          }
          <div className='mt-15'>
            <button className='button'>Próximo</button>
            <button className='button'>Anterior</button>
          </div>
        </div>
        <div className='content'>
          {
            data.map((item, index) => (
              <p><strong>{ item.answer}</strong></p>
            ))
          }
          {
            data.map((item, index) => (
              <>
                <label><input type='radio' name="libertadores" value={ item.children.one}></input>{ item.children.one}<br/></label>
                <label><input type='radio' name="libertadores" value={ item.children.two}></input>{ item.children.two}</label>
                <label><input type='radio' name="libertadores" value={ item.children.trhee}></input>{ item.children.trhee}</label>
                <label><input type='radio' name="libertadores" value={ item.children.four}></input>{ item.children.four}</label>
              </>
            ))
          }
          <div className='mt-15'>
            <button className='button'>Próximo</button>
            <button className='button'>Anterior</button>
          </div>
        </div>
      </div>
    </>  
  )
}  
    
export default (Quiz)