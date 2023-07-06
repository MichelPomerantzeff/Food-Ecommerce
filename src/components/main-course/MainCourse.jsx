import React from "react";
import "./MainCourse.css";
import Dish from "../slider/Dish";

export default function MainCourse({ title, dishes }) {
    return (
        <div className="main-course">
            <div className="main-course-wrapper">
                <h2>{title}</h2>
                <div className="main-course-category">
                    {dishes.map((dish) => {
                        return (
                            <div key={dish.id} className="main-course-dish">
                                <Dish dish={dish} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
