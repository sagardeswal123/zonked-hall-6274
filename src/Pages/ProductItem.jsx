import { Image } from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from "react-router-dom"

const ProductItem = ({id,title,price,image,rating}) => {
  return (
    <div style={{ padding:"15px",backgroundColor:"rgb(242,242,242)",margin:"8px", borderRadius:"10px"}} data-testid="product-item">
      <RouterLink to={`/product/${id}`}>
      <Image p="5px" m="auto" w="250px" h="300px" src={image} />
      <b>{title}</b>
      <br />
      <h1 style={{fontWeight:"600"}}>$ {price}</h1>
      <br />
      <div>Rating : {rating}/10</div>
      </RouterLink>
    </div>
  );
};
export default ProductItem;
