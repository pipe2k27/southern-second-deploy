import React from 'react';
import "./styles.css";

const Description = ({ text, title }) => {

    return (
        <div className="description center-div">
            <div className="flex"><h1>{title}</h1>
                <i className="fas fa-file-signature document-icon"></i>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Description;