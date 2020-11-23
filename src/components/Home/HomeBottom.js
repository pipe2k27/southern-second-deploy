import React from "react";
import "./HomeBottom.css";
import { Link } from "react-router-dom";

export default function HomeBottom() {
  return (
    <div>
      <h1 style={{ marginBottom: 30 }}>3 Simples Pasos</h1>
      <div className="steps grid-mobile">
        <div className="step mobile-margin">
          <div className="step-box">
            <h4 className="step-title">1. Seleccioná</h4>
            <i class="fas fa-file-signature step-icon"></i>
            <p className="step-desc">
              Elegí el tipo de documento de una lista de mas de 150 documentos
              confeccionados por abogados.{" "}
            </p>
          </div>
        </div>
        <div className="step mobile-margin">
          <div className="step-box">
            <h4 className="step-title">2. Contestá</h4>
            <i class="far fa-question-circle step-icon"></i>
            <p className="step-desc">
              Contestá una serie de preguntas. A partir de tus respuestas vamos
              a desarrollar y generar el documento que hayas seleccionado.
            </p>
          </div>
        </div>
        <div className="step mobile-margin">
          <div className="step-box">
            <h4 className="step-title">3. Imprimí</h4>
            <i class="fas fa-print step-icon"></i>
            <p className="step-desc">
              imprimí tu documento 100% terminado y aprobado por el colegio de
              abogados de la República Argentina.{" "}
            </p>
          </div>
        </div>
      </div>
      <Link to="/create-document" className="button-standard" style={{ width: 310 }}>
        <i class="fas fa-file-signature"></i> ¡Seleccioná tu documento!
      </Link>
    </div >
  );
}
