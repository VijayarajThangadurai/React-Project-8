import { useContext } from "react";
import ShoeContext from "../store/Shoe-context";
import ShoeItem from "./ShoeItem";

const ShoeList = () => {
  const ShoeCtx = useContext(ShoeContext);
  return (
    <>
      {ShoeCtx.Shoes.map((item) => (
        <ShoeItem
          key={item.name}
          name={item.name}
          des={item.des}
          price={item.price}
          large={item.large}
          medium={item.medium}
          small={item.small}
        />
      ))}
    </>
  );
};
export default ShoeList;