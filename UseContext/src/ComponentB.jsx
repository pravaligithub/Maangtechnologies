//import {useContext}from 'react';

import ComponentC from "./ComponentC.jsx"

//prop drilling
function ComponentB(Props) {
    return (
      <div className='box'>
          <h1>ComponentB</h1>
          <ComponentC user={Props.user} />
      </div>
    )
  }
  
  export default ComponentB
  