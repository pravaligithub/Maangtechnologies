
/*
React Hook=sepcial function that allows funcitonal components to use
 reactfeatures without class components(React v16)
 (useState,useeffect,usecontext,usereducer,usecallback and more)

 useState()=A react hook that allows the creation of a staetful variable and a setter function to update its value in the virtual Dom
 [name,setName]
 */
//import Mycomponent from "./Mycomponent.jsx"
import  Count  from './Counter.jsx';
function App() 
{
 return(<>
  <Count/>
 </>)
  
}
export default App
