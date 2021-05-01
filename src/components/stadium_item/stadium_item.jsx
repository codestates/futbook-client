import React from "react";
import { Link } from "react-router-dom";
import styles from "./stadium_item.module.css";
const StadiumItem = ({ path, label, img, title }) => {
  return (
    <>
      <li className={styles.item}>
        <Link className={styles.link} to={path}>
          <div
            className={
              label === "실외"
                ? `${styles.wrap}`
                : `${styles.wrap} ${styles.inside}`
            }
            data-category={label}
          >
            <img className={styles.pic} alt="stadium" src={img} />
          </div>

          <div className={styles.info}>
            <h5 className={styles.info_text}>{title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default StadiumItem;
