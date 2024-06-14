 

 function Food(){

    const food1="Orange";
    const food2="Mango";

   return(
        <ul>
            <li><a href="#">Apple</a></li>
            <li><a href="#">Banana</a></li>
            <li><a href="#">Strawberry</a></li>
            <li><a href="#">{food1.toUpperCase()}</a></li>
            <li><a href="#">{food2}</a></li>
        </ul>
   );
 }

 export default Food