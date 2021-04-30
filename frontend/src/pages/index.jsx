import React , { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../style/index.jsx'
import  { Header }  from '../components/molecules/Header';
import  { KvSlider }  from '../components/molecules/Slider';
import  { SearchWrap  }  from '../components/molecules/SearchWrap';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


// materialUIのCSSを追加
const useStyles = makeStyles({
  // GridLayOut
  GridContainer: {
    margin: "0 auto 4%",
    width: "90%"
  },
});

// common
const Container = styled.div`
  overflow:hidden;
`;

// 新着投稿
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

const PostTxtWrap = styled.p`
 
`;

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


export const Index = () => {
  // useStylesの呼び出し
  const classes = useStyles();

  return (
    <Container>
      <GlobalStyle />
         <Header />
         <KvSlider />
         <Grid container className={classes.GridContainer} >
            <SearchWrap />
         </Grid>
        <Grid container>
          <Grid item xs={12}>
              <H3Description>新着投稿</H3Description>
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
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <H3Description>最近見たお店</H3Description>
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
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <H3Description>オススメのお店</H3Description>
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
          </Grid>
        </Grid>
    </Container>
  );
};

