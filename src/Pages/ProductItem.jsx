import { Image } from "@chakra-ui/react";
import React from "react";

const ProductItem = ({title,price,image,category}) => {
  return (
    <div style={{ padding:"15px",backgroundColor:"rgb(242,242,242)",margin:"8px", borderRadius:"10px"}} data-testid="product-item">
      <Image p="5px" m="auto" w="250px" h="300px" src={image} />
      <b data-testid="product-title">{title}</b>
      <br />
      <span data-testid="product-price">$ {price}</span>
      <br />
      <div style={{ marginBottom:"30px", paddingRight:"40px" }}>
        <b data-testid="product-category">{category}</b>
      </div>
    </div>
  );
};
export default ProductItem;
