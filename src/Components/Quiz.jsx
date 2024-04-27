import React, { useState } from "react";
import Result from "./Result";
import { quiz } from "../assets/Data/questions";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            }
      );
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Answer is correct" + index);
    } else {
      setSelectedAnswer(false);
      console.log("Answer is wrong" + index);
    }
  };

  return (
    <>
      {quizFinished ? (
        <Result result={result} />
      ) : (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-20 py-16 rounded-lg drop-shadow-[0px_0px_10px_rgba(255,255,255,0.7)]">
          <h1 className="text-[30px]">Quiz App</h1>

          <h1 className="text-left text-[22px]">{question}</h1>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                className={`text-left text-lg my-1 rounded p-2 cursor-pointer ${
                  selectedAnswerIndex === index
                    ? "bg-slate-500 hover:drop-shadow-[0px_0px_4px_rgba(255,255,255,0.7)]"
                    : "bg-slate-200 hover:drop-shadow-[0px_0px_4px_rgba(255,255,255,0.7)]"
                }`}
                // className="text-left text-lg my-1 bg-slate-200 hover:drop-shadow-[0px_0px_4px_rgba(255,255,255,0.7)] rounded p-2 cursor-pointer "
                key={index}
              >
                {answer}
              </li>
            ))}
          </ul>
          <button
            className="w-auto px-10 py-1 mt-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-1 hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.7)] rounded"
            onClick={onClickNext}
            disabled={selectedAnswerIndex === null}
          >
            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
          <div className="container bg-gradient-to-r from-purple-500 to-pink-500 w-96 rounded-xl p-3 text-xl mt-1">
            <h3 className="py-1">Your Score is = {result.score}</h3>
            <h3 className="py-1">Total Questions Are = {questions.length}</h3>
            <h3 className="py-1">
              Your Correct Answers Are = {result.correctAnswers}
            </h3>
            <h3 className="py-1">
              Your Wrong Answers Are = {result.wrongAnswers}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
