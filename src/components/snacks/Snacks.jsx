import Card from "../slider/Card";

export default function Snacks({ title, snacks }) {
    return (
        <div className="bg-gradient-to-t from-gray-100 to-orange-100 py-4">
            <div className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
                <h2 className="font-bold mb-2">{title}</h2>
                <div className="grid grid-cols-2 gap-2">
                    {snacks.map(snack => {
                        return (
                            <Card key={snack} dish={snack} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
