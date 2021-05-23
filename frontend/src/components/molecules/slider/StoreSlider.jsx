import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Slider
const SliderContainer = styled.div`
  position: relative;
-webkit-box-sizing: border-box;
`;

// Posted
const H3Description = styled.h3`
  position: relative;
  margin: 0 0 0 20px;
  padding:15px 0;
  &::before {
    content: "";
    position: absolute;
    background: #000;
    width: 50px;
    height: 1px;
    left: -60px;
    top: 50%;
  }
}
`

const PostedWrap = styled.div`
    padding:10px;
`;

const PostTitleWrap = styled.div`
    display:flex;
`;

const PostedFoodName = styled.h4`
    padding-right:15px;
`;

const PostedStoreName = styled.h4`
`;

const PostedContent = styled.div`
    display:flex;
    padding:10px;
`;

const PostPicWrap = styled.div`
    text-align:center;
    padding-right:15px;
    max-height:200px;
`;

const PostTxtWrap = styled.p``;

const BlackButton = styled.div`
  padding: 0.5rem 2.25rem;
  border-radius:15px;
  border:1px solid black;
  background-color:black;
  color:white;
  text-align:center;
`;

const WhiteButtonWrap = styled.div`
  text-align:right;
`;

const WhiteButton = styled.a`
  padding: 0.5rem 1rem;
  border:1px solid black;
  background-color:white;
  color:black;
  width:30%;
`;

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
        <SliderContainer>
          <Slider {...settings}>
            <PostedWrap>
                <PostTitleWrap>
                    <PostedFoodName>唐揚げ</PostedFoodName>
                    <PostedStoreName>東京からあげバル＠東京</PostedStoreName>
                </PostTitleWrap>
                <PostedContent>
                    <PostPicWrap>
                        <img src={`${process.env.PUBLIC_URL}/karaage.jpg`} style={{width:"100px"}} />
                    </PostPicWrap>
                    <PostTxtWrap>
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </PostTxtWrap>
                </PostedContent>
                <WhiteButtonWrap>
                  <WhiteButton>VIEW MORE</WhiteButton>  
                </WhiteButtonWrap>
            </PostedWrap>
          </Slider>
      </SliderContainer>
    );
};
