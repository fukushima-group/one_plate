import React from 'react';
import Slider from "react-slick";
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// ReactSlick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      >
        <img src={`${process.env.PUBLIC_URL}/next.png`} style={{...style,width:"100%",position: "absolute",right:"40px",top:"-10px"}} />
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
              zIndex:"999" }}
      onClick={onClick}
    >
      <img src={`${process.env.PUBLIC_URL}/prev.png`} style={{...style,width:"100%",position: "absolute",left:"40px",top:"-10px"}} />
    </div>
  );
}


  
export const KvSlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 800,
        autoplay: true,
        arrow:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className="topSliderContainer">
          <Slider {...settings}>
            <div className="slideItem">
              <h2 className="sliderTxt">キャッチコピー</h2>
              <img src={`${process.env.PUBLIC_URL}/topPageImage.jpg`} style={{width:"100%"}} />
            </div>
            <div className="slideItem">
              <h2 className="sliderTxt">キャッチコピー2</h2>
              <img src={`${process.env.PUBLIC_URL}/kv2.jpg`} style={{width:"100%"}} />
            </div>
            <div className="slideItem">
              <h2 className="sliderTxt">キャッチコピー3</h2>
              <img src={`${process.env.PUBLIC_URL}/kv3.jpg`} style={{width:"100%"}} />
            </div>
          </Slider>
      </div>
    );
};
