import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import chat from './chat/chat';
import comment from './comment/comment';
import Home from './home/home';
import Register from './register/register';
import Taipei from './register/taipei/taipei';
import Tainan from './register/tainan/tainan';
import Course from './course/course';
import Activity from './activity/activity';

import './containers_style.css'
class Main extends Component {

    render() 
    {
      return (
        <div className = "main_section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/taipei" component={Taipei} />
            <Route exact path="/register/tainan" component={Tainan} />
            <Route exact path="/review" component={chat} />
            <Route exact path="/review" component={chat} />
            <Route exact path="/team" component={comment} />
            <Route exact path="/contact" component={comment} />
          </Switch>
        </div>

      )
    }

}

export default Main;