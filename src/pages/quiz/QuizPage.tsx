import React from "react";

import { Quiz } from "../../components/Quiz/Quiz";
import { useQuiz } from "../../hooks/useQuiz";
import { AwardProgress } from "../../components/AwardProgress/AwardProgress";
import { BurgerSidebar } from "../../components/BurgerSidebar/BurgerSidebar";

import styles from "./QuizPage.module.scss";

function QuizPage() {
  const { questions, progress, selectAnswer, statusGame } = useQuiz();
  const awards = questions.map((el) => el.award);

  return (
    <div className={styles.page}>
      <BurgerSidebar awards={awards} progress={progress} />
      <div className={styles.quizWrapper}>
        <Quiz
          statusGame={statusGame}
          quiz={questions[progress]}
          selectAnswer={selectAnswer}
        />
      </div>
      <div className={styles.awardProgressWrapper}>
        <AwardProgress awards={awards} currentProgress={progress} />
      </div>
    </div>
  );
}

export { QuizPage };
