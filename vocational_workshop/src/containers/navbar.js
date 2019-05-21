import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './containers_style.css'
import title from '../images/title.png'

class Navbar extends Component {
    // getPageStyle = e => {
    //     if(this.props.page === 'H'){
    //         return({ opacity: '1'})
    //     }
    //     else if(e === this.props.page){
    //         return({ opacity: '1'})
    //     }
    //     else{
    //         return({ opacity: '0.3'})
    //     }

    // }
    // pageStyle = { opacity: '0.3'}

    render(){
        return(
            <div className="navbar">
                <ul>
                    <span className ="title">
                        <NavLink to = '/'><img src = {title} className="title" alt = ""></img></NavLink>
                    </span>
                    <NavLink to="/course"><button type="button" className = "navButton" id = "A" >課程介紹</button></NavLink>
                    <NavLink to="/activity"><button type="button" className = "navButton" id = "B" >活動介紹</button></NavLink>
                    <NavLink to="/register"><button type="button" className = "navButton" id = "C" >活動報名</button></NavLink>
                    <NavLink to="/review/2019-spring"><button type="button" className = "navButton" id = "D" >活動回顧</button></NavLink>
                    <NavLink to="/team"><button type="button" className = "navButton" id = "E" >組織介紹</button></NavLink>
                    {/* <NavLink to="/contact"><button type="button" className = "navButton" id = "F" >合作聯繫</button></NavLink> */}
                </ul>
            </div>

        )
    }

};

export default Navbar;