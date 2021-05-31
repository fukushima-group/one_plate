// pagesのディレクトリに実際にrenderするファイルをおく
import React , { Component, useState } from 'react';
import '../style/reset.css'
import '../style/base.scss'
import '../style/general.scss'
import './style.scss'
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


export const Index = () => {
  // useStylesの呼び出し
  const classes = useStyles();
  return (
    <div className="container">
        <Header />
        <KvSlider />
        <Grid container className={classes.GridContainer} >
            <SearchWrap />
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <h3>新着投稿</h3>
              <StoreSlider />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <h3>最近見たお店</h3>
              <StoreSlider />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
              <h3>オススメのお店</h3>
              <StoreSlider />
          </Grid>
        </Grid>
    </div>
  );
};

