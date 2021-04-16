import React from 'react';
import styled from 'styled-components';

const Humburger = styled.div`
  z-index:999;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 48px;
  height: 25px;
  cursor: pointer;
  transition: 1s;
`;

const InnerLine = styled.div`
  display: block;
  position: absolute;
  right: 0;
  width: 35px;
  height: 2px;
  background-color: black;
  transition: 1s;
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

export const HumbergerIcon = () => {
  return (
    <Humburger>
       <InnerLine1  />
       <InnerLine2  />
       <InnerLine3  />
    </Humburger>
  );
};
