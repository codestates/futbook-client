import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const getButtonStyle = (buttonStyle) => {
    switch (buttonStyle) {
      case "one":
        return styles.one;
      case "two":
        return styles.two;
      case "three":
        return styles.three;
      default:
        return styles.one;
    }
  };
  const getButtonSize = (buttonSize) => {
    switch (buttonSize) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <Link to="/">
      <button
        className={`${styles.btn} ${getButtonStyle(
          buttonStyle
        )} ${getButtonSize(buttonSize)}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
