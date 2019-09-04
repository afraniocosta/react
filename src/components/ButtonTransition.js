/**
 * Um botao, centralizado, será criado.
 * Quando o botao for clicado, este deverá fazer uma transicao de 30% da metade da largura da tela
 * Ex.: se a tela for 480px de largura, entao o botao tera um transition do ponto 240px até 30% desse valor
 */
import React, {useState,useEffect} from 'react'
import '../css/cor-btn.css';

function ButtonTransition(){

const[moveButton, setMoveButton] = useState(0);

document.addEventListener('resize', function(){
    const windowWidth = window.innerWidth
    console.log('a largura é' windowWidth)
})

useEffect(()=>{
  
})

return(
    <>
      <a
        className='btnPosition'
        href='qualquer/coisa'
        onClick={evt => { this.setMoveButton() }}
      >
        Click
      </a>
    </>
)
}

export default ButtonTransition