// pagesのディレクトリに実際にrenderするファイルをおく
import React , { Component, useState } from 'react';
import '../style/reset.scss'
import '../style/base.scss'
import '../style/general.scss' // グローバルスタイル適用
import  { Header }  from '../components/molecules/Header';
import  { TopPage }  from '../components/templates/TopPage';
import  { Dishes }  from '../components/templates/Dishes';

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
          exact
          path="/"
          component={TopPage}
          />
        {/* 一覧ページ */}
        <Route
          exact
          path="/dishes"
          component={Dishes}
          />
    </div>
    </Switch>
  </Router>
  );
};

