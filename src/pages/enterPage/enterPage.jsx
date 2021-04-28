import React from "react";
import SignIn from "../../components/signIn/signIn";
import styles from "./enterPage.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUp from "../../components/signUp/signUp";

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
        <Router>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Router>
      </div>
    </div>
  );
};

export default EnterPage;
