import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../style/index.jsx'
import  { Header }  from '../components/molecules/Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

// materialUIのCSSを追加
const useStyles = makeStyles({
  // GridLayOut1
  GridL1Container:{
    padding: "3% 7%",
    width: "100%"
  },
  // GridLayOut
  GridContainer: {
    padding: "3% 4%",
    margin: "2% auto",
    width: "90%"
  },
 
});

// common
const Container = styled.div`
  overflow-x:hidden;
  height:3000px;
`;

const H2 = styled.h2`
    margin:0;
`;

const H3 = styled.h3`
    margin:0;
`;

const H4 = styled.h4`
    margin:0;
`;

const P = styled.p`
 font-size:12px;
 text-align: justify;
 margin:5% 0;
 line-height:2.3;
`;

// GridLayOut1
const L1LeftH2 = styled(H2)`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  height: 260px;
  letter-spacing: 0.3rem;
`;

const L1RightP = styled(P)`
  margin: 20px 0;
  font-weight:600;
`;

// GridLayOut3
const L3H3 = styled(H3)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #000;
    width: 50px;
    height: 1px;
    left: -60px;
    top: 50%;
  }
}
`

const BlackButton = styled.div`
  padding: 0.5rem 2.25rem;
  border-radius:15px;
  border:1px solid black;
  background-color:black;
  color:white;
  text-align:center;
`;

// GridLayOut4
const WhiteButtonWrap = styled.div`
  text-align:right;
`;

const WhiteButton = styled.a`
  padding: 0.5rem 1rem;
  border:1px solid black;
  background-color:white;
  color:black;
  width:30%;
`;


export const Index = () => {
  // useStylesの呼び出し
  const classes = useStyles();

  return (
    <Container>
      <GlobalStyle />
      {/* header */}
         <Header />
      {/* endheader */}

      {/* kv */}
      <img src={`${process.env.PUBLIC_URL}/topPageImage.jpg`} style={{width:"100%",padding:"60px 0 0 0"}} />
      {/* endkv */}


      {/* GridLayOut1 */}
      <Grid container className={classes.GridL1Container}>
        <Grid item xs={4}>
           <L1LeftH2>渾身の一皿を見つけよう</L1LeftH2>
        </Grid>
        <Grid item xs={8} >
        <L1RightP>(文章設定必須)ダミーダミーダミーダミーダミーダミー
          ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
          ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
          ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
          </L1RightP>
        </Grid>
      </Grid>
      {/* endGridLayOut1 */}

      {/* GridLayOut2 */}
      <Grid container className={classes.GridContainer} >
        <img src={`${process.env.PUBLIC_URL}/L4.jpg`} style={{width:"100%"}} />
      </Grid>
      {/* endGridLayOut2 */}


      {/* GridLayOut3 */}
      <Grid container className={classes.GridContainer}>
        <Grid item xs={12}>
            <L3H3>東京唐揚げバル</L3H3>
            <P>
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
            </P>
            <H4>STORE INFO</H4>
            <P>
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
            </P>
            <BlackButton>お店の詳細はこちら</BlackButton>
        </Grid>
      </Grid>
      {/* endGridLayOut3 */}

      {/* GridLayOut4 */}
      <Grid container className={classes.GridContainer} >
        <Grid item xs={12}>
          <H3>NEWS</H3>
          <P>
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
            ダミーダミーダミーダミーダミーダミーーダミーダミーダミーダミーダミーダミーダミーダミー
          </P>
          <WhiteButtonWrap>
            <WhiteButton>VIEW MORE</WhiteButton>
          </WhiteButtonWrap>
        </Grid>
      </Grid>
      {/* endGridLayOut4 */}


    </Container>
  );
};

