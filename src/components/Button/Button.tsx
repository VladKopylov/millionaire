import React from "react";

import styles from "./Button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function Button({ children, type = "button", onClick }: IProps) {
  return (
    <button className={styles.primaryBtn} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
