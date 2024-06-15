//checked=property that determines the checked state of an HTML checkbox or radio buton element

const myCheckBox=document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const payPalBtn=document.getElementById("payPalBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){

    if(myCheckBox.checked){
        subResult.textContent="you are subscribed";
    }
    else{
        subResult.textContent="you are Not Subscribed";
    }
    if(visaBtn.checked){
        paymentResult.textContent="you are visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent="you are mastercard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent="you are paybalbtn";
    }
    else{
        paymentResult.textContent="you must select";
    }

}