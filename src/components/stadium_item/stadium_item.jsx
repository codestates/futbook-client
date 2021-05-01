import React from "react";
import { Link } from "react-router-dom";
import styles from "./stadium_item.module.css";
function StadiumItem(props) {
  return (
    <>
      <li className={styles.item}>
        <Link className={styles.link} to={props.path}>
          <figure className={styles.wrap} data-category={props.label}>
            <img className={styles.pic} alt="stadium" src={props.src} />
          </figure>
          <div className={styles.info}>
            <h5 className={styles.info_text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default StadiumItem;
