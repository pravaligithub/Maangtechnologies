function Button(){
//const handleClick=()=>console.log("ouch");
//const handleClick2=(name)=> console.log(`${name}stop clicking me`)
let count=0;
const handleClick = (name)=>{
    if (count<3){
        count++;
        console.log(`${name} stop clicking me!`);
    }
    else{
        console.log(`${name}stop cliking me`);
    }
}
    return(
    <>
   <button onClick={()=>handleClick}>Click me 🤩</button>
    </>
    //<button onClick={handleClick}>Click me😎</button>
    //<button onClick={()=>handleClick2("pravali")}>Click me😎</button>
);
}
export default Button
