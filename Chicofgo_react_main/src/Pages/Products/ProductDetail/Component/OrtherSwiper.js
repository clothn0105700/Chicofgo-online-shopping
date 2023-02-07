import styles from './OtherSwiper.module.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components

import { cardInfo } from '../../../../Config/ProductConfig';
import PauseOnHover from './PauseOnHover';

const OrtherWrap = () => {
  const { orther_swiper, title_contorl } = styles;

  return (
    <div className={`${orther_swiper} d-flex  flex-column align-items-center`}>
      <h3 className={`${title_contorl} mb-3`}>其他商品</h3>
      <PauseOnHover />
    </div>
  );
};

export default OrtherWrap;
