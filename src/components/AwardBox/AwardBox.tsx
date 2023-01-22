import React from "react";
import classnames from "classnames";

import { AwardStatusType } from "../../types/AwardStatusType";
import { formatAward } from "../../helpers/formatAward";

import styles from "./AwardBox.module.scss";

interface IProps {
  award: number;
  awardStatus: AwardStatusType;
}

function AwardBox({ award, awardStatus }: IProps) {
  return (
    <svg
      width="320"
      height="32"
      viewBox="0 0 320 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(
        styles.awardBox,
        styles[`awardBox__${awardStatus}`]
      )}
    >
      <path
        d="M41 16H0"
        stroke="#d0d0d8"
        vectorEffect="non-scaling-stroke"
        className={styles.lines}
      />
      <path
        d="M320 16H279"
        stroke="#d0d0d8"
        vectorEffect="non-scaling-stroke"
        className={styles.lines}
      />
      <mask
        id="path-3-inside-1_5_262"
        fill="white"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M53.184 3.34335C55.4187 1.198 58.3966 0 61.4944 0H258.506C261.603 0 264.581 1.198 266.816 3.34335L280 16L266.816 28.6567C264.581 30.802 261.603 32 258.506 32H61.4944C58.3966 32 55.4187 30.802 53.184 28.6566L40 16L53.184 3.34335Z" />
      </mask>
      <path
        d="M53.184 3.34335C55.4187 1.198 58.3966 0 61.4944 0H258.506C261.603 0 264.581 1.198 266.816 3.34335L280 16L266.816 28.6567C264.581 30.802 261.603 32 258.506 32H61.4944C58.3966 32 55.4187 30.802 53.184 28.6566L40 16L53.184 3.34335Z"
        fill="white"
        stroke="#d0d0d8"
        strokeWidth="2"
        mask="url(#path-3-inside-1_5_262)"
        vectorEffect="non-scaling-stroke"
        className={styles.box}
      />
      <svg>
        <g>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            fontSize="1em"
            className={styles.text}
          >
            {formatAward(award)}
          </text>
        </g>
      </svg>
    </svg>
  );
}

export { AwardBox };
