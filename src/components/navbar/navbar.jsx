import React, { useState, useEffect } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = ({ link }) => {
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

  const scrollToStadium = () => {
    setClick(false);
    window.scroll({
      top: 990,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className={styles.container}>
        <Link to="/main" className={styles.logo} onClick={closeMobileMenu}>
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
          {link === "listPage" ? null : (
            <li className={styles.item}>
              <div className={styles.link} onClick={scrollToStadium}>
                등록시설
              </div>
            </li>
          )}
          <li className={styles.item}>
            <Link to="/list" className={styles.link} onClick={closeMobileMenu}>
              예약하기
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/main" className={styles.link} onClick={closeMobileMenu}>
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
            <Button buttonStyle="two" path="/">
              로그인
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
