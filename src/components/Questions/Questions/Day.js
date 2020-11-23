import React, { useState } from 'react';
import "./styles.css";


const mes = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];


const Day = ({ question, number, set, data, questions, setQuestions }) => {
    const [answer, setAnswer] = useState('');
    const [complete, setComplete] = useState(false);
    const [date, setDate] = useState("");



    const handleChange = (e) => {
        setDate(e.target.value);
        if (e.target.value === "") {
            setComplete(false)
        } else {
            setComplete(true)
        }


        let thisAnswer = `${new Date(e.target.value).getUTCDate()} de ${mes[new Date(e.target.value).getUTCMonth()]} del ${new Date(e.target.value).getUTCFullYear()} `;
        let thisObject = { ...data, [number]: thisAnswer }
        set(thisObject)
        setQuestions({ ...questions, [number]: question })
    }

    return (
        <form className="form">
            <label className="question">{`${number}.${question}`}</label>
            <input
                className="answer"
                type="date"
                value={date}
                onChange={(e) => {
                    handleChange(e);
                }}
            ></input><br />
            {data[number] &&

                <label>fecha: {data[number]}</label>}

        </form>


    )
}

export default Day;