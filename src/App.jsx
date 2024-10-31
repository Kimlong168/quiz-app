import { useState, useEffect } from "react";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Instrcution from "./components/Instrcution";
import GotoBottom from "./components/GotoBottom";
import { Link } from "react-router-dom";
function App() {

  let array_search = window.location.search.split("&");
  let categoty = array_search[0].split("=")[1];
  let quantity = array_search[1].split("=")[1];
  let level = array_search[2].split("=")[1];
  let type = array_search[3].split("=")[1] == '' ? '' : '&type='+array_search[3].split("=")[1]; 

  if(categoty ==='19' && level==='easy'){
    level = 'medium';
  }

  const [quizs, setQuizs] = useState([]);

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  // const [showGotoTop, setShowGotoTop] = useState(false);
  function findScore(e) {
    e.preventDefault();
    setScore(totalScore);
    setShowResult(true);
  }

  let totalScore = 0;
  function addScore(eachScore) {
    totalScore += eachScore;
  }

  let answerChoices = [];
  let question = "";

  useEffect(() => {
    const apiUrl =
      `https://opentdb.com/api.php?amount=${quantity}&category=${categoty}&difficulty=${level}${type}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuizs(data.results);
      });
  }, []);

  const questions = quizs.map((quiz, index) => {
    question = quiz.question;
    answerChoices = [...quiz.incorrect_answers];
    const random = Math.floor(
      Math.random() * (quiz.incorrect_answers.length + 1)
    );
    answerChoices.splice(random, 0, quiz.correct_answer);

    return (
      <Question
        key={question}
        no={index + 1}
        question={question}
        answerChoices={answerChoices}
        correctIndex={random}
        addScore={addScore}
        showCorrectAnswer={showCorrectAnswer}
      />
    );
  });

  function handleShowCorrectAnswer() {
    setShowCorrectAnswer(true);
  }

  function handleShowQuestion() {
    setShowQuestion(true);
    setShowResult(false);
  }

  // function toggleGoto(){
  //   setShowGotoTop(prevGoto => !prevGoto);
  // }

  setInterval(() => {
    setShowQuestion(true);
  }, 2000);

  return (
    <>
      <div className="bg-gradient-to-l from-yellow-300 to-violet-500 pb-8 relative">
        <Header />
        {showResult ? (
          <Result
            score={score}
            handleShowCorrectAnswer={handleShowCorrectAnswer}
            showQuestion={handleShowQuestion}
            numberOfQuestions={quantity}
          />
        ) : (
          <div className="m-8 mt-0 mb-0 w-100 bg-slate-100 p-8 rounded-md shadow-xl border-2 border-blue-600">
            <div>
              <Instrcution />
              {showQuestion ? (
                <div>
                  {questions}
                  <div className="flex gap-3">
                    <Link to="/" className="w-full">
                      <button className="mt-10 px-3 py-2 rounded-md bg-pink-600 text-white border border-blue-600 w-full">New Quiz</button>
                    </Link>

                    {!showCorrectAnswer ? (
                      <button
                        className="mt-10 px-3 py-2 rounded-md bg-green-600 text-white border border-blue-600 w-full"
                        onClick={(e) => findScore(e)}
                      >
                        Submit
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-12 h-12 mx-auto rounded-full animate-spin border-4 border-solid border-pink-600 border-t-transparent"></div>
              )}
            </div>
          </div>
        )}
        <Footer />
        {/* {showGotoTop ? <GotoTop toggleGoto={toggleGoto}/> : <GotoBottom toggleGoto={toggleGoto}/> } */}
        <GotoBottom />
      </div>
    </>
  );
}

export default App;
