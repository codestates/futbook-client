import React, { useState } from "react";
import styles from "./signUp.module.css";
import { useHistory } from "react-router";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
const SignUp = (props) => {
  const [enrollUserInfo, setEnrollUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    rePassword: "",
    errorMsg: null,
  });
  const history = useHistory();

  const handleEnrollUserInfo = (key) => (event) => {
    setEnrollUserInfo((preState) => ({
      ...preState,
      [key]: event.target.value,
    }));
  };

  const handleValid = ({ email, nickname, password, rePassword }) => {
    if (
      email === "" ||
      nickname === "" ||
      password === "" ||
      rePassword === ""
    ) {
      setEnrollUserInfo((preState) => ({
        ...preState,
        errorMsg: "모든 칸을 채워주세요.",
      }));
    } else if (email.includes("@") === false) {
      setEnrollUserInfo((preState) => ({
        ...preState,
        errorMsg: "올바른 email이 아닙니다.",
      }));
    } else if (password !== rePassword) {
      setEnrollUserInfo((preState) => ({
        ...preState,
        errorMsg: "입력한 비밀번호가 다릅니다.",
      }));
    } else {
      return true;
    }
  };

  const handleEnroll = async (enrollUserInfo) => {
    if (handleValid(enrollUserInfo)) {
      try {
        const { email, nickname, password } = enrollUserInfo;
        await axios.post(`${URL}/sign/signup`, {
          email,
          nickname,
          password,
        });
        history.push("/");
      } catch (err) {
        setEnrollUserInfo((preState) => {
          return { ...preState, errorMsg: "이미 존재하는 닉네임입니다." };
        });
      }
    }
  };

  const handleMoveSignIn = () => {
    history.push("/");
  };
  return (
    <div className={styles.page}>
      <div className={styles.leftbox}>
        <img
          className={styles.leftbox_img}
          src="/images/loginpage.png"
          alt="mainImg"
        />
      </div>
      <div className={styles.rightbox}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="/images/logo.png"
              alt="logo"
              className={styles.logo_img}
            />
            <div className={styles.logo_name}>FUTBOOK</div>
          </div>
          <div className={styles.reserve_text}>회원가입</div>
          <div className={styles.userInfo}>
            <input
              placeholder="가입하실 email주소를 입력해주세요"
              type="email"
              className={`${styles.userInfo_ID} ${styles.input_signup}`}
              onChange={handleEnrollUserInfo("email")}
            />
            <input
              placeholder="가입하실 nickname을 입력해주세요"
              type="nickname"
              className={`${styles.userInfo_NN} ${styles.input_signup}`}
              onChange={handleEnrollUserInfo("nickname")}
            />
            <input
              placeholder="비밀번호를 입력해 주세요."
              type="password"
              className={`${styles.userInfo_PW} ${styles.input_signup}`}
              onChange={handleEnrollUserInfo("password")}
            />
            <input
              placeholder="비밀번호를 재입력해 주세요."
              type="password"
              className={`${styles.userInfo_RePW} ${styles.input_signup} ${
                enrollUserInfo.errorMsg ? "" : styles.input_margin
              }`}
              onChange={handleEnrollUserInfo("rePassword")}
            />
          </div>
          {enrollUserInfo.errorMsg ? (
            <div className={styles.errorMsg}>{enrollUserInfo.errorMsg}</div>
          ) : null}
          <button
            className={styles.btn_signup}
            onClick={() => {
              handleEnroll(enrollUserInfo);
            }}
          >
            회원가입
          </button>
          <button className={styles.btn_signup} onClick={handleMoveSignIn}>
            로그인 페이지
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
