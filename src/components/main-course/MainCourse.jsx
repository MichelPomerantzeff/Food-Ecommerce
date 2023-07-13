import "./MainCourse.css";
import Card from "../slider/Card";

export default function MainCourse({ title, dishes }) {
    return (
        <div className="main-course">
            <div className="main-course-wrapper">
                <h2>{title}</h2>
                <div className="main-course-category">
                    {dishes.map((dish) => {
                        return (
                            <Card key={dish.id} dish={dish} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
