import React from "react";
import classname from "classnames";

import styles from "./Answer.module.scss";

interface IProps {
  answer: string;
  className: string;
  variantLetter: string;
  onClick: () => void;
}

function Answer({ answer, className, variantLetter, onClick }: IProps) {
  return (
    <svg
      width="405"
      height="72"
      viewBox="0 0 405 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={classname(styles.answer, {
        [styles[`answer${className}`]]: className,
      })}
      vectorEffect="non-scaling-stroke"
      onClick={onClick}
    >
      <rect
        width="959"
        height="632"
        transform="translate(-86 -278)"
        fill="transparent"
      />
      <path
        d="M388 36L405 36"
        stroke="#d0d0d8"
        className={styles.lines}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 36L17 36"
        stroke="#d0d0d8"
        className={styles.lines}
        vectorEffect="non-scaling-stroke"
      />
      <path
        className={styles.answerBox}
        d="M48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5Z"
        fill="white"
        stroke="#d0d0d8"
        vectorEffect="non-scaling-stroke"
      />
      <g>
        <text x="45" y="42" fill="#FF8B37" fontSize="1rem" fontWeight={500}>
          {variantLetter}
        </text>
        <text x="65" y="42" fill="black" fontSize="1rem">
          {answer}
        </text>
      </g>
    </svg>
  );
}

export { Answer };
