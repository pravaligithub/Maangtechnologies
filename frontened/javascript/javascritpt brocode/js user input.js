// How to create user input
//Easy waywith a window prompt

/*let username= window.prompt("what's your name");
console.log(username);*/

let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myName").innerHTML="Hello" + username ;
}

