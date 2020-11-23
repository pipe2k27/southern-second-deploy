import React, { useEffect, useState } from 'react';
import "./styles.css"


import provincias from "../../data/provincias";

import "./styles.css";

const Repaso = ({ data, questions }) => {
    const [reviewData, setReviewData] = useState([]);
    const [reviewQuestions, setReviewQuestions] = useState([]);


    useEffect(() => {
        setReviewData(Object.entries(data))
        setReviewQuestions(Object.entries(questions))

    }, [])
    return (
        <div>
            <p className="message">Respasá tus respuestas:</p>
            <p className="recorda" style={{ marginBottom: 25 }}>*Revisá ortografía, el uso de las mayúsculas donde corresponda y los montos, cantidades y fechas.</p>

            <div>
                <div>
                    {reviewData.map((e, index) => {
                        return (<p className="review-entry">{`${e[0]}. ${reviewQuestions[index][1]} `}<span className="review-answer">{e[1]}</span></p>)
                    })}</div>
            </div>

            <p className="recorda">Recordá que una vez que termines ya no podrás cambiar los datos. Si detectás algún error hacé click en anterior y modificalo.</p>
        </div >)
}

export default Repaso; 