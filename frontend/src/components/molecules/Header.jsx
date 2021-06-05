import React , { Component, useState } from 'react';
import './style.scss'
// ハンバーガーメニューのライブラリ
import { slide as Menu } from "react-burger-menu";
// ReactRouterDom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Dishes } from  '../templates/dishes'
import { TopPage } from  '../templates/topPage'



export const Header = ({
  ...props
}) => {
  return (
      <div className="HeaderWrap">
        <div className="headerLeft">
          <h2>OnePlate</h2>
        </div>
        <div>
          <Menu {...props} left
            pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                <Link  to="/" className="menu-item">ホーム</Link>
                <Link  to="/dishes" className="menu-item">投稿一覧ページ</Link>
                <Link  to="/" className="menu-item">お店用ログインページ</Link>
          </Menu>
        </div>
        <div className="headerRight">
          <p><a href="#">ログイン</a></p>
        </div>
      </div>
    );
};
