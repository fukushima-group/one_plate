import React from "react";
import styled from "styled-components";
import { pc, sp, tab } from "media";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "components/organisms/Modal/ShopAuth/updateAction";
import "components/organisms/Modal/ShopAuth/styles.css";

const SignUpMain = styled.div`
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

export const SignUpStep2 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
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

// ・店名
// ・電話番号
// 半角数字のみ(ハイフンは含めない)
// ・郵便番号
// ・都道府県
// active_hashで実装をする
// ・住所
// ・建物名
