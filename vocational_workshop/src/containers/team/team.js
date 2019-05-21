import React, { Component } from 'react';
import './team_style.css';
import p1 from '../../images/team_photos/all.jpg';
class Review extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){

        return(
            <div className = "team"> 
                <span className = "member" >
                    <div className = "member_pic" id = "member_1"></div>
                    <h3>公關<br/>吳宗錡</h3> 
                </span>

                <span className = "member" >
                    <div className = "member_pic"id = "member_2"></div>
                    <h3>生輔<br/>賴予亭</h3> 
                </span>

                <span className = "member" >
                    <div className = "member_pic"id = "member_3"></div>
                    <h3>課程<br/>林以凡</h3> 
                </span>

                <span className = "member" >
                    <div className = "member_pic" id = "member_4"></div>
                    <h3>行銷<br/>林珊如</h3> 
                </span>
                <span className = "member" >
                    <div className = "member_pic"id = "member_5"></div>
                    <h3>行銷<br/>林潤干</h3> 
                </span>
                <span className = "member" >
                    <div className = "member_pic"id = "member_6"></div>
                    <br/><br/>
                </span>

                <img src = {p1} alt = "" className = "team_pic"/>
            </div>            
        )
    }

};

export default Review;