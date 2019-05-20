import React, { Component } from "react";
// import axios from "axios";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import {withRouter} from "react-router-dom";

class RegisterForm extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            name: null,
            birthdate: null,
            pid: null,
            school: null,
            grade: null,
            email: null,
            mobile: null,
            phone: null,
            emergency_name: null,
            emergency_mobile: null,
            emergency_line: null,
            diet: null,
            need: null,
        }; 
    }

    formToJSON = elements => [].reduce.call(elements, (data, element) => {

        data[element.name] = element.value;
        return data;
    
    }, {});
    
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };

    handleSubmit = async e =>{

        e.preventDefault();
        const form = e.target;
        // const f2 = new FormData(form)
        const formJson = this.formToJSON(form.elements);
        await fetch('http://localhost:3001/api/postRegister', {
            method: 'POST',
            body: JSON.stringify(formJson),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(res => { return res.json() })
        .then(res => {
            if(res.success)
                alert('報名成功');
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
        this.props.history.push("/register");
        // this.clear();
        // this.props.history.push('/articles');
        // for (let name of f2.keys()) {
        //     const input = f2.get(name);
        //     console.log(input);
        // }
        

        
  }


  
  

  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div className = "register_content">

        <form id="register" onSubmit={this.handleSubmit}>
            <h5> 學員姓名 </h5>

                <h6>請填寫欲參與課程的國中生姓名。</h6>
                <input type="text" name="name" placeholder = '賴予亭' 
                required/>    
                
            <h5>出生年月日 </h5>

                <h6>僅供辦理保險用，不會洩漏個資。</h6>
                <input type="date" name="birthdate" value = "2013-01-08"
                required /> 
                
            <h5>身分證字號 </h5>
                <h6>僅供辦理保險用，不會洩漏個資。</h6>
                <input type="text" name="pid" placeholder = 'A123456789'
                required /> 
                            
            <h5>就讀學校 </h5>
                <h6>提供工作坊活動進行的分組依據。</h6>
                <input type="text" name="school" placeholder = 'ＯＯ國中'
                required /> 
                            
            <h5>就讀年級 </h5>
                <h6>提供工作坊活動進行的分組依據。</h6>
                <input type="radio" name="grade" value="6" required/> 國小升七年級 <br/>
                <input type="radio" name="grade" value="7" checked/> 七年級升八年級 <br/>
                <input type="radio" name="grade" value="8" /> 八年級升九年級 <br/>
                <input type="radio" name="grade" value="9" /> 九年級升高中 <br/>
                                                          
            <h5>常用信箱</h5>
                <h6>請填寫能夠接收到即時訊息通知的電子郵件；建議填寫家長電子信箱！</h6>
                <input type="email" name="email" placeholder = 'abc@gmail.com' value = 'aa@gmail.com'
                onChange={e => this.setState({ email: e.target.value })} required/> 
                
            <h5>學員手機</h5>
                <h6>請填寫希望能接收到即時簡訊通知的手機號碼。</h6>
                <input type="text" name="mobile" placeholder = '0958-104-721' value = '09988312'
                onChange={e => this.setState({ mobile: e.target.value })} required /> 
                
            <h5>室內電話</h5>
                <h6>請填寫住家電話。</h6>
                <input type="text" name="phone" placeholder = '02-3366-3366' value = '1232131'
                required/> 
                
            <h5>緊急聯絡人</h5>
                <h6>請填寫家長姓名／與學員的關係。</h6>
                <input type="text" name="emergency_name" placeholder = '吳宗錡／母親' value = '吳宗錡／母親'
                required/> 
                
            <h5>緊急聯絡人手機</h5>
                <h6>請填寫能夠接收到即時簡訊通知的手機號碼。</h6>
                <input type="text" name="emergency_mobile" placeholder = '0958-104-721' value = '234'
                required/> 
                
            <h5>緊急聯絡人Line ID</h5>
                <h6>為信箱聯絡的備用選項，非必要填寫。</h6>
                <input type="text" name="emergency_line" placeholder = '' /> 
                
            <h5>學員飲食習慣</h5>
                <h6>為營隊期間訂餐參考依據！</h6>
                <input type="radio" name="diet" value="meat" required/> 葷 <br/>
                <input type="radio" name="diet" value="egg" checked/> 蛋奶素 <br/>
                <input type="radio" name="diet" value="veg"/> 全素 <br/>
                <input type="radio" name="diet" value="other"/> 其他： <input type="text" name="other_diet" /><br/>

            <h5>有無特殊疾病及需求</h5>
                <input type="text" name="need" placeholder = '' /> 
                
            <h5>報名金額確認</h5>
                <input type="radio" name="fee" value="4000" required/> ＄4000（含保證金）<br/>
                <input type="radio" name="fee" value="1000" checked/> ＄1000（中低收入戶，只須繳交保證金）<br/><br/>

            <h5>意願調查</h5>
            <h6>這個區段的填答，將作為日後分組的依據，也是我們瞭解你／妳的一手資料，請認真填答！</h6><br/>
            <h5>你夢想的職業是？為什麼？</h5>
                <input type="text" name="dream_job" placeholder = '' value = 'try' required/> 

            <h5>你為何會想要報名這個工作坊？</h5>
                <input type="text" name="motive" placeholder = '' value = 'try' required/> 

            <h5>你期待在工作坊的期間可以學到？</h5> 
                <input type="text" name="expect" placeholder = '' value = 'try' required/> 

            <div>
                <input type="hidden" name= "location" value={this.props.location}/>
                <input type="submit" name = "submit" className = "submitForm" value = "確認送出" ></input>
            </div>
            
        </form>





      </div>
    );
  }
}

export default withRouter(RegisterForm);
