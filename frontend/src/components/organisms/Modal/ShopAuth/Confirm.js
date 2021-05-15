import React from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "components/organisms/Modal/ShopAuth/updateAction";

import {
  SignUpMain,
  SignUpRegisterTitle,
  SignUpRegisterSubTitle,
  SignUpConfirmLavel,
  SignUpConfirm,
} from "components/organisms/Modal/SignUpAuth";

export const Confirm = () => {
  const { state } = useStateMachine(updateAction);

  return (
    <SignUpMain>
      <SignUpRegisterTitle>確認画面</SignUpRegisterTitle>
      <SignUpConfirmLavel>代表者氏名</SignUpConfirmLavel>
      <SignUpConfirm>
        {state.last_name}
        {state.first_name}
      </SignUpConfirm>

      <SignUpConfirmLavel>代表者氏名（カナ）</SignUpConfirmLavel>
      <SignUpConfirm>
        {state.last_name_kana}
        {state.first_name_kana}
      </SignUpConfirm>

      <SignUpConfirmLavel>メールアドレス</SignUpConfirmLavel>
      <SignUpConfirm>{state.email}</SignUpConfirm>

      <SignUpConfirmLavel>店舗名</SignUpConfirmLavel>
      <SignUpConfirm>{state.shop_name}</SignUpConfirm>

      <SignUpConfirmLavel>電話番号</SignUpConfirmLavel>
      <SignUpConfirm>{state.phone_number}</SignUpConfirm>

      <SignUpConfirmLavel>郵便番号</SignUpConfirmLavel>
      <SignUpConfirm>{state.postal_code}</SignUpConfirm>

      <SignUpConfirmLavel>都道府県</SignUpConfirmLavel>
      <SignUpConfirm>{state.prefecture}</SignUpConfirm>

      <SignUpConfirmLavel>住所</SignUpConfirmLavel>
      <SignUpConfirm>{state.address}</SignUpConfirm>

      <SignUpConfirmLavel>建物名・号室</SignUpConfirmLavel>
      <SignUpConfirm>{state.building}</SignUpConfirm>
      <br />

      <input type="submit" className="inputButton" value="登録する" />
    </SignUpMain>
  );
};

export default Confirm;
