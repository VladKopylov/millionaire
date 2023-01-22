import React, { useState } from "react";
import classnames from "classnames";

import { IQuizOption } from "../../types/IQuizOption";
import { StatusGameType } from "../../types/StatusGameType";
import { IQuiz } from "../../types/IQuiz";
import { Answer } from "../Answer/Answer";

import styles from "./Quiz.module.scss";

interface IProps {
  quiz: IQuiz;
  statusGame: StatusGameType;
  selectAnswer: (quizOption: IQuizOption) => void;
}

function Quiz({ quiz, statusGame, selectAnswer }: IProps) {
  const UTFCodeA = 65;
  const [currentAnswer, setCurrentAnswer] = useState<number>(0);

  const handleSelectAnswer = (option: IQuizOption) => () => {
    setCurrentAnswer(option.id);
    selectAnswer(option);
  };

  return (
    <div className={styles.quiz}>
      <h1 className={styles.title}>{quiz.question}</h1>
      <div
        className={classnames(styles.options, {
          [styles.options__disabled]: statusGame !== "waitingAnswer",
        })}
      >
        {quiz.options.map((option, index) => {
          return (
            <Answer
              key={option.id}
              answer={option.answer}
              variantLetter={String.fromCodePoint(UTFCodeA + index)}
              onClick={handleSelectAnswer(option)}
              className={classnames({
                __selected:
                  statusGame === "acceptingAnswer" &&
                  currentAnswer === option.id,
                __correct:
                  ["answeredCorrect", "answeredIncorrect"].includes(
                    statusGame
                  ) && option.id === quiz.correctAnswerId,
                __incorrect:
                  statusGame === "answeredIncorrect" &&
                  currentAnswer === option.id,
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Quiz };
