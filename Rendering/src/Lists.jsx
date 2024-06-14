function Lists(){
   // const fruits=["apple", "banana",  "orange",  "strawberry"];
   const fruits=[{id:1,name:"apple",calories:55},
                {id:2,name:"orange",calories:47},
                {id:3,name:"mango",calories:100},
                {id:4,name:"strawberry",calories:25},
                {id:5,name:"banana",calories:5}];

   // Fruits.sort((a,b)=> a.name.localCompare(b.name));//AlphaBetical
//Fruits.sort((a,b)=> b.name.localCompare(a.name));//Reverse Alphabetical
//Fruits.sort((a,b)=> a.calories - b.calories); //Numeric
   // Fruits.sort((a,b)=> b.calories - a.calories); //Reverse Numeric
    const lowCalFruits =fruits.filter( Fruit => Fruit.calories < 50); 
   // const highCalFruits =fruits.filter( Fruit => Fruit.calories > 50);//
    /*const ListItems=fruits.map(Fruit => <li  key={Fruit.id}>
                                             <i><b>{Fruit.name}</b></i>:&nbsp;
                                           <b>{Fruit.calories}</b></li>);*/
   /*const ListItems=lowCalFruits.map( lowCalFruits => <li  key={lowCalFruits.id}>
                                         <i><b>{lowCalFruits.name}</b></i>:&nbsp;
                                          <b>{lowCalFruits.calories}</b></li>); */ 
    const ListItems=lowCalFruits.map( lowCalFruits => <li  key={lowCalFruits.id}>
                                         <i><b>{lowCalFruits.name}</b></i>:&nbsp;
                                          <b>{lowCalFruits.calories}</b></li>);                                                                             
    return(<ol>{ListItems}</ol>);
}
export default Lists