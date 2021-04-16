import React from 'react';
import styled from 'styled-components';
import { HumbergerIcon } from '../components/atoms/Humberger/HumbergerIcon';

// 全体をWrapしたもの(JSXを返す用)
const Container = styled.div`
  font-family: "Noto Sans  CJK JP Bold", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
  overflow-x:hidden;
`;

// ヘッダーの実装
const GlobalHeader = styled.header`
  position: relative;
  display:flex;
  height: 100%;
  overflow: auto;
  positon:fixed;
  -webkit-overflow-scrolling: touch;
  justify-content: space-between;
  padding:5%;
`;

const HeaderTitle = styled.div`
font-size:20px;
`;


// styled-component
export const Index = () => {
  return (
    <Container>
      <GlobalHeader>
        <HeaderTitle>One Plate</HeaderTitle>
        <HumbergerIcon />
      </GlobalHeader>
      <img src={`${process.env.PUBLIC_URL}/topPageImage.jpg`} style={{width:"100%"}} />
    </Container>
  );
};

