import React from 'react';
import styled from 'styled-components';
import { HumbergerIcon } from '../atoms/Humberger/HumbergerIcon.jsx';

// header
const GlobalHeader = styled.header`
  display:flex;
  
  width: 100%; 
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

  
  