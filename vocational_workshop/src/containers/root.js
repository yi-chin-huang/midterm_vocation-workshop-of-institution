import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer/footer';
import { BrowserRouter } from 'react-router-dom'
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'H'};
}

  render() 
    {
      return (
        <BrowserRouter>
          <div>
              <Header page = {this.state.page}/>
              <Main/> 
              <Footer/>
          </div>
        </BrowserRouter>
      
      )
    }

}

export default Root;