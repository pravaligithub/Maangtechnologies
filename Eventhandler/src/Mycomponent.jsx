import {useState} from 'react'

function Mycomponent() {

  const [name,setName]=useState("bunny");
  const [quantity,setQuantity]=useState("1");
  const [comment,setComment]=useState("hello");
  const [payment,setPayment]=useState("100");
  const [shipping,setShipping]=useState("");
  function handleNameChange(event){
        setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
}
function handleCommentChange(event){
    setComment(event.target.value);
}
function handlePaymentChange(event){
    setPayment(event.target.value);
}
function  handleShippingChange(event){
setShipping(event.target.value)
}
return (
    <div>
     <input value={name} onChange={handleNameChange}/>

     <p>Name: {name}</p>

     <input value={quantity} onChange={handleQuantityChange}/>

     <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange}/>

    <p>Comment: {comment}</p>

    <select  value={payment} onChange={handlePaymentChange}>

        <option>Select an option</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
       
    </select>
    <p>Payment:{payment}</p>
    <label>
        <input type="radio" value="Pick Up" checked={shipping==="PickUp"} onChange={handleShippingChange}/>
        Pick Up
    </label>
    <label>
        <input type="radio" value="Delivery" checked={shipping==="delivery"} onChange={handleShippingChange}/>
        Delivery
    </label>
    <p>Shipping:{shipping}</p>
    
    </div>


  )
}

export default Mycomponent
