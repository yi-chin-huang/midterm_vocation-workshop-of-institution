import React, { Component } from 'react';
import Carousel from '../../components/carousel';
import './style_home.css'
import title_home from '../../images/title.png'
import img1 from '../../images/home_photos/19.jpg'
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
                <img src = {title_home} className = "title_home" alt = ""/>
                <div className = "filter_home">
                    <Carousel/>  
                </div>
                <div className = "py-5 d-flex justify-content-center">
                    <div id = "border">
                        <ReactPlayer url='https://youtu.be/1KJ8vPuW36s' 
                        playing = {false} 
                        width={window.innerWidth*0.7} height={window.innerWidth * 0.39}/> 
                    </div>
                </div>
                <div className = "text-center text-container">
                    <h1 className='text-primary yaoti'>我們相信 <br/>每個孩子都有自己選擇職涯的權利</h1>
                    <div className="d-flex py-3">
                        <div className="d-flex align-items-center left">
                            <blockquote className="d-block quote">我們是臺灣的教育團隊——直覺職掘，「透過舉辦職業體驗營，讓國中生的選擇更自由。」
直覺×職掘從二年前開始，在寒暑假期間，為國中生舉辦職涯探索的工作坊， 邀請各個專業領域的講師，為國中生講解各項職業技能，搭配實作體驗， 讓學員從做中學習，在學科外的領域得到成就感，重新激發學習動機。</blockquote>
                        </div>
                        <div className="right">
                            <img src={img1} alt='' width="100%" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-container">
                    <h1 className="yaoti">我們認為孩子有自己選擇的權力</h1>
                </div>

            </div>

        )
    }

}
export default Home;