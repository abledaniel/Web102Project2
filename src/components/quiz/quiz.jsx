import React, { useState } from "react";
import { questions } from "../../assets/questions";
import "./quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(randomQuestion());
  const [flipped, setFlipped] = useState(false);

  // Generate a random question index
  function randomQuestion() {
    const randomIndex = Math.floor(Math.random() * (questions.length - 1)) + 1;
    return questions[randomIndex];
  }

  const changeQuestion = () => {
    setCurrentQuestion(randomQuestion());
    setFlipped(false);
  };

  return (
    <div className="quiz">
      <h1>{questions[0]?.title || "Quiz"}</h1>
      <p>{questions[0]?.tagline || "Test your knowledge!"}</p>
      <p>Number of cards: {questions.length - 1}</p>

      <div className="card-container">
        <button className="nav-btn" onClick={changeQuestion}>&lt;</button> {}

        <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
          <div className="front">
            <h3>{currentQuestion.question || "No Question Available"}</h3>
          </div>
          <div className="back">
            <h3>{currentQuestion.correct || "No Answer Available"}</h3>
          </div>
        </div>

        <button className="nav-btn" onClick={changeQuestion}>&gt;</button> {}
      </div>
    </div>
  );
};

export default Quiz;
