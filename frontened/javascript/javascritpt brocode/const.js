//const =a variable can't be changed


const pi=3.14;
let circumference;
let radius;
//radius=window.prompt("Enter radius:");

//console.log(circumference);
document.getElementById('mySubmit').onclick=function(){
  radius=document.getElementById('myText').value;
  radius=Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById('myH1').textcontent=circumference + "cm";

}

