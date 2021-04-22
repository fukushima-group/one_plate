import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import "components/atoms/TextField/styles.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  // console.log(password.current);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
          defaultValue=""
          placeholder="（例）西村"
          {...register("last_name", { required: "姓字を入力してください" })}
        />

        <input
          className="inputName"
          name="first_name"
          type="text"
          defaultValue=""
          placeholder="（例）淳一"
          {...register("first_name", { required: "名前を入力してください" })}
        />
      </div>

      <label>代表者氏名（カナ）</label>
      <div className="inputGroup">
        <input
          className="inputName"
          name="last_name_kana"
          type="text"
          defaultValue=""
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
          defaultValue=""
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
        type="text"
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
        placeholder="8文字以上の半角英数字"
        {...register("password", {
          required: "パスワードを入力してください",
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
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>パスワード（確認用）</label>
      <input
        name="password_repeat"
        type="password"
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
      <input className="inputButton" type="submit" />
    </form>
  );
};
