import React from "react";
import { Link } from "react-router-dom";
import "./HomeTop.css";

export default function HomeTop() {
  return (
    <div style={{ marginBottom: 80 }}>
      <div className="page-title grid-mobile">
        <div>
          <h1>
            GENERÁ TUS DOCUMENTOS LEGALES, RÁPIDO Y FÁCIL
          </h1></div>
        <div> <img
          src={process.env.PUBLIC_URL + "/images/banderaArgentina.png"}
          className="image-small banderita"
        ></img></div>
      </div>

      <div className="grid-2 grid-mobile grid-center menu-grid center-div">
        <img
          src={process.env.PUBLIC_URL + "/images/mujer.png"}
          className="image-medium center-div mobile-disapear"
        ></img>

        <div className="select-box">
          <i class="fas fa-file-signature doc-icon"></i>
          <p className="selecciona">Seleccioná tu documento:</p>
          <select className="dropdown" name="documento">
            <option value="" disabled selected>
              Documentos
                </option>
            <option value="volvo">Alquiler</option>
            <option value="saab">Condominio</option>
            <option value="fiat">Contrato de obra</option>
            <option value="audi">Poder general amplio</option>
          </select>{" "}
          <Link to="/recibo" className="button-standard">
            <i class="fas fa-pencil-alt"></i> Comenzar!
            </Link>
          <img
            src={process.env.PUBLIC_URL + "/images/logo-grey.png"}
            className="logo-small"
          ></img>

        </div>
      </div>
      <h1>Tu documento en minutos</h1>
      <p className="intro">
        Generá cualquier documento legal que necesites en minutos. Solo tenes
        que responder algunas preguntas y nosotros armamos tu archivo con el
        documento listo para imprimir. Todos nuestros documentos estan validados
        por el colegio de abogados de la Republica Argentina.
      </p>


      <Link to="/recibo" className="button-standard">
        Comenzar <i class="fas fa-pencil-alt"></i>
      </Link>
    </div>
  );
}
