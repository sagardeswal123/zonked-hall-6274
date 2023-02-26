import { Box, Flex, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Navbar from '../Components/Navbar';
import ProductItem from './ProductItem';

export default function Product(){

  const [data, setData] = useState([]);
  const [porder, setPorder] = useState("");
  const [rorder, setRorder] = useState("");
  const [color, setColor] = useState("");

  const getData = ()=>{
    fetch(`https://63f4fc3255677ef68bc7ee48.mockapi.io/product?sortBy=price&order=${porder}&filter=${color}`).then((data)=>data.json())
    .then((res)=>setData(res))
  }
  const getData1 = ()=>{
    fetch(`https://63f4fc3255677ef68bc7ee48.mockapi.io/product?sortBy=rating&order=${rorder}&filter=${color}`).then((data)=>data.json())
    .then((res)=>setData(res))
  }

  useEffect(()=>{
    getData1(rorder,color)
  },[rorder,color])

  useEffect(()=>{
    getData(porder,color)
  },[porder,color])

  return (
    <>
    <Navbar/>
    <Box w="70%" m="auto">
    <Flex gap="10px" marginTop="20px">
    <Select onChange={(e)=>setPorder(e.target.value)} placeholder='Sort By Price'>
      <option value='asc'>Low To High</option>
      <option value='desc'>High To Low</option>
    </Select>
    <Select onChange={(e)=>setColor(e.target.value)} placeholder='Filter By Color'>
      <option value='red'>RED</option>
      <option value='black'>Black</option>
      <option value='green'>GREEN</option>
      <option value='blue'>BLUE</option>
      <option value='gray'>GRAY</option>
      <option value='white'>WHITE</option>
      <option value='purple'>PURPLE</option>
    </Select>
      <Select onChange={(e)=>setRorder(e.target.value)} placeholder='Sort By Rating'>
      <option value='desc'>High To Low</option>
      <option value='asc'>Low To High</option>
    </Select>
    </Flex>
    </Box>
    <div style={{display:"grid",width:"100%",gridTemplateColumns:"repeat(4,1fr)",margin:"2rem 0px 0px 0px", marginTop:"2rem"}}>

    {/* <SimpleSidebar/> 
    display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  @media all and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }*/}
       {data.map((data)=>{
        return (
          <ProductItem {...data} />
        )
      })}
      </div>
    </>
  )
}

