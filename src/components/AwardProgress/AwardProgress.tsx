import React from "react";

import { AwardBox } from "../AwardBox/AwardBox";
import { AwardStatusType } from "../../types/AwardStatusType";

import styles from "./AwardProgress.module.scss";

interface IProps {
  currentProgress: number;
  awards: number[];
}

function AwardProgress({ awards, currentProgress }: IProps) {
  const getAwardStatus = (questionNum: number): AwardStatusType => {
    if (questionNum === currentProgress) {
      return "currentAward";
    }

    if (questionNum < currentProgress) {
      return "achievedAward";
    }

    return "untouchableAward";
  };

  return (
    <div className={styles.awardProgress}>
      {awards.map((award, index) => (
        <AwardBox
          key={award.toString()}
          award={award}
          awardStatus={getAwardStatus(index)}
        />
      ))}
    </div>
  );
}

export { AwardProgress };
