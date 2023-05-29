// // Question Types
// // 1. MCQs | Multiple Choice | single

import React from "react";
import PropTypes from "prop-types";
import "../Quiz/Babel.css";
import { Alert, Button, Col, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useGetQuizesByIdQuery } from "../../../../features/quizes/quizesApiSlice";

const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 10,
  perQuestionScore: 5,
  totalTime: 60, // in seconds
  questions: [
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      choices: ["stringify()", "parse()", "convert()", "None of the above"],
      type: "MCQs",
      correctAnswer: "stringify()",
    },
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "var and let", "None of the above"],
      type: "MCQs",
      correctAnswer: "var and let",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choices: [
        "document.write()",
        "console.log()",
        "window.alert",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      type: "MCQs",
      correctAnswer: "const",
    },
  ],
};

const Babel = (props: any) => {
  const { id } = useParams();
  const { data: quizData, isLoading } = useGetQuizesByIdQuery(id);
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<any>("");
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] =
    React.useState<any>(null);
  const [result, setResult] = React.useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  console.log(quizData);

  const questions = quizData?.questions;
  const { question_text, possible_answers, correct_answer } =
    questions?.[activeQuestion] || {};

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer: any, index: any) => {
    setSelectedAnswerIndex(index);
    if (answer === correct_answer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number: any) => (number > 9 ? number : `0${number}`);

  const printResult = () => {
    console.log(result);
  };
  return (
    <>
      {isLoading ? (
        <Row justify="center" style={{ minHeight: "91vh" }}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin
              tip="Your quiz will start in a moment ..."
              size="large"
            ></Spin>
          </Col>
        </Row>
      ) : (
        <Row justify="center" style={{ minHeight: "91vh" }}>
          <Col xs={20} sm={20} md={12} lg={12}>
            <div className="quiz-container">
              {!showResult ? (
                <div>
                  <div>
                    <span className="active-question-no">
                      {addLeadingZero(activeQuestion + 1)}
                    </span>
                    <span className="total-question">
                      /{addLeadingZero(questions?.length)}
                    </span>
                  </div>
                  <h2>{question_text}</h2>
                  <ul>
                    {possible_answers?.map((answer: any, index: any) => (
                      <li
                        onClick={() => onAnswerSelected(answer, index)}
                        key={answer}
                        className={
                          selectedAnswerIndex === index ? "selected-answer" : ""
                        }
                      >
                        {answer}
                      </li>
                    ))}
                  </ul>
                  <div className="flex-right">
                    <button
                      onClick={onClickNext}
                      disabled={selectedAnswerIndex === null}
                    >
                      {activeQuestion === questions?.length - 1
                        ? "Finish"
                        : "Next"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="result">
                  <h3>Result</h3>
                  <p>
                    Total Questions: <span>{questions.length}</span>
                  </p>
                  <p>
                    Total Score:<span> {result.score}</span>
                  </p>
                  <p>
                    Correct Answers:<span> {result.correctAnswers}</span>
                  </p>
                  <p>
                    Wrong Answers:<span> {result.wrongAnswers}</span>
                  </p>
                  <div className="flex-right">
                    <button onClick={printResult}>Submit Quiz</button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

Babel.propTypes = {};

export default Babel;
