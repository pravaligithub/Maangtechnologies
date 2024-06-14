
function Bu(){
    //inline css styling-smallcomponets of projects
    const styles={ 
        backgroundColor:"blue",
        color:"white",
        padding:"10px 20px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
        marginTop: "30px",
        marginLeft:"30px",
        width:"300px",
        height:"50px" 
    }
    return (

    <button style={styles}>Click me</button>
  // <button className="button">Click me</button>
 // <button className={styles.button}>Click me</button>

) ;
}
export default Bu

