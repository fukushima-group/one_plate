// 再利用できるかもだから、一応残しておく

import React from "react";
import styled from "styled-components";
import { BaseButton } from "components/atoms/Button/BaseButton";

const SignButton = styled(BaseButton)`
  background-color: black;
`;

export const SignUpButton = () => {
  return (
    <>
      <SignButton>アカウント登録</SignButton>
    </>
  );
};
