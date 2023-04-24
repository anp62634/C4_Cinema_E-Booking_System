import React, { useState } from 'react';
import './SeatList.css'
import "../../style.css";

export default function SeatList(props) {
    let ticketNum = props.tickets;
    var isSelected = false;

    const [selectedSeats, setSelectedSeats] = useState([]);

    function handleSelectedState() {
        isSelected = !isSelected;

        if (ticketNum != 0) {
            if (isSelected) {
                ticketNum -= 0;
            } else {
                ticketNum += 1;
            }
        }
    }

    return (
        <React.Fragment>
            <div className="seat-content">
                {props.items.map(seat => (
                    <div key={seat.id}>
                        {seat.available ? (
                            <button onClick={handleSelectedState} className={isSelected ? "seat-item-selected" : "seat-item"}>
                                <h3>{seat.name}</h3>
                            </button>
                        ) : (
                            <button className="seat-item-na">
                                <h3>{seat.name}</h3>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );

};
