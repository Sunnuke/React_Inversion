import React from "react";


const PersonCard = props => {
    return(
        <div>
            
            <h1>{props.ln1}, {props.fn1}</h1>
            <p>Age: {props.a1}</p>
            <p>Hair Color: {props.hc1}</p>
            
        </div>
    );
}

export default PersonCard;