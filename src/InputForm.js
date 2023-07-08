import React, { useState } from "react";

const InputForm =(props) =>{
 const [enterShoeName, setShoeName] = useState('');
 const [enterDescription, setDescription] = useState('');
 const [enterPrice, setPrice] = useState('');
 const [enterSize,setSize] =useState('');

 const shoeNameHandler =(event)=>{
    setShoeName(event.target.value);
 }
 const descriptionHandler =(event)=>{
    setDescription(event.target.value);
 }
 const priceHandler =(event)=>{
    setPrice(parseInt(event.target.value));
 }
 const sizeHandler =(event)=>{
    setSize(event.target.value);
 };
 const submitHandler = (event)=>{
    event.preventDefault();
    const formData ={
        shoename: enterShoeName,
        description: enterDescription,
        price: enterPrice,
        size: enterSize,

    };
    props.onAddproduct(
        formData.shoename,
        formData.description,
        formData.price,
        formData.size,
    );
    console.log(formData, "in InputForm");
    setShoeName("");
    setDescription("");
    setPrice("");
    setSize("");

 };
 return (
    <div>
        <form onSubmit={submitHandler}>
<div>
    <label> Shoe Name:</label>
    <input type="text" value={enterShoeName}  onChange={shoeNameHandler}/>
    <label>Description:</label>
    <input type="text" value={enterDescription} onChange={descriptionHandler}/>
    <label>Price:</label>
    <input type="number" value={enterPrice} onChange={priceHandler}/>
    <label>Quantity Available:</label>
    <input type="text" value={enterSize} onChange={sizeHandler}/>
    <button type="submit">Add Product</button>
</div>
        </form>
    </div>
 )
}

export default InputForm;