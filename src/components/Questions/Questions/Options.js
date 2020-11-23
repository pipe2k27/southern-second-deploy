import React, { useState } from 'react';
import "./styles.css";

const Options = ({ question, number, options, set, data, setExtra, questions, setQuestions }) => {
    const [answer, setAnswer] = useState('');
    const [complete, setComplete] = useState(false);


    const handleChange = (e) => {
        setAnswer(e.target.value);
        if (e.target.value === "") {
            setComplete(false)
        } else {
            setComplete(true)
        }


        let thisObject = { ...data, [number]: e.target.value }
        set(thisObject);

        setExtra && setExtra(e.target.value);
        setQuestions({ ...questions, [number]: question })
    }

    return (
        <form className="form">
            <label className="question">{`${number}. ${question}`}</label>
            <select
                className="select"
                value={answer}
                onChange={(e) => {
                    handleChange(e);
                }}
                className="answer"
            >
                <option value="none">Seleccionar</option>

                {options.map((e) => {
                    return <option value={e}>{e}</option>

                })}</select><br />
            {data[number] &&

                <label>seleccion actual: {data[number]}</label>}
        </form>

    )
}

export default Options;