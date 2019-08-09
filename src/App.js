
import React, { Component } from 'react';
import './css/cor-btn.css';

export default class Button extends Component{
    // quando a classe for instanciada, o construtor eh chamado primeiro
    constructor(props){
        // herdando os props do pai
        super(props);
        this.state = { 
            mensagem : 'Olá, tudo bem?',
            buttonColor: 'initialColor',
        };

        // o bind irá modificar o escopo da function setButton para global
        this.setButton = this.setButton.bind(this);
    }
 
    setButton(){
        console.log('mudou a cor')
        this.setState({ 
            mensagem: 'Fala mano',
            buttonColor: 'finalColor',
        });
    }

    render() {
        return(
            <div>
               {this.state.mensagem} 
               <button onClick={this.setButton} className={this.state.buttonColor}>Trocar</button>
            </div>

        )
    }
}