import React, { Component } from 'react';
import './review_style.css';
import ReactPlayer from 'react-player';
import Timeline from '../../components/timeline';
import schedule from '../../images/review/2017 夏.jpg'
class Review extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){

        return(
            <div className = "review">  
                <Timeline season = "2017-summer"/>
                <ReactPlayer url=' https://youtu.be/VUWtulqNbZA' 
                        playing = {true}
                        width={window.innerWidth * 0.7} height={window.innerWidth * 0.39}/> 
                <img src = {schedule} className = "schedule" alt = ""/>
            </div>
        )
    }

};

export default Review;