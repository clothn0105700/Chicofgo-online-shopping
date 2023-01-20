import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../ComponentShare/Card';
import styles from './List.module.scss';
import Path from '../../../Layout/Item/Path/Path';
import { brands, cardInfo } from '../../../Config/ProductConfig';

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

  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  function clickHandler() {
    setShowMore((pre) => !pre);
  }

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
              <button onClick={clickHandler}>{showMore ? '▲' : '▼'}</button>
            </div>

            <div className={`${block_cate} d-flex flex-column px-2`}>
              <h4>類別</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  罐裝咖啡
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  即溶咖啡
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  咖啡豆
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  膠囊咖啡
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  奶精
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  濾掛
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  冰滴壺
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  奶泡機
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  咖啡機
                </label>
              </div>
            </div>

            <div className={`${block_items} d-flex flex-column px-2`}>
              <h4>品項</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  三合一
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  二合一
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  黑咖啡
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  拿鐵
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  美式咖啡
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  義式咖啡
                </label>
              </div>
            </div>

            <div className={`${block_origin} d-flex flex-column px-2`}>
              <h4>產地</h4>
              <div className="form-check ">
                <input className="form-check-input " type="checkbox" />
                <label className="form-check-label" for="gridCheck1">
                  巴西
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  印尼
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  肯尼亞
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  夏威夷
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label class="form-check-label" for="gridCheck1">
                  義大利
                </label>
              </div>
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
                    <Card title={info.title} rating={info.rating} />
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
