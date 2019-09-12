import React from 'react'
import './css/cor-btn.css'

class MovingButton extends React.PureComponent {

constructor(props){
  super(props)
  this.state = {
    botao: botao.getBoundingClientRect()
  }
  
  console.log(botao)
  
}

move = () => { 

  const coordenadas = el.getBoundingClientRect();
  
  console.log (coordenadas)
  
  // const windowW = window.innerWidth
  // const spaceMove = windowW  / 2 / 3


  
}

// movieButton = () => {
// }



  render(){
    console.log('estou no render')
 
    return(

      <>
        <p id='botao' onClick={evt => { this.move(evt) } }>Click and move</p>
      </>
    
    )
  }

}

export default MovingButton