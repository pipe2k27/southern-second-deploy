import React from 'react';
import "./styles.css";

const FakeQuestion = ({ question }) => {




    return (
        <form className="form">
            <label className="question">{`${question}`}</label>
            <input
                placeholder="Respuesta"
                name="answer"
                className="answer"
            ></input>
        </form>
    )
}


export default FakeQuestion;