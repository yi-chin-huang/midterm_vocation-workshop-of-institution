import React, { Component } from 'react';
import p1 from '../images/introduction/1.jpg';
import p2 from '../images/introduction/2.jpg';
import p3 from '../images/introduction/3.jpg';
import p4 from '../images/introduction/4.jpg';
import p5 from '../images/introduction/5.jpg';
import p6 from '../images/introduction/6.jpg';
import p7 from '../images/introduction/7.jpg';
import p8 from '../images/introduction/8.jpg';
// const imgs = ['1','2','3','4','5','6','7','8'];
class Carousel extends Component {

    render(){
        // const aa = imgs.map((item) => 
        //     {return(<img src = {require(`../images/introduction/${item}.jpg`)} className="d-block w-100" alt=""/>)
        // })
        // const bb = aa.map((item) => 
        //     {return(<div className="carousel-item active"> {item} </div>)
        // })
        return(
             
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="5000">
                <div id = "carousel2" className="carousel-inner">
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
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a  className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }

};

export default Carousel;