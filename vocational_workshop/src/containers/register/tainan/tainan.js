import React, { Component } from 'react';
import '../register_style.css'
import RegisterForm from '../../../components/register_form'
class Tainan extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className = "register_text">
        
                <h2>直覺ｘ職掘－職業體驗工作坊【台南場】</h2>
                <h2>活動資訊</h2>
                <h3><span role="img" aria-label="bulb">💡</span> 課程內容</h3>
                <p>
                    橫跨Holland的六型職群 RIASECR— <br/>
                    Realistic（實做型）、Investigative（研究型）、Artistic（藝術型） <br/>
                    Social（社交型）、Enterprising（企業型）、Conventional（常規型） <br/>
                    包含 咖啡廳經營、Youtuber品牌行銷、會計作帳、程式設計、
                    紀錄片拍攝、飲調、策展規劃 多元課程。 <br/>
                </p>
                <h3><span role="img" aria-label="bulb">💡 </span>活動時間</h3>
                <p>
                    課程活動｜2019年07月09日（二）～07月13日（六）08:30～16:30 <br/>
                    結業活動｜2019年07月13日（六）13:30～ 16:30（邀請家長共同參與） <br/>
                </p>
                <h3><span role="img" aria-label="bulb">💡 </span>活動地點</h3>
                <p>
                    課程活動｜成大光復校區、臺南市立中山國民中學 <br/> <br/>
                </p>

                <h2>報名規則</h2>
                <h3><span role="img" aria-label="bulb">💡 </span>報名流程 </h3>
                <p>
                    第一步－確認報名資格：12～15歲的國中生、即將進入國中的準國中生。<br/> 
                    第二步－網路表單填寫：即日開始至05／20（一）23:59為止。<br/> 
                    第三步－繳交課程費用（含餐費）及保證金：依報名成功通知信內容，匯款繳交。<br/> 
                        課程費用：＄3000<br/> 
                                            中低收入戶（提供證明文件）費用全免。<br/> 
                        保證金額：＄1000<br/> 
                                          （全程參與後於課程最後乙日退還；
                                              兩週前取消報名、無故缺席將酌扣保證金。）<br/> 
                        繳納期限：收到報名成功通知信後7日內，依照郵件中匯款帳號繳交，
                                          「未繳視同放棄」。<br/> 
                </p>
    
                <h3><span role="img" aria-label="bulb">💡 </span>錄取方式</h3>
                <p>
                    完成表單填寫及繳費流程！<br/> 
                    若人數超過40人，將以隨機抽籤方式篩選名額。<br/> 
                </p>
                <h3><span role="img" aria-label="bulb">💡 </span>其他叮嚀</h3>
                <p>
                    午餐一併由主辦單位當日統計訂購；<br/> 
                    詳細課程資訊將於六月初寄發信件；<br/> 
                    有其他問題請於表單送出前的「其他問題」欄位說明。<br/> 
                </p>


                <h2>填寫報名表單</h2><br/>

                <h4>＊資料內容請務必仔細確認，確保日後能順利收到團隊信件＊</h4> <br/>
                <RegisterForm location = "tainan"/>

            </div>

        )
    }

};

export default Tainan;