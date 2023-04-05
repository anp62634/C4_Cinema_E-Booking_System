import React, { useState } from 'react';
import './style.css';
//import { IoCloseOutline  } from 'react-icons/io5';


export default function TrailerModal(props) {
    // Components for Movie Trailer Modal
    const [modal, setTrailerModal] = useState(false);

    const openTrailer = () => {
        setTrailerModal(!modal);
    };

    return (
        // Modal View of Movie Trailer
        <button className="individual-movie-buttons" onClick={openTrailer}> 
            WATCH TRAILER
            {modal ? (
            <section className="modal">
                <div className="modal-align">
                    <div className="modal-content" modal={modal}>

                        <div className="modal-video-align">
                            <iframe className="trailer-modal"
                            loading="lazy"
                            width="800"
                            height="500"
                            src={props.trailer}
                            title={props.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            />
                        </div>
                    </div>
                </div>
            </section>
            ) : null}
        </button>
    );
};