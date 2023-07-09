import React from "react";

const ShoeContext=React.createContext({
    Shoes:[],
    addShoe:(item)=>{}
});

export default ShoeContext;