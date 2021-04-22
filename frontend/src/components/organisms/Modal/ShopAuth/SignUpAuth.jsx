import React from "react";
import styled from "styled-components";
// import { SignUpButton } from "components/atoms/Button/SignUpButton";
import { Form } from "components/atoms/TextField/Form";
import { pc, sp, tab } from "media";

// const fontSize = styled.div`font-size: 14px;`;

const SignupPopUp = styled.div`
  border-radius: 4px;
  padding: 30px;
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

const SignUpRegiter = styled.div`
  text-align: center;
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

// const SnsButtonForm = styled.div`
//   margin: 40px 0;
//   align-items: center;
// `;

const SignUpLogin = styled.a`
  text-decoration: none;
  color: black;
`;

export const SignUpAuth = () => {
  return (
    <SignupPopUp>
      <SignUpRegiter>
        <SignUpRegisterTitle>SIGN UP</SignUpRegisterTitle>
        <SignUpRegisterSubTitle>会員情報入力</SignUpRegisterSubTitle>
        <Form />
        {/* <SnsButtonForm><SignUpButton /></SnsButtonForm> */}
        <SignUpLogin href="/">ログインはこちら</SignUpLogin>
      </SignUpRegiter>
    </SignupPopUp>
  );
};
