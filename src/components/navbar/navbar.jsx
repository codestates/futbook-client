import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchData, signOut } from "../../actions";

const URL = process.env.REACT_APP_SERVER_URL;
const Navbar = ({ link, accessToken, openNoAccessModal }) => {
  const dispatch = useDispatch();

  const history = useHistory();
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

  const hanldeSignOutBtn = () => {
    dispatch(
      fetchData(
        `${URL}/sign/signout`,
        { headers: { authorization: `Bearer ${accessToken}` } },
        signOut
      )
    );
  };
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
          {link === "listPage" ? (
            <li className={styles.item}>
              <div
                className={styles.link}
                onClick={() =>
                  history.push({
                    pathname: "main",
                    state: {
                      scroll: 1,
                    },
                  })
                }
              >
                등록시설
              </div>
            </li>
          ) : (
            <li className={styles.item}>
              <div className={styles.link} onClick={scrollToStadium}>
                등록시설
              </div>
            </li>
          )}
          <li className={styles.item}>
            {accessToken ? (
              <Link
                to="/list"
                className={styles.link}
                onClick={closeMobileMenu}
              >
                예약하기
              </Link>
            ) : (
              <div
                className={styles.link}
                onClick={() => {
                  closeMobileMenu();
                  openNoAccessModal();
                }}
              >
                예약하기
              </div>
            )}
          </li>
          <li className={styles.item}>
            {accessToken ? (
              <Link
                to="/check"
                className={styles.link}
                onClick={closeMobileMenu}
              >
                예약확인
              </Link>
            ) : (
              <div
                className={styles.link}
                onClick={() => {
                  closeMobileMenu();
                  openNoAccessModal();
                }}
              >
                예약확인
              </div>
            )}
          </li>
          {accessToken ? (
            <li>
              <Link
                to="/"
                className={styles.link_mobile}
                onClick={hanldeSignOutBtn}
              >
                로그아웃
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className={styles.link_mobile}>
                로그인
              </Link>
            </li>
          )}
        </ul>
        {accessToken
          ? button && (
              <div className={styles.login}>
                <Button
                  hanldeSignOutBtn={hanldeSignOutBtn}
                  buttonStyle="two"
                  path="/"
                >
                  로그아웃
                </Button>
              </div>
            )
          : button && (
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
