import React , { Component, useState } from 'react';
import './style.scss'
import { slide as Menu } from "react-burger-menu";



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
              <a to="/some-page-link" className="menu-item" >
                投稿一覧ページ
              </a>
              <a to="/some-page-link" className="menu-item" >
                マイページ
              </a>
              <a to="/some-page-link" className="menu-item" >
                投稿ページ
              </a>
              <a to="/some-page-link" className="menu-item" >
                他のページ
              </a>
        </Menu>
      </div>
      <div className="headerRight">
        <p><a href="#">ログイン</a></p>
      </div>
    </div>
    );
};

