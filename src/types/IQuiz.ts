import { IQuizOption } from "./IQuizOption";

export interface IQuiz {
  question: string;
  options: IQuizOption[];
  correctAnswerId: number;
  award: number;
}
