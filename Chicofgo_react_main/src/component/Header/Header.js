import React from 'react'
import styles from './css/Header.module.scss'

const Header = () => {
  const {
    header,
    component,
    titleall,
    frist_a,
    frist_d,
    text_label_1,
    frist_5,
    frist_b,
    frist_c,
    rught,
    frame_52,
    icon_search,
    login,
    icon_user,
    text_21,
    component_27,
    component_25,
  } = styles

  return (
    <div className={header}>
      <div className={component} />
      <div className={titleall}>
        <div className={frist_a}>
          <div className="text-20roboto-black-tundora-22px">首頁</div>
        </div>
        <div className={frist_d}>
          <div className={text_label_1}>商品1</div>
        </div>
        <a href="#rectangle-40">
          <div className={frist_5}>
            <div className="text_label-2roboto-black-tundora-22px">
              活動專區
            </div>
          </div>
        </a>
        <div className={frist_b}>
          <div className="text_label-3roboto-black-tundora-22px">
            禮券/折價券
          </div>
        </div>
        <div className={frist_c}>
          <div className="text_label-4roboto-black-tundora-22px">會員專區</div>
        </div>
      </div>
      <div className={rught}>
        <div className={frame_52}>
          <img
            className={icon_search}
            src="icon-search.svg"
            alt="Icon/Search"
          />
        </div>
        <div className={login}>
          <img className={icon_user} src="icon-user.svg" alt="Icon/User" />
          <div className={text_21}>登入/註冊</div>
        </div>
        <div className={component_27} />
        <div className={component_25} />
      </div>
    </div>
  )
}

export default Header
