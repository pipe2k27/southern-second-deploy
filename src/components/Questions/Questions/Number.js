import React, { useState } from 'react';
import "./styles.css";

const Number = ({ question, number, data, set, questions, setQuestions }) => {
    const [answer, setAnswer] = useState('');
    const [complete, setComplete] = useState(false);


    const handleType = (e) => {
        setAnswer(e.target.value);
        if (e.target.value === "") {
            setComplete(false)
        } else {
            setComplete(true)
        }
        let newNum = e.target.value.replaceAll(".", "");
        let thisObject = { ...data, [number]: newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }
        set(thisObject)
        setQuestions({ ...questions, [number]: question })
    }

    return (
        <form className="form">
            <label className="question">{`${number}. ${question}`}</label>
            <input
                placeholder="Respuesta"
                name="answer"
                className="answer"
                onChange={handleType}
                value={data[number]}
            ></input>


        </form>

    )
}

export default Number;