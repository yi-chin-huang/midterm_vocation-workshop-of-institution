import React, { Component } from 'react';
import './course_style.css'
import PicSquare from '../../components/pic_square'
import BlueSquare from '../../components/blue_square'
import CourseRow from '../../components/course_row'
import p2 from '../../images/home_photos/2.JPG'
import arrow from '../../images/arrow.png'
class Course extends Component {
    constructor(props) {
        super(props); 
        this.state = {data: null, typeR: [this.r1], typeA: [this.a1], typeS: [this.s1],
                      typeI: [this.i1], typeC: [this.c1], typeE: [this.e1]}; 
         
    }
    r1 = {"_id":{"$oid":"5ce01ffa1c9d4400008d6326"},"type":"實作型","name":"機器人","season":"2019 春","teacher":"機器人國手 劉育運","text":"透過講解馬達、迴路的操作和控制，讓小朋友理解基本的機器人運作原理，並教導他們用課堂中所學的知識來實際組裝「探月機器人」，最後舉行分組的競賽，除了讓小朋友對於機器人有更深入的了解外，也培養他們團隊合作的精神","img":"r1"}
    a1 = {"_id":{"$oid":"5ce10fdc1c9d440000eb78a2"},"type":"藝術型","name":"髮飾設計","season":"2019 春","teacher":"美容美髮國手 楊溫蒂","text":"從美容美髮整個領域的介紹出發，先讓小朋友對於該領域和實際的工作內容有所了解，再讓他們實際製作髮飾，並學習編髮，藉由實際的體驗讓小朋友在學習技術之餘，也學會欣賞他人的作品，培養自己的美感。","img":"a1"}
    s1 = {"_id":{"$oid":"5ce115721c9d440000c10c72"},"type":"社交型","name":"新聞媒體","season":"2019 春","teacher":"世新新聞 王藝儒","text":"在說明完新聞報導的概念之後，藉由新聞報線單的規劃讓小朋友了解新聞價值理論與跑線例行作業，並在課上實際製作完整的新聞報導，從中學習編採技巧和攝影技術，最後讓小朋友進行媒體識讀，了解媒體的影響力。","img":"s1"}
    i1 = {"_id":{"$oid":"5ce10cc21c9d440000eb789c"},"type":"研究型","name":"邏輯思考","season":"2019 春","teacher":"高中數學老師 賴信川","text":"先透過解釋邏輯的概念，讓小朋友理解邏輯的重要性和不同程度的推理，再透過一些生活化的練習題來讓小朋友思考，強化所學的概念，最後帶領他們了解加強邏輯思考能力的方式，並實際應用在簡單的推理練習中。","img":"i1"}
    c1 = {"_id":{"$oid":"5ce114be1c9d440000ff362c"},"type":"常規型","name":"餐飲服務","season":"2018 春","teacher":"餐飲服務選手 劉博鈞","text":"講師帶領小朋友學習調製飲料和咖啡畫花，並完成柳橙玉兔盤和紙巾摺疊，最後示範火焰櫻桃。藉由這幾個活動來讓小朋友直接體驗餐飲服務的工作內容，在實作中感受餐飲服務業的樂趣。","img":"c1"}
    e1 = {"_id":{"$oid":"5ce116811c9d4400007d63e9"},"type":"企業型","name":"一日策展人","season":"2019 春","teacher":"〈策展人們〉 陳俞安","text":"透過說明策展人的工作和策展的原則，讓小朋友對於策展有更多的了解，再讓各組共同發揮想像力，實際策展，並且上台進行發表。最後則再透過講師對策展理論的更深入說明，讓各組優化原先的成果，從中體會策展的樂趣。","img":"e1"}
    
    componentDidMount(){
        window.scrollTo(0,0);
        this.getCourseInfo(); 
        
    }

    // getCourseInfo = async () => {
    //     await fetch("http://localhost:3001/api/getCourses")
    //         .then(data => data.json())
    //         .then(res => this.setState({ data: res.data }))
    //         .then( () => this.setState( { typeR: this.state.data.filter(function(val) {return val.type === "常規型";}) }  )  )
    //         .catch((error) => {
    //             console.log(error);});

    // };

    

    getCourseInfo = async () => {
        // await fetch("http://localhost:3001/api/getCourses")
        await fetch("http://localhost:3001/api/getCourses")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
        let typeR = null, typeA = null, typeC = null, typeE = null, typeI = null, typeS = null;
        typeR = await this.state.data.filter(function(val) {
            return val.type === "實作型";
        }); 
        typeA = await this.state.data.filter(function(val) {
            return val.type === "藝術型";
        }); 
        typeS = await this.state.data.filter(function(val) {
            return val.type === "社交型";
        }); 
        typeI = await this.state.data.filter(function(val) {
            return val.type === "研究型";
        }); 
        typeC = await this.state.data.filter(function(val) {
            return val.type === "常規型";
        }); 
        typeE = await this.state.data.filter(function(val) {
            return val.type === "企業型";
        }); 
        await this.setState({ typeR:typeR,typeA:typeA,typeE:typeE,typeI:typeI,typeS:typeS, typeC:typeC });

    };


    render(){

        return(

            <div className = "course_text">            
                <h2>涵蓋多元領域・全面探索興趣</h2>
                <h3>包含Holland的六型RIASECR職群</h3> <br/>
                {/* <div className = "course_row">         
                    <BlueSquare en = 'Realistic' ch = '實做型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div>
                <div className = "course_row">         
                    <BlueSquare en = 'Artistic' ch = '藝術型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div>
                <div className = "course_row">         
                    <BlueSquare en = 'Social' ch = '社交型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div>
                <div className = "course_row">         
                    <BlueSquare en = 'Investigative' ch = '研究型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div>
                <div className = "course_row">         
                    <BlueSquare en = 'Conventional' ch = '常規型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div>
                <div className = "course_row">         
                    <BlueSquare en = 'Enterprising' ch = '企業型'/>
                    {this.state.typeR.map((item, key) => 
                        <PicSquare course_name = {item.name} course_teacher = {item.teacher} course_season = {item.season}
                        course_intro = {item.text} pic = {require('../../images/home_photos/3.JPG')}/>)
                    }
                </div> */}

                <CourseRow en = 'Realistic' ch = '實作型' courses = {this.state.typeR}/>
                <CourseRow en = 'Artistic' ch = '藝術型' courses = {this.state.typeA}/>
                <CourseRow en = 'Social' ch = '社交型' courses = {this.state.typeS}/>
                <CourseRow en = 'Investigative' ch = '研究型' courses = {this.state.typeI}/>
                <CourseRow en = 'Conventional' ch = '常規型' courses = {this.state.typeC}/>
                <CourseRow en = 'Enterprising' ch = '企業型' courses = {this.state.typeE}/>               
            </div>

        )
    }

};

export default Course;