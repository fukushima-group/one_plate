import React from 'react';
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const StoreSlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        autoplay: true,
        arrow:true,
      };

    return (
        <div className="sliderContainer">
          <Slider {...settings}>
            <div className="posted">
                <div className="postedTitleWrap">
                    <p>唐揚げ</p>
                    <h4>東京からあげバル＠東京</h4>
                </div>
                <div className="postedContent">
                    <div className="picWrap">
                        <img src={`${process.env.PUBLIC_URL}/karaage.jpg`} style={{width:"100px"}} />
                    </div>
                    <p>
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </p>
                </div>
                <div className="whiteButtonWrap">
                  <a className="whiteButton">VIEW MORE</a>
                </div>
            </div>
          </Slider>
        </div>
    );
};
