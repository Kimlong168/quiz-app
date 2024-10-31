import React from "react";
import { Link } from "react-router-dom";
const Result = ({
  score,
  handleShowCorrectAnswer,
  showQuestion,
  numberOfQuestions,
}) => {
  return (
    <div className="bg-blue-600 p-8 m-8 rounded-lg border-2 border-white">
      <div>
        <h1 className="text-3xl text-white text-center font-bold mb-4">
          {" "}
          Your Score{" "}
        </h1>
        <p className="text-yellow-200 mb-3">Correct Answer : {score}</p>
        <p className="text-yellow-200">
          Score : {Math.floor((score / numberOfQuestions) * 100)}/100
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="mt-10 px-3 py-2 rounded-md bg-pink-600 text-white border border-shite hover:border-2"
          onClick={() => {
            handleShowCorrectAnswer();
            showQuestion();
          }}
        >
          Review Answer
        </button>
        <Link
          to="/"
          className="mt-10 px-3 py-2 rounded-md text-center bg-pink-600 text-white border border-shite hover:border-2"
        >
          New Quiz
        </Link>
      </div>
      {(score / numberOfQuestions) * 100 < 50 ? (
        <div className="bg-blue-600​​ mt-7 text-center text-white">
          ខំរៀនកូនប៉ា!​ ឈប់ស្រលាញ់គេម្នាក់ឯង
        </div>
      ) : (
        <div className="bg-blue-600​​ mt-7 text-center text-white">
          ឡូយៗៗៗៗៗៗ!​ កូនប៉ា
        </div>
      )}
    </div>
  );
};

export default Result;
