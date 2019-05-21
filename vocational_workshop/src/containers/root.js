import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer/footer';
import { HashRouter } from 'react-router-dom'
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'H'};
}

  render() 
    {
      return (
        <HashRouter>
          <div>
              <Header page = {this.state.page}/>
              <Main/> 
              <Footer/>
          </div>
        </HashRouter>
      
      )
    }

}

export default Root;