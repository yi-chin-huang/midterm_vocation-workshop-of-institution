import React, { Component } from 'react';
import {Switch} from "react-router-dom";
import Navbar from './navbar';
import './containers_style.css'
class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() 
    {
      return (
        <header>
            <Navbar/>

            <Switch>
              {/* <Route exact path="/" component={introHeader} />
              <Route exact path="/comments" component={commentHeader} /> */}
            </Switch>
        </header>
      
      )
    }

}

export default Header;