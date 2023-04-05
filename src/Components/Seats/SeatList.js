import React from 'react';
import './SeatList.css'
import "../../style.css";

export default function SeatList(props) {

    return (
        <React.Fragment>
            <div className="seat-content">
                {props.items.map(seat => (
                <button key={seat.id} className="seat-item">
                    <h3>{seat.name}</h3>
                </button>
                ))}
            </div>
        </React.Fragment>
    );

};
