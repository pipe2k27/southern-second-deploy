import React from 'react';
import FakeQuestion from "./Questions/FakeQuestion";

import "./styles.css";

const Pago = () => {


    return (
        <div>            <p className="message">Pago:</p>
            <p className="message" style={{ margin: 20 }}>$250</p>
            <img
                src={process.env.PUBLIC_URL + "/images/cards.png"}
                alt="logo-word"
                className="center-div cards"
            ></img>

            <p className="recorda">Pago 100% seguro a travéz de Stripe</p>
            <div className="grid-2  grid-mobile">
                <div>
                    <FakeQuestion question={`Titular de la tarjeta:`} />
                    <FakeQuestion question={`DNI del titular de la tarjeta:`} />
                </div>
                <div>
                    <FakeQuestion question={`Número de tarjeta:`} />
                    <FakeQuestion question={`Fecha de vencimiento:`} />
                    <FakeQuestion question={`Código de seguridad:`} />
                </div>
            </div>
        </div>)
}

export default Pago;