import React from 'react'
import styles from './css/Footer.module.scss'

const Footer = () => {
  const { footer, frame_337, frame_338, test, text_2, text_3, test1 } = styles

  return (
    <div className={footer}>
      <div className={frame_337}>
        <img
          className="logo"
          src="https://anima-uploads.s3.amazonaws.com/projects/63a3ef767235f4e0ffbaf9be/releases/63b3e77d4b950e99f52e8f4a/img/logo@2x.png"
          alt="logo"
        />
      </div>
      <div className={frame_338}>
        <p className={test}>
          關於我們 <br />
          <br />
          品牌故事 <br />
          <br />
          商店簡介 <br />
          &nbsp;&nbsp;
          <br />
          會員權益聲明
        </p>
        <p className={text_2}>
          購物說明 <br />
          <br />
          付款方式 <br />
          <br />
          運送方式 <br />
          <br />
          退換貨方式
        </p>
        <p className={text_3}>
          客服資訊 <br />
          <br />
          客服留言 <br />
          <br />
          常見問題 <br />
          <br />
          隱私權及網站使用條款
          <br />
          <p className={test1}>123456</p>
          <p className="test1">123456</p>
          <button className="btn btn-info">123</button>
        </p>
      </div>
    </div>
  )
}

export default Footer
