import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cardDetail } from '../../../Config/ProductConfig';
import Path from '../../../Layout/Item/Path/Path';
import styles from './ProductDetail.module.scss';
// import axios from 'axios';
import { BsFillReplyFill } from 'react-icons/bs';
import mainPic from '../../../Img/ProductsTest/test.jpg';
import PicRender from './Component/PicRender';
import ProductInfo from './Component/ProductInfo';
import Specification from './Component/Specification';
import OrtherWrap from './Component/OrtherSwiper';

const ProductDetail = () => {
  const [productsCount, setProductsCount] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
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
    specification_box,
    orther_product,
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
          <Path
            pathObj={{ path: ['．商品列表', `．${detail.title}`] }}
            url={['/products']}
          />
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <div className={`${btn_contorl} d-flex justify-content-end mb-3`}>
              <button className="btn1 d-flex align-items-center justify-content-center fs-5">
                <BsFillReplyFill />
                回商品列表
              </button>
            </div>
          </Link>

          <div className={`${product_detail}`}>
            <div className={`${product_box} d-flex`}>
              <PicRender />

              <div className={`${detail_content}`}>
                <ProductInfo
                  productsCount={productsCount}
                  setProductsCount={setProductsCount}
                  title={detail.title}
                  content={detail.content}
                  price={detail.price}
                  dataLoaded={dataLoaded}
                />
              </div>
            </div>
          </div>
          <div className={`${specification_box}`}>
            <br />
            <br />
            <Specification />
          </div>
          <div className={`${orther_product}`}>
            <br />
            <br />
            <OrtherWrap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
