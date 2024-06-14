import {useState,useEffect} from 'react'

function Setwidth() {

        const[width,setWidth]=useState(window.innerWidth);
        const[height,setHeight]=useState(window.innerHeight);

        useEffect(()=>{
            window.addEventListener("resize",handleResize);
            console.log("Event LISTENER ADDED");

            return()=>{
                window.removeEventListener("resize",handleResize);
                console.log("Event listener added");
            }
        },[]);
        


        function handleResize(){
            setWidth(window.innerwidth);
            setHeight(window.innerHeight);
        }

        return(
            <>
            <p>Window width:{width}px</p>
             <p>Window Height:{height}px</p></>
        );
}

export default Setwidth;