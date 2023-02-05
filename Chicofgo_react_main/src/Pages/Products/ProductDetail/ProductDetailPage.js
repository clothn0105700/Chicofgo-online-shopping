import React, { useEffect, useState, useMemo } from 'react';
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
import EvaluateArea from './Component/EvaluateArea';
import MessageArea from './Component/MessageArea';
import axios from 'axios';
import { useProduct } from '../../../Contexts/ProductProvider';
import { useMessage } from '../../../Contexts/MessageProvider';

const ProductDetail = () => {
  const { products, getProducts } = useProduct();
  const { message, getMessage } = useMessage();
  useEffect(() => {
    // async function getMessage() {
    //   let response = await axios.get('http://localhost:3001/api/products');
    //   setMessage(response.data);
    // }

    // getMessage();
    if (products.length === 0) {
      getProducts();
    }
    if (message.length === 0) {
      getMessage();
    }
  }, []);

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
    evaluate_area,
  } = styles;

  // const [detail, setDetail] = useState({});
  const location = useLocation();
  // useEffect(() => {
  //   const urlArray = location.pathname.split('/');
  //   const id = parseInt(urlArray[urlArray.length - 1]);

  //   setDetail(() => {
  //     return cardDetail.find((card) => card.id === id);
  //   });
  // }, []);
  const detail = useMemo(() => {
    const urlArray = location.pathname.split('/');
    const id = parseInt(urlArray[urlArray.length - 1]);
    const outputData = products.find((card) => card.id === id);
    return outputData === undefined ? {} : outputData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const filteredMessage = useMemo(() => {
    const urlArray = location.pathname.split('/');
    const id = parseInt(urlArray[urlArray.length - 1]);
    return message.filter(
      (item) => parseInt(item.message_with_products_id) === id
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <div className={`${test}`}>
      <div className="custom-container d-flex justify-content-center">
        <div className={`${detail_contorl}`}>
          <Path
            pathObj={{ path: ['．商品列表', `．${detail.products_name}`] }}
            url={['/products']}
          />
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <div className={`${btn_contorl} d-flex justify-content-end mb-3`}>
              <button className="btn1 d-flex align-items-center justify-content-center ">
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
                  title={detail.products_name}
                  content={detail.products_info}
                  price={detail.products_price}
                />
              </div>
            </div>
          </div>
          <div className={`${specification_box}`}>
            <br />
            <br />
            <Specification spec={detail.products_spec} />
          </div>
          <div className={`${orther_product}`}>
            <br />
            <br />
            <OrtherWrap />
          </div>
          <div
            className={`${evaluate_area} d-flex flex-column align-items-center `}
          >
            <h3 className="my-5">顧客評論區</h3>
            <EvaluateArea />
          </div>
          {filteredMessage.map((mes) => {
            return (
              <div key={mes.id}>
                <br />
                <MessageArea
                  rating={mes.message_rating}
                  time={mes.message_time}
                  s={mes.speak}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
