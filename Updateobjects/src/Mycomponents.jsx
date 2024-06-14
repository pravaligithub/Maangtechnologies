import {useState} from 'react';
function Mycomponents() {
    const[car, setCar]=useState({year:2024,
        make:"ford",
        model:"mustag"});

    function handleYearChange(event){
      //setCar({...car, year: event.target.value});
      setCar(c=>({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c=>({...c, make: event.target.value}));
      }

      function handleModelChange(event){
        setCar(c=>({...c, model: event.target.value}));
      }

  return (
    <div>
         <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
         <input type="number" value={car.year} onChange={handleYearChange}></input>
         <input type="text" value={car.make} onChange={handleMakeChange}></input>
         <input type="text" value={car.model} onChange={handleModelChange}></input>
    </div>
  )
}

export default Mycomponents;
