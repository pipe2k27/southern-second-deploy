import React, { useState } from "react";
import { questionOrder } from "./data.js";
import "./css/Create.css";
import AcuerdoDeConfidencialidad from "./AcuerdoDeConfidencialidad.js";

export default function Create() {
  const [answer, answerUpdate] = useState({
    answers: [],
    currentAnswer: "",
    answerNum: 0,
    document: false,
  });

  const defaultState = {
    answers: [],
    currentAnswer: "",
    answerNum: 0,
    document: false,
  };

  const handleType = (e) => {
    answerUpdate({ ...answer, currentAnswer: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.answerNum === 16) {
      answerUpdate((state) => {
        let answers = state.answers.concat(state.currentAnswer);
        let answerNum = state.answerNum;
        return {
          answers,
          currentAnswer: "",
          answerNum,
          document: true,
        };
      });
    } else {
      answerUpdate((state) => {
        let answers = state.answers.concat(state.currentAnswer);
        let answerNum = state.answerNum + 1;
        return {
          answers,
          currentAnswer: "",
          answerNum,
          document: false,
        };
      });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    answerUpdate(defaultState);
  };

  return (
    <div className="create-background">
      {!answer.document ? (
        <div className="creator">
          <div className="create-box">
            <h2 className="name">Contrato de locación comercial</h2>
            <i className="fas fa-file-signature create-icon"></i>
            <p className="instructions">Responde a las siguientes preguntas:</p>
            <p className="question">
              {answer.answerNum + 1}. {questionOrder[answer.answerNum].question}
            </p>
            <i className="fas fa-arrow-down arrow"></i>
            <div className="question-box">
              <form>
                <input
                  placeholder="Respuesta"
                  name="answer"
                  className="answer"
                  onChange={handleType}
                  value={answer.currentAnswer}
                ></input>
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Ok"
                  className="button8"
                ></input>
              </form>
            </div>

            <div className="picture">
              <img
                src={process.env.PUBLIC_URL + "/images/logo-grey.png"}
                className="create-logo"
                alt="zoita wood"
              />
            </div>
          </div>
          <div className="contract">
            <img
              src={process.env.PUBLIC_URL + "/images/contrato.jpg"}
              className="contract-image"
              alt="zoita wood"
            />
          </div>
        </div>
      ) : (
        <div className="final-box">
          <div className="inner-final-box">
            <AcuerdoDeConfidencialidad answers={answer} />
          </div>
        </div>
      )}
    </div>
  );
}
