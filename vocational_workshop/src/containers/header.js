import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './navbar';
import title from '../images/title.png'
import './containers_style.css'
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() 
    {
      return (
        <header>
            <Navbar page = {this.props.page}/>

            <Switch>
              {/* <Route exact path="/" component={introHeader} />
              <Route exact path="/comments" component={commentHeader} /> */}
            </Switch>
        </header>
      
      )
    }

}

export default Header;