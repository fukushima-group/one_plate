import styled from "styled-components";
import { pc, sp, tab } from "media";

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

export const SignUpRegisterTitle = styled.h2`
  // eslint-disable-line no-unused-vars
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 0.04em;
`;

export const SignUpRegisterSubTitle = styled.div`
  font-size: 16px;
  line-height: 1.69;
  margin-bottom: 20px;
`;

export const SignUpLogin = styled.a`
  text-decoration: none;
  color: black;
`;

export const SignUpConfirmLavel = styled.div`
  text-align: left;
  font-weight: bold;
  margin: 8px;
`;

export const SignUpConfirm = styled.div`
  margin: 0 20px 15px 8px;
  letter-spacing: 0.04em;
  display: flex;
`;
