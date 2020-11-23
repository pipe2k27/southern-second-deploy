import React, { useState } from 'react';
import Question from "./Questions/Question";
import Options from "./Questions/Options";
import Day from "./Questions/Day";


import provincias from "../../data/provincias";

import "./styles.css";

const FechaLugar = ({ provincia, ciudad, titulo, day, set, data, setQuestions, questions }) => {


    return (
        <div className="grid-2 grid-mobile">
            <div>
                {provincia && <Options question={`¿En que provincia se firmará el ${titulo}?:`} number={provincia} options={provincias} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                {ciudad && <Question question={`¿En que ciudad se firmará el ${titulo}?:`} number={ciudad} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
            </div>
            <div>
                {day && <Day question={`¿En que fecha se firmará el ${titulo}?:`} number={day} set={set} data={data} setQuestions={setQuestions} questions={questions} />}

            </div>
        </div>)
}

export default FechaLugar;