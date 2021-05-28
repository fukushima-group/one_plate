import React , { Component, useState } from 'react';
import styled from 'styled-components';
import { HumbergerIcon } from '../atoms/Humberger';
import { Nav } from '../atoms/Nav';

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

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
    <GlobalHeader>
      <HeaderTitle>One Plate</HeaderTitle>
      <HumbergerIcon  open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} />
    </GlobalHeader>
    );
};

