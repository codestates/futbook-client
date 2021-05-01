import React, { useState, useEffect } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1440) {
      // if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setClick(false);
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <i className={`fas fa-futbol ${styles.fa_futbol}`} />
          FUTBOOK
        </Link>
        <div className={styles.icon} onClick={handleClick}>
          <i
            className={
              click
                ? `fas fa-times ${styles.fa_times}`
                : `fas fa-bars ${styles.fa_bars}`
            }
          />
        </div>
        <ul
          className={
            click ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          <li className={styles.item}>
            <Link to="/" className={styles.link} onClick={closeMobileMenu}>
              등록시설
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/services"
              className={styles.link}
              onClick={closeMobileMenu}
            >
              예약하기
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/products"
              className={styles.link}
              onClick={closeMobileMenu}
            >
              예약확인
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={styles.link_mobile}
              onClick={closeMobileMenu}
            >
              로그인
            </Link>
          </li>
        </ul>
        {button && (
          <div className={styles.login}>
            <Button buttonStyle="two">로그인</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;