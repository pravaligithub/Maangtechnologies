import  { useState, createContext } from 'react'; // Import React and other necessary modules
import ComponentB from "./ComponentB.jsx";

// Create a context for user data
export const UserContext = createContext();

function ComponentA() {
  // Initialize state for user
  const [user, setUser] = useState("Brocode");

  return (
    // Provide the UserContext.Provider to make the user state available to child components
    <UserContext.Provider value={{ user, setUser }}>
      <div className='box'>
        <h1>ComponentA</h1>
        {/* Display the user's name */}
        <h2>{`Hello ${user}`}</h2>
        
        {/* Render ComponentB and pass user state as props */}
        <ComponentB />
      </div>
    </UserContext.Provider>
  );
}

export default ComponentA;
