import React, { Component } from 'react';
import './components_style.css'

class BlueSquare extends Component {
    constructor(props) {
        super(props);   
    }
 

    render(){
        return(
            <div className = "blue_square">
                <div className = "blue_square_text">
                    {this.props.en} <br/>
                    {this.props.ch}
                </div>
            </div>
        )
    }

};

export default BlueSquare;