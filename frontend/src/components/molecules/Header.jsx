import React , { Component, useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from "react-burger-menu";

// header
const GlobalHeader = styled.header`
  display:flex;
  position:fixed;
  width: 100%;
  height:72px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding:0 15px;
  z-index:36500;
`;

const HeaderTitle = styled.h2`
`;

const Link = styled.a`

`;

var styles = {
  bmMenuWrap: {
    transition: ''
  }
}

export const Header = ({
  ...props
  
}) => {
  return (
    <GlobalHeader>
      <HeaderTitle>One Plate</HeaderTitle>
      <Menu {...props} left width={250} 
      pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Link to="/some-page-link" className="menu-item" >
          ホームページ
        </Link>

        <Link to="/some-page-link" className="menu-item" >
          ページ2
        </Link>

        <Link to="/some-page-link" className="menu-item" >
        ページ3
        </Link>

        <Link to="/some-page-link" className="menu-item" >
        ページ4
        </Link>
       </Menu>
    </GlobalHeader>
    );
};

