import Card from "../slider/Card";

export default function MainCourse({ title, dishes }) {
    return (
        <div className="bg-gradient-to-t from-white to-orange-100 py-4">
            <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
                <h2 className="font-bold mb-2">{title}</h2>
                <div className="grid grid-cols-2 gap-2">
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
