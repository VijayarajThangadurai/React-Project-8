import { useContext, useState } from "react";
import { Row,Col,Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const ShoeItem=(props)=>{

     const [largeQuantity,setLargeQuantity]= useState(Number(props.large))
     const [mediumQuantity,setmediumQuantity]= useState(Number(props.medium))
     const [smallQuantity,setsmallQuantity]= useState(Number(props.small))

    const cartCtx=useContext(CartContext);



let size;
    const largeClickHandler=()=>{
        console.log('click')
        size='l'
        cartCtx.addProduct({...props,quantityL:1},size)
        setLargeQuantity((prev)=>{
            return prev=prev-1
        })
    }


    const mediumClickHandler=()=>{
        size='m'
        cartCtx.addProduct({...props,quantityM:1},size)
        setmediumQuantity((prev)=>{
            return prev=prev-1
        })
    }

    const smallClickHandler=()=>{
        size='s'
        cartCtx.addProduct({...props,quantityS:1},size)
        setsmallQuantity((prev)=>{
            return prev=prev-1
        })
    }


    return <Row className="my-5">
    <Col>{props.name}</Col>
    <Col>{props.des}</Col>
    <Col>{`${props.price} Rs`}</Col>
    <Col><Button onClick={largeClickHandler}>{`large Size (${largeQuantity})`}</Button></Col>
    <Col><Button onClick={mediumClickHandler}>{`Medium Size (${mediumQuantity})`}</Button></Col>
    <Col><Button onClick={smallClickHandler}>{`Small Size (${smallQuantity})`}</Button></Col>
</Row>
};

export default ShoeItem;