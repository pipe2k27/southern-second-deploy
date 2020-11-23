import React, { useState } from 'react';
import Question from "./Questions/Question";
import Options from "./Questions/Options";
import Day from "./Questions/Day";
import "./styles.css"


import provincias from "../../data/provincias";

import "./styles.css";

const Persona = ({ titulo, set, data, tipoPersona, nombre, dni, tipoDni, direccion, provincia, persona, setPersona, doc, setDoc, message, setQuestions, questions }) => {

    return (
        <div>
            {message && <p className="message">{message}</p>}
            <div className="grid-2  grid-mobile">
                <div>

                    {tipoPersona && <Options question={`¿Es una persona física o jurídica?:`} number={tipoPersona} options={["física", "jurídica"]} set={set} data={data} setExtra={setPersona} setQuestions={setQuestions} questions={questions} />}
                    {persona === "física" && nombre && <Question question={`Nombre y apellidos completos:`} number={nombre} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {persona === "jurídica" && nombre && <Question question={`Razón Social (incluir tipo societario ej: Southern Legal Tech S.R.L.):`} number={nombre} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                </div>
                <div>

                    {persona === "física" && tipoDni && <Options question={`Tipo de documento:`} options={["DNI", "pasaporte"]} number={tipoDni} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {persona === "jurídica" && tipoDni && <Options question={`Tipo de identificación:`} options={["CUIT"]} number={tipoDni} set={set} data={data} setQuestions={setQuestions} questions={questions} />}

                    {persona === "física" && dni && <Question question={`Número del documento:`} number={dni} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {persona === "jurídica" && dni && <Question question={`Número de la identificacion/CUIT:`} number={dni} set={set} data={data} setQuestions={setQuestions} questions={questions} />}

                    {direccion && <Question question={`Dirección:`} number={direccion} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {provincia && <Options question={`¿En que provincia se firmará el ${titulo}?:`} number={provincia} options={provincias} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                </div>
            </div>
        </div>)
}

export default Persona; 