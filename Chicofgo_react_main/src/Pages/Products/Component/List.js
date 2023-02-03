import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../ComponentShare/Card';
import styles from './List.module.scss';
import Path from '../../../Layout/Item/Path/Path';
import {
  brands,
  cates,
  items,
  origins,
  cardInfo,
} from '../../../Config/ProductConfig';

const List = () => {
  const {
    list_control,
    sidebar,
    block_brand,
    block_cate,
    block_items,
    block_origin,
    block_price,
    Inquire,
    text_c,
    card_group,
    card_control,
    card_block,
    list_container,
  } = styles;
  //列表選項下拉
  const [showMore, setShowMore] = useState(false);
  const [showMoreCate, setShowMoreCate] = useState(false);
  const [showMoreItem, setShowMoreItem] = useState(false);
  const [showMoreOrigin, setShowMoreOrigin] = useState(false);
  const navigate = useNavigate();
  function clickHandler() {
    setShowMore((pre) => !pre);
  }
  function clickHandlerCate() {
    setShowMoreCate((pre) => !pre);
  }
  function clickHandlerItem() {
    setShowMoreItem((pre) => !pre);
  }
  function clickHandlerOrigin() {
    setShowMoreOrigin((pre) => !pre);
  }
  //到商品細節頁
  function goToDetail(cardId) {
    navigate(`/products/product_detail/${cardId}`, { replace: false });
  }

  return (
    <div className="custom-container d-flex justify-content-center">
      <div className={list_container}>
        <Path pathObj={{ path: ['．商品列表'] }} />
        <div className={`${list_control} row mx-2`}>
          <div className={`${sidebar} col-md-2 d-flex flex-column `}>
            <div className={`${block_brand} d-flex flex-column px-2`}>
              <h4>品牌</h4>
              {brands
                .filter((brand, index) => (showMore ? true : index <= 3))
                .map((brand) => {
                  return (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="gridCheck1">
                        {brand.name}
                      </label>
                    </div>
                  );
                })}
              {/* <button onClick={clickHandler}>{showMore ? '▲' : '▼'}</button> */}
              {!showMore && (
                <button className="btn2" onClick={clickHandler}>
                  更多 ▼
                </button>
              )}
            </div>

            <div className={`${block_cate} d-flex flex-column px-2`}>
              <h4>類別</h4>
              {cates
                .filter((cate, index) => (showMoreCate ? true : index <= 3))
                .map((cate) => {
                  return (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="gridCheck1">
                        {cate.name}
                      </label>
                    </div>
                  );
                })}
              {/* <button onClick={clickHandler}>{showMore ? '▲' : '▼'}</button> */}
              {!showMoreCate && (
                <button className="btn2" onClick={clickHandlerCate}>
                  更多▼
                </button>
              )}
            </div>

            <div className={`${block_items} d-flex flex-column px-2`}>
              <h4>品項</h4>
              {items
                .filter((item, index) => (showMoreItem ? true : index <= 3))
                .map((item) => {
                  return (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="gridCheck1">
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              {/* <button onClick={clickHandler}>{showMore ? '▲' : '▼'}</button> */}
              {!showMoreItem && (
                <button className="btn2" onClick={clickHandlerItem}>
                  更多▼
                </button>
              )}
            </div>

            <div className={`${block_origin} d-flex flex-column px-2`}>
              <h4>產地</h4>
              {origins
                .filter((origin, index) => (showMoreOrigin ? true : index <= 3))
                .map((origin) => {
                  return (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="gridCheck1">
                        {origin.name}
                      </label>
                    </div>
                  );
                })}
              {/* <button onClick={clickHandler}>{showMore ? '▲' : '▼'}</button> */}
              {!showMoreOrigin && (
                <button className="btn2" onClick={clickHandlerOrigin}>
                  更多▼
                </button>
              )}
            </div>

            <div className={`${block_price} d-flex flex-column px-2`}>
              <h4>價格範圍</h4>
              <div className="price-check">
                <input type="text" className={text_c} placeholder="最小值$" />

                <div>到</div>
                <input type="text" className={text_c} placeholder="最大值$" />
              </div>
              <button type="submit" className={`btn1 ${Inquire} `}>
                查詢
              </button>
            </div>
          </div>
          <div className={`${card_block} col-12 col-md-10 `}>
            <div className={`${card_group} row mx-0`}>
              {cardInfo.map((info) => {
                return (
                  <div
                    className={`${card_control} col-6 col-md-3 px-0 mb-3 `}
                    key={info.id}
                    onClick={() => goToDetail(info.id)}
                  >
                    <Card
                      title={info.title}
                      rating={info.rating}
                      price={info.price}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
