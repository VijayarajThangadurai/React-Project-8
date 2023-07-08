import React, { useState } from "react";
import InputForm from "./InputForm";

const App=()=> {
  const [productList, setproductList]= useState([]);
  const addproductHandler=(
    listitemname,
    listitemdescription,
    listitemprice,
    listitemsize)=>{
setproductList((prevState)=>{
  return [...prevState,{
    itemname: listitemname,
    itemdescription: listitemdescription,
    itemprice: listitemprice,
    itemsize: listitemsize
  },];
});
    }
  return (
    <div>
      <InputForm onAddproduct={addproductHandler}/>
      <productList list={productList} setList={setproductList}/>
    </div>
  )
}

export default App;
