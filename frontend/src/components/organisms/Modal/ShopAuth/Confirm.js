import React from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "components/organisms/Modal/ShopAuth/updateAction";

import {
  SignUpMain,
  SignUpRegisterTitle,
  SignUpConfirm,
} from "components/organisms/Modal/SignUpAuth";

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
