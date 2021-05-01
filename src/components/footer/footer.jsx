import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.social_media}>
        <div className={styles.social_wrap}>
          <div>
            <Link to="/main" className={styles.social_logo}>
              <i className={`fas fa-futbol ${styles.fa_futbol}`} />
              FUTBOOK
            </Link>
          </div>
          <div className={styles.web_represent}>
            FUTBOOK © 2021 대표: 민제현 함민우 민제경 백현준
          </div>
          <div className={styles.social_icons}>
            <Link
              className={styles.social_link}
              to="/main"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              className={styles.social_link}
              to="/main"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              className={styles.social_link}
              to="/main"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              className={styles.social_link}
              to="/main"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
