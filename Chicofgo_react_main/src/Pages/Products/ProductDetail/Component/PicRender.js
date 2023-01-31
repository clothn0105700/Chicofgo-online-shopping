import React, { useEffect, useState } from 'react';
import styles from './PicRender.module.scss';
import mainPic from '../../../../Img/ProductsTest/test.jpg';
import littlePic2 from '../../../../Img/ProductsTest/test2.jpg';
import littlePic3 from '../../../../Img/ProductsTest/test3.jpg';

const PicRender = () => {
  const { left_picbox, main_pic, group_pic_box, group_pic } = styles;

  const [imgSelect, setimgSelect] = useState('');

  return (
    <div>
      <div className={`${left_picbox} d-flex flex-column`}>
        <div className={`${main_pic}`}>
          <img src={mainPic} alt="main product's pic" />
        </div>
        <div className={`${group_pic_box} d-flex align-items-center`}>
          <div className={`${group_pic}`}>
            <img src={littlePic2} alt="" />
          </div>
          <div className={`${group_pic}`}>
            <img src={littlePic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicRender;
