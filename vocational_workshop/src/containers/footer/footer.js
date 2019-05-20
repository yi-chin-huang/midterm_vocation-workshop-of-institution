import React, { Component } from 'react';
import './footer.css'
import bean_man from '../../images/bean_man.png'
import shovel_man from '../../images/shovel_man.png'
class Footer extends Component {
    render() 
    {
      return (
		<footer>
             <img src = {bean_man} className = "man Bman"/>
            <img src = {shovel_man} className = "man Sman"/>
            <div className = "text_box">
                <p>特別感謝 財團法人林柏壽文教基金會/林本源中華文化教育基金會 / 財團法人新北市大觀書社</p>
                <p>聯絡方式 臉書「直覺x職掘-職業體驗工作坊」/ 電子郵件: vocationworkshop@gmail.com</p>
                <p>Line@ ID: @mxy9824x/ 簡訊電話 吳宗錡 0912467426 / 賴予亭 0958104721</p>
            </div>
        </footer>

      
      )
    }

}

export default Footer;