export default function HealthyDay({ day, healthyOptions }) {

    const totalPrice = healthyOptions.reduce((acc, cur) => acc + cur.price, 0);

    return (
        <div className="px-5">
            <div className="max-w-[1200px] m-auto my-10">
                <header className="flex gap-2 mb-5">
                    <div className="shadow rounded-md overflow-hidden">
                        <div className="bg-green-600 text-white font-bold px-3">Day</div>
                        <div className="text-center py-1 text-green-600 font-bold">{day}</div>
                    </div>
                    <div className="">
                        <h2 className="font-bold">Lunch</h2>
                        <span>€{totalPrice.toFixed(2)}</span>
                    </div>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        healthyOptions.map(option => {
                            return (
                                <div key={option.id} className="flex gap-2">
                                    <div className="w-[120px]">
                                        <img className="rounded-md shadow" src={option.image} alt="HEALTHY DAY IMAGE" />
                                    </div>
                                    <div className="flex flex-col justify-around">
                                        <div className="font-bold">{option.title}</div>
                                        <div className="">€{option.price.toFixed(2)}</div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
