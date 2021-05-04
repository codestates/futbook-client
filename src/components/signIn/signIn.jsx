import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from "./signIn.module.css";
import { signIn } from "../../actions";

const URL = process.env.REACT_APP_SERVER_URL;
const SignIn = props => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    errMsg: null,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserInfo = key => event => {
    setUserInfo(preState => ({ ...preState, [key]: event.target.value }));
  };

  const checkValidUserInfo = (email, password) => {
    if (email === "" || password === "") {
      setUserInfo(preState => {
        return { ...preState, errMsg: "모든 정보를 입력해주세요." };
      });
      return false;
    }
    return true;
  };

  const handleLoginBtn = async () => {
    const { email, password } = userInfo;
    if (checkValidUserInfo(email, password)) {
      try {
        const { data } = await axios.post(`${URL}/sign/signin`, {
          email,
          password,
        });
        dispatch(signIn(data.data));
        history.push("/main");
      } catch (err) {
        setUserInfo(preState => {
          return { ...preState, errMsg: "잘못된 아이디나 패스워드 입니다." };
        });
      }
    }
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
          className={`${styles.userInfo_ID} ${styles.input_signin}`}
          onChange={handleUserInfo("email")}
        />
        <input
          placeholder="비밀번호를 입력하세요."
          type="password"
          className={`${styles.userInfo_PW} ${styles.input_signin}`}
          onChange={handleUserInfo("password")}
        />
        {userInfo.errMsg ? (
          <div className={styles.errMsg}>{userInfo.errMsg}</div>
        ) : null}
      </div>
      <button className={styles.btn_signin} onClick={handleLoginBtn}>
        로그인
      </button>
      <button className={styles.btn_signin}>구글 로그인</button>
      <button className={styles.btn_signin} onClick={handleMoveSignup}>
        회원가입
      </button>
      <button className={styles.btn_signin} onClick={handleMoveMain}>
        게스트 입장
      </button>
    </div>
  );
};

export default SignIn;
