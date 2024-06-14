import {useState,useEffect} from 'react'

function Mycomponent() {
        const[count,setCount]=useState(0);
        const[color,setColor]=useState("green");

useEffect(()=>{

        document.title=`Count:${count}${color}`;
        return()=>{
            //Some cleanupd code
        }
        },[count,color]);
        function addCount(){
            setCount(c=>c+1);
        }
        function subtractCount(){
            setCount(c=>c-1);
        }
        function changeColor(){
            setColor(c=>c==='green'?'red':'green');
        }

  return (
    <div>
    <>
      <p style={{color:color}}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>ChangeColor</button>
      </>
    </div>

  )
}

export default Mycomponent;

