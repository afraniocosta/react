import React from 'react'
import data from './site.json';
import './css/cor-btn.css';
import Header from './Header.js';
import Container from './Container.js';
import Footer from './Footer.js';

class Site extends React.PureComponent {

  render(){

    return(
      <>
        <Header />
        <Container title={this.props.title}/>
        <Footer />
      </>
    )
  }

}
        
export default Site