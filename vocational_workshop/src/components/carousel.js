import React, { Component } from 'react';
import p1 from '../images/home_photos/1.jpg';
import p2 from '../images/home_photos/2.jpg';
import p3 from '../images/home_photos/3.jpg';
import p4 from '../images/home_photos/4.jpg';
import p5 from '../images/home_photos/5.jpg';
import p6 from '../images/home_photos/6.jpg'
import p7 from '../images/home_photos/7.jpg'
import p8 from '../images/home_photos/8.jpg'
import p9 from '../images/home_photos/9.jpg';
import p10 from '../images/home_photos/10.jpg';
import p11 from '../images/home_photos/11.jpg';
import p12 from '../images/home_photos/12.jpg';
import p13 from '../images/home_photos/13.jpg';
import p14 from '../images/home_photos/14.jpg';
import p15 from '../images/home_photos/15.jpg';
import p16 from '../images/home_photos/16.jpg';
import p17 from '../images/home_photos/17.jpg';
import p18 from '../images/home_photos/18.jpg';


class Carousel extends Component {

    render(){
        return(

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={p1} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p2} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p3} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p4} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p5} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p6} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p7} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p8} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p9} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p10} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p11} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p12} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p13} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p14} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p15} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p16} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p17} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={p18} className="d-block w-100" alt=""/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }

};

export default Carousel;