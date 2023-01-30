import React from 'react';
import styles from './ProductInfo.module.scss';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';

const Productinfo = (props) => {
  const { title, content, price, productsCount } = props;
  const {
    info_contorl,
    spe_text,
    products_count,
    button_wrap,
    minus_style,
    input_style,
    plus_style,
    collect_cart,
    btn_collect,
    btn_cart,
    title_box,
    content_box,
  } = styles;

  return (
    <div>
      <div className={`${info_contorl} d-flex flex-column`}>
        <div className={`${title_box}`}>
          <h3>{title}</h3>
        </div>
        <div className={`${content_box}`}>
          <p className="mt-2">{content}</p>
        </div>

        <h4 className="d-flex mt-2">
          價格:<div className="mx-3">{price}</div>
        </h4>
        <h4 className="mt-3">
          <div className="d-flex align-items-center">
            規格:
            <button className="btn1 mx-3 ">
              <div className={spe_text}>1箱/10包入</div>
            </button>
            <button className="btn1 mx-3">
              <div className={spe_text}>1箱/20包入</div>
            </button>
            <button className="btn1 mx-3">
              <div className={spe_text}>1箱/25包入</div>
            </button>
          </div>
        </h4>
        <div className="mt-5">
          <h4>總計:{price} 元</h4>
          <div className={`${products_count} mt-3`}>
            <h4>數量</h4>
            <div className={`${button_wrap} d-flex align-items-center`}>
              <button
                className={`${minus_style}`}
                value={productsCount}
                onClick={(e) => {}}
              ></button>
              <input
                type="text"
                className={`${input_style}`}
                value={productsCount}
                onChange={(e) => {}}
              />
              <button
                className={`${plus_style}`}
                value={productsCount}
              ></button>
            </div>
          </div>
        </div>
        <div
          className={`${collect_cart} d-flex align-items-center justify-content-between mt-3`}
        >
          <button
            className={`${btn_collect} d-flex align-items-center justify-content-center`}
          >
            <FaBookmark className="mx-2" />
            加入收藏
          </button>
          <button
            className={`${btn_cart} d-flex align-items-center justify-content-center`}
          >
            <FaShoppingCart className="mx-2" />
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
