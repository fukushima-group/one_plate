import React from "react";
import styled from "styled-components";
import { pc, sp, tab } from "media";

// import { SignUpStep1 } from "components/organisms/Modal/ShopAuth/SignUpStep1";

export const SignUpMain = styled.div`
  padding: 30px;
  text-align: center;

  ${sp`
  margin: 40px auto;
  width: 100%
  height: 100%;
`}
  ${tab`
  margin: 200px auto;
  width: 50%;
  height: 50%;
`}
  ${pc`
  width: 25%;
  height: 60%;
`}
`;

const SignUpRegisterTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 0.04em;
`;

const SignUpRegisterSubTitle = styled.div`
  font-size: 16px;
  line-height: 1.69;
  margin-bottom: 20px;
`;

const SignUpLogin = styled.a`
  text-decoration: none;
  color: black;
`;

export const SignUpPopUp = ({ className, children }) => {
  return (
    <SignUpMain>
      <SignUpRegisterTitle>SIGN UP</SignUpRegisterTitle>
      <SignUpRegisterSubTitle>会員情報入力</SignUpRegisterSubTitle>

      <SignUpLogin href="/">ログインはこちら</SignUpLogin>
    </SignUpMain>
  );
};
