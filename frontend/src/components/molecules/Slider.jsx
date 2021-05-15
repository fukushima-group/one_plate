import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Slider
const SliderContainer = styled.div`
  padding: 70px 0 0 0;
  position: relative;
-webkit-box-sizing: border-box;
`;
const SlideItem = styled.div`
  position:relative;
`; 

const SliderTxt = styled.h2`
  z-index:10;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
  color:white;
  font-weight:bold;
`;

// ReactSlick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
              position: "absolute", 
              top:"100px",
              right:"25px",
              zIndex:"999"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
              position: "absolute", 
              top:"100px",
              left:"25px",
              zIndex:"999" }}
      onClick={onClick}
    />
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
        <SliderContainer>
         <Slider {...settings}>
          <SlideItem>
            <SliderTxt>キャッチコピー</SliderTxt>
            <img src={`${process.env.PUBLIC_URL}/topPageImage.jpg`} style={{width:"100%"}} />
          </SlideItem>
          <SlideItem>
            <SliderTxt>キャッチコピー2</SliderTxt>
            <img src={`${process.env.PUBLIC_URL}/kv2.jpg`} style={{width:"100%"}} />
          </SlideItem>
          <SlideItem>
            <SliderTxt>キャッチコピー3</SliderTxt>
            <img src={`${process.env.PUBLIC_URL}/kv3.jpg`} style={{width:"100%"}} />
          </SlideItem>
         </Slider>
      </SliderContainer>
    );
};
