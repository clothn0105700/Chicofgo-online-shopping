import React from 'react'
import './css/Footer.module.scss'
import logoSVG from '../../img/logo.svg'

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="container foor_container row m-auto mt-5 pt-2">
        <div className="col-4">
          <a href="">
            <img src={logoSVG} alt="" />
          </a>
        </div>
        <div className="col-md-7">
          <div className="d-flex justify-content-md-end pe-md-0">
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a className="foot_a" href="">
                  關於我們
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  品牌故事
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  商店介紹
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  會員權益說明
                </a>
              </li>
            </ul>
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a className="foot_a" href="">
                  購物說明
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  付款方式
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  運送方式
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  退換貨方式
                </a>
              </li>
            </ul>
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a href="" className="foot_a">
                  客服資訊
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  客服留言
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  常見問題
                </a>
              </li>
              <li className="py-2">
                <a className="foot_a" href="">
                  隱私權及網站使用條款
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
