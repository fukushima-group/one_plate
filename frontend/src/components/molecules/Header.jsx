import React from 'react';
import styled from 'styled-components';
import { HumbergerIcon } from '../atoms/Humberger/HumbergerIcon.jsx';

// header
const GlobalHeader = styled.header`
  display:flex;
  positon:fixed;
  position: fixed; /* 要素の位置を固定する */
  width: 100%; /* 幅を指定する */
  background-color: white;
  justify-content: space-between;
  padding:4% 2%;
`;

const HeaderTitle = styled.h2`
`;

export const Header = () => {
    return (
    <GlobalHeader>
      <HeaderTitle>One Plate</HeaderTitle>
      <HumbergerIcon />
    </GlobalHeader>
    );
};

  
  