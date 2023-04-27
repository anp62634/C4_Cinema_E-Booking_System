import React from 'react';
import './SeatList.css'
import "../../style.css";
import clsx from 'clsx'

export default function SeatList(props) {
    let ticketNum = props.tickets;
    
    return (
        <React.Fragment>
            <ul className="ShowCase">
                <li><span className="seat"/><small>Available</small></li>
                <li><span className="seat selected"/><small>Selected</small></li>
                <li><span className="seat occupied"/><small>Occupied</small></li>
            </ul>

            <div className="seat-content">
                {props.items.map(seat => {
                    const isSelected = props.selectedSeats.includes(seat);
                    return (
                    <div key={seat.id}>
                        {seat.available ? (
                            <SeatSelector
                                seat={seat}
                                ticketNum={ticketNum}
                                isSelected={isSelected}
                                selectedSeats={props.selectedSeats}
                                onSelectedSeatsChange={selectedSeats => props.setSelectedSeats(selectedSeats)}
                            />
                        ) : (
                            <button className="seat-item-occupied">
                                <h3>{seat.name}</h3>
                            </button>
                        )}
                    </div>
                    )
                })}
            </div>
        </React.Fragment>
    );

};

function SeatSelector(props) {
    function handleSelectedState(seat) {
        const isSelected = props.selectedSeats.includes(seat)
        if(props.ticketNum !== 0) {
            if (isSelected) {
                props.onSelectedSeatsChange(props.selectedSeats.filter((selectedSeat) => selectedSeat !== seat));   
            } else {
                props.onSelectedSeatsChange([...props.selectedSeats, seat]);
            }
        }
    }
  
    return (
        <React.Fragment>
            <button tabIndex="0" 
                    key={props.seat.id} 
                    className={clsx('seat-item', props.isSelected && 'seat-item-selected')} 
                    onClick={!props.seat.available ? null : () => handleSelectedState(props.seat)}>
                <h3>{props.seat.name}</h3>
            </button>
        </React.Fragment>
    )
}
  