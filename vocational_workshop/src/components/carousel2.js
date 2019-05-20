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
    constructor(props) {
        super(props);  

    }
    
    render(){
        // const aa = imgs.map((item) => 
        //     {return(<img src = {require(`../images/introduction/${item}.jpg`)} class="d-block w-100" alt=""/>)
        // })
        // const bb = aa.map((item) => 
        //     {return(<div class="carousel-item active"> {item} </div>)
        // })
        return(
             
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="5000">
                <div id = "carousel2" class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={p1} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p2} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p3} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p4} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p5} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p6} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p7} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={p8} class="d-block w-100" alt=""/>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a  class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        )
    }

};

export default Carousel;