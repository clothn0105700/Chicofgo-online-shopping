import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../../../ComponentShare/Card';
import Card1 from '../../Component/Card1';
import './PauseOnHover.scss'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="container">
        <div>
          <h2>活動優惠中</h2>
          <Slider {...settings}>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card1 />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
