# Vocation Workshop of Institution

### 直覺 X 職掘  職業體驗工作坊
「職掘服務社」的工作坊介紹及活動報名網站

### Deployed Link
https://vocation-workshop-institution.herokuapp.com

### 使用/操作方式

建議使用Chrome瀏覽器，以全銀幕或接近全銀幕視窗瀏覽網頁。

安裝方式：

```
git clone https://github.com/yi-chin-huang/midterm_vocation-workshop-of-institution.git
npm install
cd vocational_workshop
npm install
cd ..
npm start
```

### 詳細說明

1. 首頁(home): 上方之相框會自動播放圖片，也可以將滑鼠移動到相框左右側更換相片。滑鼠滑到下面影片時，才會自動播放。
2. 課程介紹(course)：依照RASICE職群分類，介紹歷年曾經舉辦過的課程。每個類別成一列，向右滑動可以看到更多課程。游標移至圖片時圖片會變暗，並出現課程簡介。課程簡介的文字由mongoDB取而出。
3. 活動介紹(activity): 最上方為 直覺 X 職掘 懶人包，點按左右兩側箭頭可以換頁，每隔五秒鐘也會自動換頁。下方有 直覺 X 職掘 的簡介、目標、照片等。
4. 活動報名(register)：包含工作坊內容簡介、報名流程、活動場次等，最下方點按台北場或台南場按鈕可進入報名頁面。報名頁詳述活動時間、地點、報名規定等，下方有報名表單，必填項目若留空便按「確認送出」，會出現「請填寫這個欄位」的提示。按下「確認送出」後資料會post至mongoDB，若成功送出會有「報名成功」的alert。
5. 活動回顧(review): 時間軸上有直覺 X 職掘歷年辦過的工作坊，點按黃豆可以看到每次工作坊的影片和課表。
6. 組織介紹(team): 介紹 直覺 X 職掘 的幹部與成員合照。 

### 使用與參考之框架/模組/原始碼
1. 首頁和活動介紹的相框使用 [Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/)
2. 初期建置連接 react 與 node 參考 [Let’s build a full stack MongoDB, React, Node and Express (MERN) app](https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274)


### 我的貢獻
全部的前後端都由我自己手刻

### 心得
這次的project中，我學習到用React and Node連接，做出包含前後端功能網站。我遇到的一些困難有：
1. 課程介紹頁面用到大量的圖片，還要從資料庫中get文字，讀取需要比較久的時間。我先讓state中每列有一個寫在local的object，等他fetch好再setState加入全部的圖片與文字。
2. 原本我用BrouserRouter進行Routing，但我發現頁面重新整理後，就會出現Cannot get ...的錯誤。後來我改用HashRouter便解決了這個問題。
3. 將網站deploy上Heroku時，需要在server.js、package.json等檔案加入一些設定才能在Heroku上運作，為此我花了一些時間並請教同學研究。此外，我一開始因為照片檔案太多無法順利推上，後來將所有照片品質降低才沒超過Heroku的限制。

### 未來展望
之後希望加入下列功能：
1. admin page: 管理已報名學員資訊
2. 讓網站可以響應平板或手機，並且在各個瀏覽器上都能順利排版。
