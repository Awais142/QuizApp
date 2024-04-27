import React, { useState } from "react";
import { quiz } from "../assets/Data/questions";

const Result = ({ result }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];
  return (
    <>
      <div className="w-100 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center p-12 text-left flex-col py-16 rounded-lg drop-shadow-[0px_0px_10px_rgba(255,255,255,0.7)]">
        <div className="leading-2 text-center">
          <h1 className="text-[40px] text-center">Hurray !</h1>
          <h1 className="text-[40px] text-center">🎉🎉🎉</h1>
          <h1 className="text-[40px] text-center">You've Completed the Quiz</h1>
          <p className="text-[30px]">Your Score is: {result.score}</p>
          <p className="text-[30px]">Total Questions: {questions.length}</p>
          <p className="text-[30px]">
            Correct Answers: {result.correctAnswers}
          </p>
          <p className="text-[30px]">Wrong Answers: {result.wrongAnswers}</p>
        </div>
      </div>
    </>
  );
};

export default Result;
