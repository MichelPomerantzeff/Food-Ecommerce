import "./Snacks.css";
import Card from "../slider/Card";

export default function Snacks({ title, snacks }) {
    return (
        <div className="snacks">
            <h2 className="snack-title">{title}</h2>
            <div className="snacks-wrapper">
                {snacks.map(snack => {
                    return (
                        <div key={snack.id} className="snack-wrapper">
                            <Card dish={snack} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
