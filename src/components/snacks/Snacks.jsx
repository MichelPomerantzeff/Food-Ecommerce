import "./Snacks.css";
import React from 'react'
import Dish from "../slider/Dish";

export default function Snacks({ title, snacks }) {
    return (
        <div className="snacks">
            <h2 className="snack-title">{title}</h2>
            <div className="snacks-wrapper">
                {snacks.map(snack => {
                    return (
                        <div key={snack.id} className="snack-wrapper">
                            <Dish dish={snack} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
