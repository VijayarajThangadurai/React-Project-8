import React, { useState } from "react";
import ShoeContext from "./Shoe-context";

const ShoeProvider=(props)=>{

    const [Shoes,setShoes]=useState([])

    const addHandler=(item)=>{
        setShoes((prevShoe)=>{
            const updatedShoes=prevShoe.concat(item)
            return updatedShoes;
        })
    }
    const shoeContext={
        Shoes:Shoes,
        addShoe:addHandler,
    }
    return <ShoeContext.Provider value={shoeContext}>
        {props.children}
    </ShoeContext.Provider>
};

export default ShoeProvider;