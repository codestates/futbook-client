import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./signIn.module.css";

const SignIn = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleUserInfo = (key) => (event) => {
    setUserInfo((preState) => ({ ...preState, [key]: event.target.value }));
  };

  const handleMoveSignup = () => {
    history.push("/signup");
  };
  const handleMoveMain = () => {
    history.push("/main");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" className={styles.logo_img} />
        <div className={styles.logo_name}>BOOKING!</div>
      </div>
      <div className={styles.userInfo}>
        <input
          placeholder="e-mail을 입력하세요."
          type="email"
          className={styles.userInfo_ID}
          onChange={handleUserInfo("email")}
        />
        <input
          placeholder="비밀번호를 입력하세요."
          type="password"
          className={styles.userInfo_PW}
          onChange={handleUserInfo("password")}
        />
      </div>
      <button>로그인</button>
      <button>구글 로그인</button>
      <button onClick={handleMoveSignup}>회원가입</button>
      <button onClick={handleMoveMain}>게스트 입장</button>
    </div>
  );
};

export default SignIn;
