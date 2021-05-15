import React from 'react';
import styled from 'styled-components';


const SearchArea = styled.div`
  width:100%;
  margin-top:-40px;
  position: relative;
  z-index:999;
`

const SearchInner = styled.div`
  width:100%;
  margin-bottom:15px;
`
const SearchField = styled.input`
   display:block;
   width:100%;
   
   line-height:40px;
   &::placeholder {
    text-align:center;
    }
`

const SearchButton = styled.div`
  padding: 0.5rem 2.25rem;
  border:1px solid black;
  font-weight:bold;
  background-color:black;
  color:white;
  text-align:center;
`

export const SearchWrap = () => {
    return (
       <SearchArea>
        <SearchInner>
            <SearchField placeholder="エリア・駅名" />
            <SearchField placeholder="ジャンル・料理名" />
        </SearchInner>
        <SearchButton>検索する</SearchButton>
      </SearchArea>  
    );
};
