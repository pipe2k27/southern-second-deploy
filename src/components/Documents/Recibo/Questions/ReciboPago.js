import React, { useState } from 'react';
import Question from "../../../Questions/Questions/Question";
import Options from "../../../Questions/Questions/Options";
import Number from "../../../Questions/Questions/Number";

import "../../../Questions/styles.css"
import monedas from '../../../../data/monedas.js'



import "./styles.css";

const ReciboPago = ({ titulo, set, data, message, formaPago, montoEfe, monedaEfe, cheNumero, cheBanco, cheMoneda, cheMonto, cosa, cosaCant, criTipo, criMonto, motivo, setQuestions, questions }) => {
    const [forma, setForma] = useState("");


    return (
        <div>
            {message && <p className="message">{message}</p>}
            <div className="grid-2  grid-mobile">
                <div>
                    {motivo && <Question question={`Motivo o razón del pago (ej: honorarios, expensas, alquiler, u otros):`} number={motivo} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {formaPago && <Options question={`Forma de pago:`} number={formaPago} options={["efectivo", "cheque", "entrega de cosa", "criptomoneda"]} set={set} data={data} setExtra={setForma} setQuestions={setQuestions} questions={questions} />}
                    {forma === "efectivo" && montoEfe && <Number question={`Monto que se entrega(en numeros):`} number={montoEfe} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "cheque" && cheNumero && <Question question={`Número de Cheque (en números):`} number={cheNumero} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "cheque" && cheBanco && <Question question={`Banco emisor del Cheque:`} number={cheBanco} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "entrega de cosa" && cosa && <Question question={`Descripción de la Cosa/Objeto que se entrega:`} number={cosa} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "entrega de cosa" && cosaCant && <Question question={`cantidad de la Cosa/Objeto que se entrega:`} number={cosaCant} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "criptomoneda" && criTipo && <Question question={`Tipo de Criptomoneda:`} number={criTipo} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                </div>
                <div>
                    {forma === "efectivo" && monedaEfe && <Options question={`Moneda:`} options={monedas} number={monedaEfe} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "cheque" && cheMonto && <Number question={`Monto que se entrega(en numeros):`} number={cheMonto} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "cheque" && cheMoneda && <Options question={`Moneda:`} options={monedas} number={cheMoneda} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                    {forma === "criptomoneda" && criMonto && <Number question={`Cantidad de Criptomoneda entregada (en números):`} number={criMonto} set={set} data={data} setQuestions={setQuestions} questions={questions} />}
                </div>
            </div>
        </div>)
}

export default ReciboPago; 