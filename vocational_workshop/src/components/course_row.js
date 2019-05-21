import React, { Component } from 'react';
import './components_style.css'
import BlueSquare from './blue_square';
import PicSquare from './pic_square';

class CourseRow extends Component {
    constructor(props) {
        super(props);   
        this.state = {courses: this.props.courses};
    }
    prevProps = this.props;

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.courses !== prevProps.courses) {
          this.setState({courses: this.props.courses});
        }
      }
    render(){

        return(
            <div className = "course_row">         
                <BlueSquare en = {this.props.en} ch = {this.props.ch}/>
                {this.state.courses.map((item, key) => 
                    <PicSquare course_name = {item.name}  course_season = {item.season} course_teacher = {item.teacher} key={key}
                    course_intro = {item.text} pic = {require(`../images/course_photos/${item.type}/${item.img}.jpg`)}/>)
                }
            </div>
        )
    }

};

export default CourseRow;