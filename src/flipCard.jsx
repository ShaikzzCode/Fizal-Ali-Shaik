import React from "react";

export default function FlipCard(fcard) {
    const circleStyle = {
        '--percentage': `${fcard.percentage}`
    };

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={fcard.skillIcon} alt="Avatar" />
                    <h3>{fcard.name}</h3>
                    {/* circular range bar */}
                    <div className="progress-container">
                        <div className="circle" style={circleStyle}>
                            <svg>
                                <circle cx="60" cy="60" r="50"></circle>
                                <circle cx="60" cy="60" r="50" className="progress"></circle>
                            </svg>
                            <div className="inner-circle">
                                <span>{fcard.percentage}%</span>
                            </div>
                        </div>
                    </div>
                    {/* circular range bar */}
                </div>
                <div className="flip-card-back">
                    <p>{fcard.description}</p>
                </div>
            </div>
        </div>
    );
}
