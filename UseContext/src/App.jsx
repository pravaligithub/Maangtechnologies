//useContext=
//React hook that allows you to share values between multiple
// levelsof component without passing props through each level

/*
Provider Component 
1.import {createContext} from 'react';
2.export const MyContext=createContext();
3.<MyContext.Provider value={value}
       <Child/>
      </MyContext.Provider>

Consumer Components
1.import react,{useContext} from 'react';
  import {MyContext} from './ComponentA';
  2.const value=useContext(MyContext);

*/

import ComponentA from './ComponentA.jsx'

import './index.css'
function App() {
  return(
    <>
    <ComponentA/>
   
    </>
  )
}
export default App
