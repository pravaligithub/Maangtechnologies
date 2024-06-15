//Random Generator

/*const min=50;
const max=100;

let randomNum= Math.floor(Math.random()*(max-min))+min;

console.log(randomNum);*/

const myButton=document.getElementById("myButton");
const label1=document.getElementById("myLabel1");
const label2=document.getElementById("myLabel2");
const label3=document.getElementById("myLabel3");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function(){

    randomNum1 = Math.floor(Math.random * max) + min;
    randomNum2 = Math.floor(Math.random * max) + min;
    randomNum3 = Math.floor(Math.random * max) + min;
    myLabel1.textcontent = randomNum1;
    myLabel2.textcontent = randomNum2;
    myLabel3.textcontent = randomNum3;

}


//let randomNum= Math.random();
//let randomNum= Math.floor(Math.random()*100)+1;
//console.log(randomNum);

