import React from "react";
import styled from "styled-components";
import { pc, sp, tab } from "media";

import { useForm } from "react-hook-form";
import { useRef } from "react";
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

const SignUpLogin = styled.a`
  text-decoration: none;
  color: black;
`;

export const SignUpStep1 = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  // console.log(password.current);

  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    // props.history.push()に飛ばしたいpathを入れてあげるとページ遷移してくれます
    props.history.push("./SignUpStep2");
  };

  return (
    <SignUpMain>
      <SignUpRegisterTitle>SIGN UP</SignUpRegisterTitle>
      <SignUpRegisterSubTitle>会員情報入力</SignUpRegisterSubTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* エラーメッセージ */}
        {errors.last_name && <p>{errors.last_name.message}</p>}
        {errors.first_name && <p>{errors.first_name.message}</p>}
        {errors.last_name_kana && <p>{errors.last_name_kana.message}</p>}
        {errors.first_name_kana && <p>{errors.first_name_kana.message}</p>}

        {/* 入力フォーム */}
        <label>代表者氏名</label>
        <div className="inputGroup">
          <input
            className="inputName"
            name="last_name"
            type="text"
            defaultValue={state.last_name}
            placeholder="（例）西村"
            {...register("last_name", { required: "姓字を入力してください" })}
          />

          <input
            className="inputName"
            name="first_name"
            type="text"
            defaultValue={state.first_name}
            placeholder="（例）淳一"
            {...register("first_name", {
              required: "名前を入力してください",
            })}
          />
        </div>

        <label>代表者氏名（カナ）</label>
        <div className="inputGroup">
          <input
            className="inputName"
            name="last_name_kana"
            type="text"
            defaultValue={state.last_name_kana}
            placeholder="（例）ニシムラ"
            {...register("last_name_kana", {
              required: "姓字（カナ）を入力してください",
              pattern: {
                value: /^[ァ-ンヴー]*$/,
                message: "全角カタカナで入力してください",
              },
            })}
          />

          <input
            className="inputName"
            name="first_name_kana"
            type="text"
            defaultValue={state.first_name_kana}
            placeholder="（例）ジュンイチ"
            {...register("first_name_kana", {
              required: "名前（カナ）を入力してください",
              pattern: {
                value: /^[ァ-ンヴー]*$/,
                message: "全角カタカナで入力してください",
              },
            })}
          />
        </div>

        <label>メールアドレス</label>
        <input
          name="email"
          type="email"
          defaultValue={state.email}
          placeholder="（例）email1234@gmail.com"
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>パスワード</label>
        <input
          name="password"
          type="password"
          defaultValue={state.password}
          placeholder="8文字以上の半角英数字"
          {...register("password", {
            required: "パスワードを入力してください",
            pattern: {
              value: /^[0-9a-zA-Z]*$/,
              message: "半角英数字で入力してください",
            },
            minLength: {
              value: 8,
              message: "8文字以上で入力してください",
            },
            maxLength: {
              value: 15,
              message: "15文字以内で入力してください",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>パスワード（確認用）</label>
        <input
          name="password_repeat"
          type="password"
          defaultValue={state.password_repeat}
          placeholder="確認用に再度入力してください"
          {...register("password_repeat", {
            required: "確認用のパスワードを入力してください",
            pattern: {
              value: /^[0-9a-zA-Z]*$/,
              message: "半角英数字で入力してください",
            },
            minLength: {
              value: 8,
              message: "8文字以上入力してください",
            },
            maxLength: {
              value: 15,
              message: "15文字以内入力してください",
            },
            validate: (value) =>
              value === password.current || "パスワードが一致しません",
          })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        <br />
        <input className="inputButton" value="次へ" type="submit" />
      </form>
      <SignUpLogin href="/">ログインはこちら</SignUpLogin>
    </SignUpMain>
  );
};

export default withRouter(SignUpStep1);
