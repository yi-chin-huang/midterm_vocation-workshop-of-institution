import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './components_style.css'

class Button extends Component {
    // constructor(props) {
    //     super(props);   //page, BGcolor, link, text
    // }

    getStyle = () => {
        // let opacity = '0.3';
        const bgcol = this.props.BGcolor;
        const width = this.props.width;
        const height = this.props.height;
        const fontSize = this.props.fontSize;
        // if(this.props.page == 'H' || e == this.props.page){
        //     opacity = '1'
        // }
        const butStyle = {
            fontFamily: 'FZYaoti',
            fontWeight: '100',
            fontSize: fontSize,
            color: 'white',
            width: width,
            height: height,
            borderRadius: '0.5em',
            border: 'none',
            margin: '1.2%',
            // maxWidth: '10%',
            backgroundColor: bgcol,

        };
        return(butStyle)

    }


    render(){
        return(
            <span>
                <NavLink to={this.props.link}><button type="button"  style={this.getStyle() } dangerouslySetInnerHTML={{__html:this.props.text}}></button></NavLink>
            </span>

        )
    }

};

export default Button;
