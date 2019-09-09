import React from 'react'
import './css/cor-btn.css';

class Header extends React.PureComponent {

  render(){
    return(
      <>
        <div id='header'>
          <nav>
            <ul>
              <li>Home</li>
              <li>Empresa</li>
              <li>Produtos</li>
            </ul>
          </nav>    
        </div>
      </>
    )
  }
}
        
export default Header