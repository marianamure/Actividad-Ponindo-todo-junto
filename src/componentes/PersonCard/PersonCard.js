import React, {useState} from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {

    return (
        <div className = "col-5">
            <div className="card">
                <h4>{firstName} {lastName}</h4>
                <p><b>Age:</b>{age}</p>
                <p><b>Hair Color:</b>{hairColor}</p>
            </div>
        </div>
    )
    }

export default PersonCard;