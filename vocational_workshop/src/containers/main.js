import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import Home from './home/home';
import Register from './register/register';
import Taipei from './register/taipei/taipei';
import Tainan from './register/tainan/tainan';
import Course from './course/course';
import Activity from './activity/activity';
import Review1 from './review/review1';
import Review2 from './review/review2';
import Review3 from './review/review3';
import Review4 from './review/review4';
import Team from './team/team';

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
            <Route exact path="/review/2017-summer" component={Review1} />
            <Route exact path="/review/2018-spring" component={Review2} />
            <Route exact path="/review/2018-summer" component={Review3} />
            <Route exact path="/review/2019-spring" component={Review4} />
            <Route exact path="/team" component={Team} />
            {/* <Route exact path="/contact" component={Activity} /> */}
          </Switch>
        </div>

      )
    }

}

export default Main;