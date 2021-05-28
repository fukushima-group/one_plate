import React , { Component, useState } from 'react';
import styled from 'styled-components';

const Humburger = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 48px;
  height: 25px;
  cursor: pointer;
`;

const InnerLine = styled.div`
  display: block;
  position: absolute;
  right: 0;
  width: 35px;
  height: 2px;
  background-color: black;
  border-radius: 4px;
`;

const InnerLine1 = styled(InnerLine)`
  top: 0;
`;

const InnerLine2 = styled(InnerLine)`
  top: 10px;
`;

const InnerLine3 = styled(InnerLine)`
  bottom: 0px;
`;

export const HumbergerIcon = ({
  open,
  setOpen,
}) => {
  return (
    <Humburger
          type="button"
          className="button hamburger"
          aria-controls="global-nav"
          //openの値はfalse
          expanded={open}
          //クリックされると真偽値が逆になる。falseの場合trueに切り替わる
          onClick={() => setOpen(!open)}
    >
      <InnerLine1  />
      <InnerLine2  />
      <InnerLine3  />
    </Humburger>
  );
};
