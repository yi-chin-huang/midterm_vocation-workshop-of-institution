import React, { Component } from 'react';
import './components_style.css'

class PicSquare extends Component {
    constructor(props) {
        super(props);   
        this.state = {hover: false} 
    }
    
    setStyle = () =>{
        if (this.state.hover){
            return({ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),'+`url(${this.props.pic})` })
        }
        else{
            return({ backgroundImage: `url(${this.props.pic})` })
        }
        
    }
    hoverOn = () =>{
        this.setState({hover: true});
    }
    hoverOff = () =>{
        this.setState({hover: false});
    }
    

    render(){
        return(
            <div className = "pic_square"  style = {this.setStyle()} 
            onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} >
                <span className="course_intro">
                    <span className = "course_title">{this.props.course_season} / {this.props.course_teacher} </span>
                    <br/>
                    {this.props.course_intro}
                </span>
                <div className = "course_name">{this.props.course_name}</div>
            </div>
        )
    }

};

export default PicSquare;