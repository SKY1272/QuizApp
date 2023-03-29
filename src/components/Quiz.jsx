import React, { useState } from "react";
import styled from "./Quiz.module.css";
const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest"
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    correctAnswer: "Vatican City"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: "Yen"
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    correctAnswer: "Au"
  },
  {
    question: "What is the national animal of India?",
    options: ["Tiger", "Lion", "Elephant", "Leopard"],
    correctAnswer: "Tiger"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
];

export default function Quiz() {
  const [Qindex, setQIndex] = useState(0);
  const [opt, setOpt] = useState([]);
  const [score, setScore] = useState(0);

  const handleOption = (e) => {
    const newSelectOpt = [...opt];
    newSelectOpt[Qindex] = e.target.value;
    setOpt(newSelectOpt);
  };
  const handleNext = () => {
    setQIndex(Qindex + 1);
  };
  const handleSubmit = () => {
    const newScore = opt.reduce((acc, option, index) => {
      return option === questionsData[index].correctAnswer ? acc + 2 : acc;
    }, 0);
    setScore(newScore);
  };
  const handleRestartClick = () => {
    setQIndex(0);
    setOpt([]);
    setScore(0);
  };

  const isLastQuestion = Qindex === questionsData.length - 1;
  const hasPassed = score >= 12;
  return (
    <div className={styled.container}>
      {isLastQuestion ? (
        <div>
          <h2>Result: {score}/ 20</h2>
          <button onClick={handleSubmit}>Submit</button>
          {hasPassed ? (
            <h3>Congratulations! You passed the test.</h3>
          ) : (
            <button onClick={handleRestartClick}>Restart Test</button>
          )}
        </div>
      ) : (
        <div className={styled.container1}>
          <h1>Quiz Game</h1>
          <h2>Question[{Qindex + 1}]</h2>
          <h3>{questionsData[Qindex].question}</h3>
          <form>
            {questionsData[Qindex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="option"
                  value={option}
                  checked={opt[Qindex] === option}
                  onChange={handleOption}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </form>
          <button onClick={handleNext}>
            {isLastQuestion ? "submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
