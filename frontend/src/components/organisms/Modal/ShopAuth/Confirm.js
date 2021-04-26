import React from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "components/organisms/Modal/ShopAuth/updateAction";
import "components/organisms/Modal/ShopAuth/styles.css";
import styled from "styled-components";
import { pc, sp, tab } from "media";

const SignUpMain = styled.div`
  border-radius: 4px;
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
  margin-bottom: 30px;
  letter-spacing: 0.04em;
`;

const SignUpConfirm = styled.div`
  margin: 20px 20px;
  letter-spacing: 0.04em;
  display: flex;
  // justify-content: center;
  // align-item: center;
`;

export const Confirm = () => {
  const { state } = useStateMachine(updateAction);

  return (
    <SignUpMain>
      <SignUpRegisterTitle>確認画面</SignUpRegisterTitle>
      <SignUpConfirm>
        代表者氏名：{state.last_name}
        {state.first_name}
      </SignUpConfirm>
      <SignUpConfirm>
        代表者氏名（カナ）：{state.last_name_kana}
        {state.first_name_kana}
      </SignUpConfirm>
      <SignUpConfirm>メールアドレス：{state.email}</SignUpConfirm>
      <SignUpConfirm>店舗名：{state.shop_name}</SignUpConfirm>
      <SignUpConfirm>電話番号：{state.phone_number}</SignUpConfirm>
      <SignUpConfirm>郵便番号：{state.postal_code}</SignUpConfirm>
      <SignUpConfirm>都道府県：{state.prefecture}</SignUpConfirm>
      <SignUpConfirm>住所：{state.address}</SignUpConfirm>
      <SignUpConfirm>建物名・号室（任意）：{state.building}</SignUpConfirm>
      <br />
      <input type="submit" className="inputButton" value="登録する" />
    </SignUpMain>
  );
};

export default Confirm;
