import Card from "../slider/Card";

export default function Snacks({ title, snacks }) {
    return (
        <div className="p-3">
            <h2 className="font-bold mb-2">{title}</h2>
            <div className="grid grid-cols-2 gap-2">
                {snacks.map(snack => {
                    return (
                        <Card key={snack} dish={snack} />
                    );
                })}
            </div>
        </div>
    );
}
