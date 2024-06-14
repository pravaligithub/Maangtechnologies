import {useEffect,useRef} from 'react'

function MyComponent() {

    //let [number,  setNumber]=useState(0);
    const ref=useRef(0);
    console.log(ref);

    useEffect(()=>{
        console.log("Component rendered");
    });

    function handleClick(){
        //setNumber( n=> n+1 );
        ref.current++;
        console.log(ref.current);
    }

return (
<div>
<button onClick={handleClick}>
      Click me!
    </button>
    <input />
    </div>
  );
}
export default MyComponent
