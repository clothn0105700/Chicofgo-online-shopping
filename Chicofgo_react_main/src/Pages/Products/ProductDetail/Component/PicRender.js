import React, { useEffect, useState } from 'react';
import styles from './PicRender.module.scss';
import mainPic from '../../../../Img/ProductsTest/test.jpg';
import littlePic2 from '../../../../Img/ProductsTest/test2.jpg';
import littlePic3 from '../../../../Img/ProductsTest/test3.jpg';
import { v4 } from 'uuid';

const PicRender = () => {
  const { left_picbox, main_pic, group_pic_box, group_pic } = styles;

  const pics = [mainPic, littlePic2, littlePic3];
  const [picNm, setpicNm] = useState(0);
  const [showPic, setshowPic] = useState(pics[picNm]);
  useEffect(() => {
    setshowPic(picNm[picNm]);
  }, [picNm]);

  return (
    <div>
      <div className={`${left_picbox} d-flex flex-column`}>
        <div className={`${main_pic}`}>
          <img src={pics[picNm]} alt="main product's pic" />
        </div>
        <ul className={`${group_pic_box} d-flex align-items-center`}>
          {pics.map((i, v) => {
            return (
              <li
                onClick={() => setpicNm(v)}
                key={v4()}
                className={`${group_pic}`}
              >
                <img src={i} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PicRender;
