import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questionData from "../questions.json";
import { IQuiz } from "../types/IQuiz";
import { shuffle } from "../helpers/shuffleArray";
import { IQuizOption } from "../types/IQuizOption";
import { StatusGameType } from "../types/StatusGameType";
import { RESULT_PATH } from "../constants/paths";

interface IUseQuiz {
  questions: IQuiz[];
  progress: number;
  selectAnswer: (answer: IQuizOption) => void;
  statusGame: StatusGameType;
}

const transformQuestions = (questions: IQuiz[]) => {
  return questions
    .sort((a, b) => (a.award > b.award ? 1 : -1))
    .map((el) => ({ ...el, options: shuffle(el.options) }))
    .slice(0, 11);
};

export function useQuiz(): IUseQuiz {
  const gameProgress = JSON.parse(localStorage.getItem("gameProgress") || "{}");
  const [questions] = useState<IQuiz[]>(
    gameProgress.questions || transformQuestions(questionData)
  );
  const navigate = useNavigate();
  const [progress, setProgress] = useState(gameProgress.progress || 0);
  const [statusGame, setStatusGame] = useState<StatusGameType>("waitingAnswer");

  const onSuccessAnswer = () => {
    localStorage.setItem(
      "gameProgress",
      JSON.stringify({ questions, progress: progress + 1 })
    );

    setProgress(progress + 1);
  };

  const goToResultPage = (award: number) => {
    localStorage.removeItem("gameProgress");
    navigate(RESULT_PATH, { state: { award } });
  };

  const changeStatusWithDelay = (command: StatusGameType, duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setStatusGame(command);
        resolve();
      }, duration);
    });
  };

  const selectAnswer = async (answer: IQuizOption) => {
    setStatusGame("acceptingAnswer");

    const { correctAnswerId, award } = questions[progress];
    const isCorrect = answer.id === correctAnswerId;
    const isLastQuestion = questions.length - 1 === progress;

    await changeStatusWithDelay(
      isCorrect ? "answeredCorrect" : "answeredIncorrect",
      2000
    );
    await changeStatusWithDelay("waitingAnswer", 1000);

    if (isLastQuestion || !isCorrect) {
      const currentAward = isCorrect
        ? award
        : questions[progress - 1]?.award || 0;

      goToResultPage(currentAward);
    } else {
      onSuccessAnswer();
    }
  };

  return { questions, progress, selectAnswer, statusGame };
}
