import { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState('guest');
    const [age,setAge]=useState(0);
    const[isEmployed,setIsEmployed]=useState(false);
    
    // Initialize state with an empty string or any initial value
const updateName = () => {
        setName('Spongebob'); // Use the setName function to update the state
        //console.log('Spongebob'); // This will now log 'Spongebob' correctly
    };
const incrementAge=()=>{
    setAge('20');
}
const employed=()=>{
    setIsEmployed(!isEmployed);
}
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed:{isEmployed ? "yes":"No"}</p>
            <button onClick={employed}>Toggle status</button>
        </div>
    );
}
export default MyComponent;
