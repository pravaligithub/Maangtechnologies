//if statement- if a condition is true,execute some code if not,do something else.

/*
let s=false;
if (s){
    console.log("you are a student");
}
else{
    console.log("you are not a student");
}*/

const myText = document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){

    age=myText.value;
    age=Number(age);

    if (age>=18){
        resultElement.textContent="elegible to vote";
    }
    else if(age>=60) {

        resultElement.textContent="expired voting";
    }
    else {
        resultElement.textContent="not eligible";
    }
}

