// pagesのディレクトリに実際にrenderするファイルをおく
import React , { Component, useState } from 'react';


export const Dishes = () => {
  return (
    <div className="dishes">
      <div className="searchResult">
        <p>〇〇の検索結果: 〇〇件</p>
      </div>
      <div className="wrap">
        <div className="left">画像がはいる</div>
        <div className="right">
          <div className="top">
            <p className="food">料理名</p>
            <p className="store">お店の名前</p>
          </div>
          <div className="bottom">
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="left">画像がはいる</div>
        <div className="right">
          <div className="top">
            <p className="food">料理名</p>
            <p className="store">お店の名前</p>
          </div>
          <div className="bottom">
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="left">画像がはいる</div>
        <div className="right">
          <div className="top">
            <p className="food">料理名</p>
            <p className="store">お店の名前</p>
          </div>
          <div className="bottom">
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
          </div>
        </div>
      </div>
    </div>
  );
};

