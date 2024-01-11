import Card from "../slider/Card";

export default function MainCourse({ title, dishes }) {
    return (
        <div className="p-3">
            <h2 className="font-bold mb-2">{title}</h2>
            <div className="grid grid-cols-2 gap-2">
                {dishes.map((dish) => {
                    return (
                        <Card key={dish.id} dish={dish} />
                    );
                })}
            </div>
        </div>
    );
}
