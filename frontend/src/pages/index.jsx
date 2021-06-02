// pagesのディレクトリに実際にrenderするファイルをおく
import React , { Component, useState } from 'react';
import '../style/reset.css'
import '../style/base.scss'
import '../style/general.scss'
import  { Header }  from '../components/molecules/Header';
import  { TopPage }  from '../components/templates/topPage';
import  { Dishes }  from '../components/templates/dishes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export const Index = () => {
  return (
  <Router>
    <Switch>
    <div className="container">
        <Header />
        {/* トップページ */}
        <Route
          // exactはパスが完全一致する時だけレンダリングする＆デフォはfalseになっている
          exact
          path="/">
          <TopPage />
        </Route>
        {/* 一覧ページ */}
         <Route
          // exactはパスが完全一致する時だけレンダリングする＆デフォはfalseになっている
          exact
          path="/dishes">
          <Dishes />
          </Route>
    </div>
    </Switch>
  </Router>
  );
};

