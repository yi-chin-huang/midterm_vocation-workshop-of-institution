import React, { Component } from 'react';
import './review_style.css';
import ReactPlayer from 'react-player';
import Timeline from '../../components/timeline';
import schedule from '../../images/review/2019 春／台北場A班.jpg'
import schedule2 from '../../images/review/2019 春／台北場B班.jpg'
import schedule3 from '../../images/review/2019 春／馬祖場.png'
class Review extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){

        return(
            <div className = "review">  
                <Timeline season = "2019-spring"/>
                <ReactPlayer url='https://youtu.be/naSrw0-0SNk' 
                        playing = {true}
                        width={window.innerWidth * 0.8} height={window.innerWidth * 0.8 * 0.56}/> 
                <img src = {schedule} className = "schedule" alt = ""/>
                <img src = {schedule2} className = "schedule" alt = ""/>
                <img src = {schedule3} className = "schedule" alt = ""/>
                
            </div>
        )
    }

};

export default Review;