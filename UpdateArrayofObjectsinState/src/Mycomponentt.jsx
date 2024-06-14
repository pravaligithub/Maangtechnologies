import { useState } from "react";

function Mycomponentt() {
    const [Cars, setCars] = useState([]);
    const [CarYear, setCarYear] = useState(new Date().getFullYear());
    const [CarMake, setCarMake] = useState("");
    const [CarModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = { year: CarYear, make: CarMake, model: CarModel };
        setCars(cars => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(cars => cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {Cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model} <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="number" value={CarYear} onChange={handleYearChange} />
            <input type="text" value={CarMake} onChange={handleMakeChange} placeholder="Enter car make" /><br/>
            <input type="text" value={CarModel} onChange={handleModelChange} placeholder="Enter car model" /><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default Mycomponentt;
