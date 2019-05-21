import React, { Component } from 'react';
import './review_style.css';
import ReactPlayer from 'react-player';
import Timeline from '../../components/timeline';
import schedule from '../../images/review/2018 春.jpg'
import schedule2 from '../../images/review/2018 春／課程介紹.jpg'
class Review extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){

        return(
            <div className = "review">  
                <Timeline season = "2018-spring"/>
                <ReactPlayer url='https://www.youtube.com/watch?v=QlBQQOAPqCI&t=119s' 
                        playing = {true}
                        width={window.innerWidth * 0.8} height={window.innerWidth * 0.8 * 0.56}/> 
                <img src = {schedule} className = "schedule" alt = ""/>
                <img src = {schedule2} className = "schedule" alt = ""/>
            </div>
        )
    }

};

export default Review;