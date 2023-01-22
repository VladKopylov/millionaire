import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QUIZ_PATH, RESULT_PATH, START_PATH } from "./constants/paths";
import { StartPage } from "./pages/start/StartPage";
import { QuizPage } from "./pages/quiz/QuizPage";
import { Fallback } from "./Fallback";
import { ResultPage } from "./pages/result/ResultPage";
import { NotFound } from "./pages/not-found/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={START_PATH}>
        <Route index element={<StartPage />} />
        <Route path={QUIZ_PATH} element={<QuizPage />} />
        <Route path={RESULT_PATH} element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
