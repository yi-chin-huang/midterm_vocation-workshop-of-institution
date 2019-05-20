import React, { Component } from 'react';
import Carousel from '../../components/carousel';
import './style_home.css'
import title_home from '../../images/title.png'
import ReactPlayer from 'react-player'


class Home extends Component {
    constructor(props) {
        super(props);  
        this.state = {play: false}  
    }

    // start playing video after scrolling down
    handleScroll = () => { 
        const heightBound = window.innerHeight * 0.7
        if (window.scrollY > heightBound) {
            this.setState({play: true})
        } 
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
        window.scrollTo(0,0);
    
    }
    
    render() 
    {
        return (
            <div>
                <img src = {title_home} className = "title_home"/>
                <div className = "filter_home">
                    <Carousel/>  
                </div>
                <div className = "laptop-wrapper">
                    <div id = "border">
                        <ReactPlayer url='https://youtu.be/1KJ8vPuW36s' 
                        playing = {this.state.play} 
                        width={window.innerWidth} height={window.innerWidth * 0.56}/> 
                    </div>
                </div>

            </div>

        )
    }

}
export default Home;