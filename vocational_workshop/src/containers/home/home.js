import React, { Component } from 'react';
import Carousel from '../../components/carousel';
import './style_home.css'
import title_home from '../../images/title.png'
import img1 from '../../images/home_photos/20.jpg'
import img2 from "../../images/home_photos/5.jpg"
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
                        playing = {true} 
                        width={window.innerWidth*0.7} height={window.innerWidth * 0.39}/> 
                    </div>
                </div>
                <div className="small-container text-center text-container my-5">
                    <h1 className='text-primary yaoti'>我們相信 <br/>每個孩子都有自己選擇職涯的權利</h1>
                    <div className="py-3 row">
                        <div className="d-flex align-items-center col-md-6">
                            <blockquote className="d-block quote">我們是臺灣的教育團隊——直覺職掘，「透過舉辦職業體驗營，讓國中生的選擇更自由。」 直覺×職掘從二年前開始，在寒暑假期間，為國中生舉辦職涯探索的工作坊， 邀請各個專業領域的講師，為國中生講解各項職業技能，搭配實作體驗， 讓學員從做中學習，在學科外的領域得到成就感，重新激發學習動機。</blockquote>
                        </div>
                        <div className="col-md-6">
                            <img src={img1} alt='' width="100%" />
                        </div>
                    </div>
                </div>
                <div className="small-container text-center text-container my-5">
                    <h1 className="yaoti text-primary">實作體驗，創造成就</h1>
                		<div className="row py-3">
                        <div className="col-md-6">
                            <img src={img2} alt='' width="100%" />
                        </div>
                        <div className="d-flex align-items-center col-md-6">
                            <blockquote className="d-block quote">為了讓孩子們有更深刻的學習，我們在三小時的課程中， 安排一個半小時至兩小時的體驗實作時間，讓孩子們能跳脫傳統教學方式由上而下的框架， 親自動手參與課程，遇到問題便想辦法解決，學習專業知識的過程亦培養解決問題的能力。</blockquote>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
export default Home;