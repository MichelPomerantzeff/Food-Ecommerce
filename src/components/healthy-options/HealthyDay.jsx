import React, { useEffect } from "react";

export default function HealthyDay({ day, healthyOptions }) {

    const totalPrice = healthyOptions.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    return (
        <div className="healthy-day">
            <header className="healthy-day-header">
                <div className="count-day-wrapper">
                    <div className="count-day-header">Day</div>
                    <div className="count-day-body">{day}</div>
                </div>
                <div className="healthy-lunch">
                    <h2>Lunch</h2>
                    <span>€{totalPrice.toFixed(2)}</span>
                </div>
            </header>
            <div className="healthy-day-items-wrapper">
                {
                    healthyOptions.map(option => {
                        return (
                            <div key={option.id} className="healthy-day-item">
                                <div className="healthy-day-img">
                                    <img src={option.image} alt="HEALTHY DAY IMAGE" />
                                </div>
                                <div className="healthy-day-fields">
                                    <div className="healthy-day-desc">{option.title}</div>
                                    <div className="healthy-day-price">€{option.price.toFixed(2)}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
