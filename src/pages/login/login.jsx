import React from "react";
import styles from "./login.module.css";

const Login = () => {
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
          <button>회원가입</button>
          <button>게스트 입장</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
