import React from "react";
import SignIn from "../../components/signIn/signIn";
import styles from "./enterPage.module.css";

const EnterPage = () => {
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
        <SignIn />
      </div>
    </div>
  );
};

export default EnterPage;
