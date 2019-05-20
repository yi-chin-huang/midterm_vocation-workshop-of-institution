import React, { Component } from 'react';
import './register_style.css'
import Button from '../../components/button'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null, }    
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }

    getRegister = async () => {
        await fetch("http://localhost:3001/api/getRegister")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
        
          console.log(this.state.data);
      };

    render(){
        return(

            <div className = "register_text"> 
                {/* <button onClick = {this.getRegister}>sads</button> 
                <span id = 'button_tp'><Button BGcolor = '#F29A25' 
                text = {`已報名`} onClick = {this.getRegister()}
                width = '6em' height = '2.5em' fontSize = '1.1em'/></span> */}
          
                <h2>
                    2019｜夏季 直覺ｘ職掘－職業體驗工作坊 <br/>
                    「跟隨自己的直覺，挖掘你的職業潛能」
                </h2>
                <h3>🌈 工作坊簡介</h3>
                <p>
                    「透過舉辦職業體驗營，讓國中生的選擇更自由。」<br/>
                    直覺×職掘從二年前開始，在寒暑假期間，為國中生舉辦職涯探索的工作坊，
                    從2017年暑假的單場報名，到今年寒假發展成為期四日的職業體驗營，
                    邀請各個專業領域的講師，為國中生講解各項職業技能，搭配實作體驗，
                    讓學員從做中學習，在學科外的領域得到成就感，重新激發學習動機。<br/>

                    「從實作體驗的過程中，發現各行各業的精彩和自己的興趣。」<br/>
                    我們發現，儘管近年來政府鼓吹「適性揚才」，
                    社會普遍仍將就讀高中、考取大學，作為評價是否具社會競爭的主要指標，
                    因此學生於學習的道路上，鮮少有升學外的考量。<br/>
                    親子天下的調查指出，現今國中教育現場有高達45%學生缺乏動機、
                    46％之家長對於現在的學校教育感到不滿意，主因有二：孩子在學校無法學到未來能力、
                    課程缺少多元的選擇；職掘團隊透過多元領域職業之體驗實作課程，
                    提供學生技術能力的接觸，補足學校缺乏「動手做」機會之有限。<br/>
                    我們認為，去思考和嘗試「你喜歡做怎樣的事？有什麼興趣？」
                    應該從國中開始，讓學生在面對他們學習的第乙個轉捩點時，
                    可以看見傳統學術外的出路。要做到「適性揚才」，
                    得先瞭解自己的長處、發現自己的興趣，從這出發。<br/>
                    我們冀望，透過「動手做」的課程，能夠在學員的心中種下一顆種子，
                    在未來的某日能夠引發他們去相信，原來我還可以做這樣的事情，
                    願意去探索自我多元的可能。<br/>
                </p>
                <h3>🌈 工作坊特色</h3>
                <h4>
                    涵蓋多元領域，全面探索興趣<br/>
                    強調實作體驗，打造體驗教育<br/>
                    設計課後反思，統整課堂所學<br/>
                    親師結業座談，連結未來發展<br/>
                    邀請專業講師，小班授課互動<br/>
                </h4>
                <p>
                    更知道課程內容，歡迎搜尋臉書粉專「直覺ｘ職掘－職業體驗工作坊」或收看<br/>
                    <a href = 'https://youtu.be/naSrw0-0SNk' target="_blank" rel="noopener noreferrer" >2019 夏季工作坊 活動記錄</a> <br/>
                    <a href = 'https://www.youtube.com/watch?v=9C45CDUXLis&t=1s' target="_blank" rel="noopener noreferrer" >2018 夏季工作坊 活動記錄 </a> <br/>
                    <a href = 'https://www.youtube.com/watch?v=FRnerTDehXs' target="_blank" rel="noopener noreferrer" >2018 春季工作坊 活動記錄 1 </a> <br/>
                    <a href = 'https://www.youtube.com/watch?v=QlBQQOAPqCI&t=119s' target="_blank" rel="noopener noreferrer" >2018 春季工作坊 活動記錄 2 </a> <br/>
                </p>
                <h3>✨ 職掘簡介</h3>
                <p>
                    主辦單位：台大職掘服務社 <br/>
                    我們是一群關心教育的大學生，希望透過多元領域的實作課程，
                    協助國中生在選擇人生方向前，具備充足的資訊，重拾自由選擇的自信。 <br/>
                </p>
                
                <h3>💡 報名流程</h3>
                <p>
                    第一步－確認報名資格：12～15歲的國中生、即將進入國中的準國中生。 <br/>
                    第二步－網路表單填寫：即日開始至05／20（一）23:59為止。 <br/>
                    第三步－繳交課程費用（含餐費）及保證金：依報名成功通知信內容，匯款繳交。 <br/>
                    課程費用：＄3000  <br/>
                    中低收入戶（提供證明文件）費用全免。  <br/>
                    保證金額：＄1000  全程參與後於課程最後乙日退還； <br/>
                    兩週前取消報名、無故缺席將酌扣保證金。） <br/>
                    繳納期限：收到報名成功通知信後5日內，依照郵件中匯款帳號繳交，「未繳視同放棄」。
                </p>
    
                <h3>💡 錄取方式</h3>
                <p>
                    完成表單填寫及繳費流程！ <br/>
                    若人數超過40人（場次分別計），將以隨機抽籤方式篩選名額。
                </p>
                <h3>💡 其他叮嚀</h3>
                <p>
                    午餐一併由主辦單位當日統計訂購； <br/>
                    詳細課程資訊將於六月初寄發信件； <br/>
                    有特殊需求請於表單送出前的［有話想說］欄位說明。
                </p>

                <h3>💡 活動場次</h3>
                <p>
                    台北場：2019年07月02日（二）～ 07月06日（六）08:30～16:30<br/>
                    台南場：2019年07月09日（二）～ 07月13日（六）08:30～16:30
                </p>
                <h3>💡 開始報名</h3>
                <span id = 'button_tp'><Button BGcolor = '#F29A25' link = 'register/taipei' text = {`台北場`} width = '6em' height = '2.5em' fontSize = '1.1em'/></span>
                <span id = 'button_tn'><Button BGcolor = '#FF6E79' link = 'register/tainan' text = {`台南場`} width = '6em' height = '2.5em' fontSize = '1.1em'/></span>

            </div>

        )
    }

};

export default Register;