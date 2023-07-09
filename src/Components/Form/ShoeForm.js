import React, { useContext, useRef } from "react";
import { Form, Button, Container, ThemeProvider} from 'react-bootstrap';
import ShoeContext from "../store/Shoe-context";


const ShoeForm = () => {
    const ShoeCtx=useContext(ShoeContext);

    const nameRef=useRef();
    const desRef=useRef();
    const priceRef=useRef();
    const largeRef=useRef();
    const mediumRef=useRef();
    const smallRef=useRef();
    
    const submitHandler=(event)=>{

        event.preventDefault()
        const product={
            name:nameRef.current.value,
            des:desRef.current.value,
            price:priceRef.current.value,
            large:largeRef.current.value,
            medium:mediumRef.current.value,
            small:smallRef.current.value
        }

        console.log(product)
        ShoeCtx.addShoe(product)
        
    }
  return (
    <ThemeProvider>
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Shoe Name</Form.Label>
          <Form.Control type="text" placeholder="Shoe Name"ref={nameRef} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description"ref={desRef} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" ref={priceRef}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Large Size</Form.Label>
          <Form.Control type="number" placeholder="Size" ref={largeRef}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Medium Size</Form.Label>
          <Form.Control type="number" placeholder="Size"ref={mediumRef} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Small Size</Form.Label>
          <Form.Control type="number" placeholder="Size"ref={smallRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </ThemeProvider>
  );
};

export default ShoeForm;