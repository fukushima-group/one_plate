// pagesのディレクトリに実際にrenderするファイルをおく
import React , { Component, useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../style/index.jsx'
import  { Header }  from '../components/molecules/Header';
import  { KvSlider }  from '../components/molecules/slider/Slider';
import  { StoreSlider }  from '../components/molecules/slider/StoreSlider';
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

// H3
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

const BlackButton = styled.div`
  padding: 0.5rem 2.25rem;
  border-radius:15px;
  border:1px solid black;
  background-color:black;
  color:white;
  text-align:center;
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
              <StoreSlider />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <H3Description>最近見たお店</H3Description>
              <StoreSlider />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <H3Description>オススメのお店</H3Description>
              <StoreSlider />
          </Grid>
        </Grid>
    </Container>
  );
};

