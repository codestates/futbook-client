import React from "react";
import { useHistory } from "react-router";
import styles from "./signIn.module.css";

const SignIn = props => {
  const history = useHistory();
  const handleMoveSignup = () => {
    history.push("/signup");
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
          type="text"
          className={styles.userInfo_ID}
        />
        <input
          placeholder="비밀번호를 입력하세요."
          type="password"
          className={styles.userInfo_PW}
        />
      </div>
      <button>로그인</button>
      <button>구글 로그인</button>
      <button onClick={handleMoveSignup}>회원가입</button>
      <button>게스트 입장</button>
    </div>
  );
};

export default SignIn;
