import React from "react";
import { Link } from "react-router-dom";
import "./DocList.css";

export default function DocList() {
    return (
        <div style={{ marginBottom: 80, marginTop: 80 }}>
            <h1>Documentos</h1>
            <div className="doc-list">
                <Link to="/recibo" className="doc-item">1. Recibo - $250</Link>
                <Link to="/recibo" className="doc-item">2. Pagaré - $250</Link>
                <Link to="/recibo" className="doc-item">3. Acuerdo de confidencialidad - $1500</Link>
                <Link to="/recibo" className="doc-item">4. Contrato de alquiler - $1500</Link>
                <Link to="/recibo" className="doc-item">5. Contrato de trabajo - $1500</Link>
\            </div>
        </div>
    );
}
