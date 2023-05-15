import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cardDetail } from '../../../Config/ProductConfig';
import Path from '../../../Layout/Item/Path/Path';
import styles from './ProductDetail.module.scss';
// import axios from 'axios';

const ProductDetail = () => {
  const {
    detail_contorl,
    product_detail,
    product_box,
    left_pic,
    detail_content,
    main_pic,
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
    <>
      <Path pathObj={{ path: ['．商品詳細'] }} />
      <div>
        <h4>{detail.title}</h4>
        <p>{detail.content}</p>
      </div>
      <div className="custom-container">
        <div className={`${detail_contorl}`}>
          <div className={`${product_detail}`}>
            <div className={`${product_box} d-flex`}>
              <div className={`${left_pic} d-flex`}>
                <div className={`${main_pic}`}></div>
              </div>
              <div className={`${detail_content}`}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
