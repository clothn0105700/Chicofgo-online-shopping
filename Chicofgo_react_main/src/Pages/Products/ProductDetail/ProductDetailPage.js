import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cardDetail } from '../../../Config/ProductConfig';
import Path from '../../../Layout/Item/Path/Path';
import styles from './ProductDetail.module.scss';
// import axios from 'axios';
import { BsFillReplyFill } from 'react-icons/bs';
import mainPic from '../../../Img/ProductsTest/test.jpg';

const ProductDetail = () => {
  const {
    detail_contorl,
    product_detail,
    product_box,
    left_picbox,
    detail_content,
    main_pic,
    btn_contorl,
    group_pic_box,
    group_pic,
    test,
  } = styles;

  const [detail, setDetail] = useState({});
  const location = useLocation();
  useEffect(() => {
    const urlArray = location.pathname.split('/');
    const id = parseInt(urlArray[urlArray.length - 1]);

    setDetail(() => {
      return cardDetail.find((card) => card.id === id);
    });
  }, []);
  return (
    <div className={`${test}`}>
      <div className="custom-container d-flex justify-content-center">
        <div className={`${detail_contorl}`}>
          <Path pathObj={{ path: ['．商品詳細'] }} />
          <div className={`${btn_contorl} d-flex justify-content-end mb-3`}>
            <button className="btn1 d-flex align-items-center justify-content-center fs-5">
              <BsFillReplyFill />
              回商品頁
            </button>
          </div>
          <div className={`${product_detail}`}>
            <div className={`${product_box} d-flex`}>
              <div className={`${left_picbox} d-flex flex-column`}>
                <div className={`${main_pic}`}>
                  <img src={mainPic} alt="" />
                </div>
                <div className={`${group_pic_box} d-flex align-items-center`}>
                  <div className={`${group_pic}`}>
                    <img src={mainPic} alt="" />
                  </div>
                </div>
              </div>
              <div className={`${detail_content}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4>{detail.title}</h4>
        <p>{detail.content}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
