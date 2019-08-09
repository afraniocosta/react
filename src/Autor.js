import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import PubSub from 'pubsub-js';

class FormularioAutor extends Component{

    constructor() {
        super();    
        this.state = {nome: '', email: '', senha: ''};
        this.enviaForm = this.enviaForm.bind(this); //aqui digo que a enviaForm vai ser uma enviaForm cujo bind dela, cujo this vai ser o this do react
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

      enviaForm(evento){
        evento.preventDefault();
        console.log(this);
        $.ajax({
          url:"https://cdc-react.herokuapp.com/api/autores",
          contentType: 'application/json', //como os dados estão sendo enviados, vão em formato json 
          dataType: 'json', //a resposta irá retornar como json
          type: 'post', //o tipo de requisição é post
          data: JSON.stringify({nome: this.state.nome, email: this.state.email, senha: this.state.senha}),
          success: function(novaListagem){
           PubSub.publish('atualiza-lista-autores', novaListagem);
          },
          error: function(resposta) {
            console.log("erro");
          }   
        })
      }
      
      setNome(evento){
        this.setState({nome:evento.target.value});
      }
    
      setEmail(evento){
        this.setState({email: evento.target.value});
      }
    
      setSenha(evento){
        this.setState({senha: evento.target.value});
      }

    render(){
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>
                <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>
                <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>
                <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                </div>
            </form>             

        </div>  
        );
    }
}

class TabelaAutores extends Component{

   

    render(){
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.lista.map(function(autor){
                            return (
                            <tr key={autor.id}>
                                <td>{autor.nome}</td>
                                <td>{autor.email}</td>
                            </tr>
                            );
                        })
                        }
                    </tbody>
                </table> 
          </div>     
        );
    }
}

export default class AutorBox extends Component {

  constructor() {
    super();    
    this.state = {lista : []};
  }
  
  // Componente acabou de ser montado. Logo após o render ser invocado a primeira vez essa função é chamada.
  
  componentDidMount(){
    $.ajax({
        url:"https://cdc-react.herokuapp.com/api/autores",
        dataType: 'json',
        success:function(resposta){    
          this.setState({lista:resposta});
        }.bind(this)
      } 
    );          

  PubSub.subscribe('atualiza-lista-autores', function(topico,novaLista){
    this.setState({lista:novaLista});
  }.bind(this));
  }

  render(){
    return(
      <div>
        <FormularioAutor calbackAtualizaListagem={this.atualizaListagem}/>
        <TabelaAutores lista={this.state.lista}/>
      </div>
    );
  }

}