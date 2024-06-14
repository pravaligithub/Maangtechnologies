/*
updater funciton-A function passed as an argument to setState() usually
ex setYear(y=Y+1)
Allow for safe updates based on the previous state used with
multiple state updates and asynchronus functions Good practise to use update funciton
*/
import {useState} from 'react'

function Updaterfn() {
    const[count,setCount]= useState(0);

    function increment(){
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    function decrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    function reset(){
        setCount(0);
    }
      return (
        <div>
            <p >Count:{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
      );  

  
}

export default Updaterfn
