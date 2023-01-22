import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import hand from "../../assets/hand.svg";
import { Button } from "../../components/Button/Button";
import { isEmpty } from "../../helpers/isEmpty";
import { QUIZ_PATH } from "../../constants/paths";

import styles from "./StartPage.module.scss";

function StartPage() {
  const gameProgress = JSON.parse(localStorage.getItem("gameProgress") || "{}");
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate(QUIZ_PATH);
  };

  if (!isEmpty(gameProgress)) {
    return <Navigate to={QUIZ_PATH} replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <img src={hand} alt="hand img" className={styles.handImg} />
        <div className={styles.startBlock}>
          <h1 className={styles.title}>Who wants to be a millionaire?</h1>
          <Button onClick={handleClickStart}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export { StartPage };
