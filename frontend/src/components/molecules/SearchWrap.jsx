import React from 'react';
import './style.scss'


export const SearchWrap = () => {
    return (
       <div className="searchArea">
        <div className="searchInner">
            <input className="searchField" placeholder="エリア・駅名" />
            <input className="searchField" placeholder="ジャンル・料理名" />
        </div>
        <div className="searchButton">検索する</div>
      </div>
    );
};
