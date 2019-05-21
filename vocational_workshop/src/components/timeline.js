import React, { Component } from 'react';
import './components_style.css';
import bean from '../images/bean.png';
import beanMan from '../images/bean_man.png';
import {NavLink} from "react-router-dom";
class Timeline extends Component {

    getImg = s =>{
        if(this.props.season === s){
            return(beanMan)
        }
        else{
            return(bean)            
        }        
    }

    render(){

        return(
            <div className = "timeline">  
                <div className = "beanline">
                    <NavLink to="/review/2017-summer"><img src = {this.getImg('2017-summer')}  className = "review_bean review_bean1" alt = ""/></NavLink>
                    <NavLink to="/review/2018-spring"><img src = {this.getImg('2018-spring')}  className = "review_bean review_bean2" alt = ""/></NavLink>
                    <NavLink to="/review/2018-summer"><img src = {this.getImg('2018-summer')}  className = "review_bean review_bean3" alt = ""/></NavLink>
                    <NavLink to="/review/2019-spring"><img src = {this.getImg('2019-spring')}  className = "review_bean review_bean4" alt = ""/></NavLink>
                </div>
                <div>
                    <span className = "review_bean bean_text review_bean1" >2017 春</span>
                    <span className = "review_bean bean_text review_bean2" >2018 春</span>
                    <span className = "review_bean bean_text review_bean3" >2018 夏</span>
                    <span className = "review_bean bean_text review_bean4" >2019 春</span>
                </div>
            </div>
        )
    }

};

export default Timeline;