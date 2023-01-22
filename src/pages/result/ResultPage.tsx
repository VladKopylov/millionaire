import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { formatAward } from "../../helpers/formatAward";
import { QUIZ_PATH } from "../../constants/paths";
import hand from "../../assets/hand.svg";

import styles from "./ResultPage.module.scss";

function ResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { award } = state || {};
  const handleClickTryAgain = () => {
    navigate(QUIZ_PATH);
  };

  if (typeof award !== "number") {
    return <Navigate to={QUIZ_PATH} replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <img src={hand} alt="hand img" className={styles.handImg} />
        <div className={styles.gameSummary}>
          <div>
            <p className={styles.totalTitle}>Total score:</p>
            <p className={styles.earned}>{formatAward(award)} earned</p>
          </div>
          <Button onClick={handleClickTryAgain}>Try again</Button>
        </div>
      </div>
    </div>
  );
}

export { ResultPage };
