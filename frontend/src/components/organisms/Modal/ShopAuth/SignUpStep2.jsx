import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "components/organisms/Modal/ShopAuth/updateAction";
import "components/organisms/Modal/ShopAuth/styles.css";

import {
  SignUpMain,
  SignUpRegisterTitle,
  SignUpRegisterSubTitle,
} from "components/organisms/Modal/SignUpAuth";

export const SignUpStep2 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  console.log(actions);
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./Confirm");
  };

  return (
    <SignUpMain>
      <SignUpRegisterTitle>SIGN UP</SignUpRegisterTitle>
      <SignUpRegisterSubTitle>店舗情報入力</SignUpRegisterSubTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>店舗名</label>
        <input
          name="shop_name"
          type="text"
          defaultValue={state.shop_name}
          placeholder="店舗名"
          {...register("shop_name", {
            required: "店舗名を入力してください",
          })}
        />
        {errors.shop_name && <p>{errors.shop_name.message}</p>}

        <label>電話番号</label>
        <input
          name="phone_number"
          type="tel"
          defaultValue={state.phone_number}
          placeholder="電話番号（ハイフン無し）"
          {...register("phone_number", {
            required: "電話番号を入力してください",
            pattern: {
              value: /^[0-9]+$/,
              message: "半角数字で入力してください",
            },
            maxLength: {
              value: 11,
              message: "11桁以内で入力してください",
            },
          })}
        />
        {errors.phone_number && <p>{errors.phone_number.message}</p>}

        <label>郵便番号</label>
        <input
          name="postal_code"
          type="text"
          defaultValue={state.postal_code}
          placeholder="郵便番号（ハイフン無し）"
          {...register("postal_code", {
            required: "郵便番号を入力してください",
            pattern: {
              value: /^[0-9]+$/,
              message: "半角数字で入力してください",
            },
            maxLength: {
              value: 7,
              message: "7桁以内で入力してください",
            },
          })}
        />
        {errors.postal_code && <p>{errors.postal_code.message}</p>}

        <label>都道府県</label>
        <select
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            background: "#fff",
            border: "1px solid #e4e8e9",
          }}
          name="prefecture"
          defaultValue={state.prefecture}
          {...register("prefecture", {
            required: "都道府県を選択してください",
          })}
        >
          <option>--</option>
          <option>北海道</option>
          <option>東京</option>
          <option>沖縄</option>
        </select>
        {errors.prefecture && <p>{errors.prefecture.message}</p>}

        <label>住所</label>
        <input
          name="address"
          type="text"
          defaultValue={state.address}
          placeholder="市区町村 番地"
          {...register("address", { required: "住所を選択してください" })}
        />
        {errors.address && <p>{errors.address.message}</p>}

        <label>建物名・号室（任意）</label>
        <input
          name="building"
          type="text"
          defaultValue={state.building}
          placeholder=""
          {...register("building")}
        />
        <br />
        <input type="submit" className="inputButton" value="確認画面へ" />
      </form>
    </SignUpMain>
  );
};

export default withRouter(SignUpStep2);
