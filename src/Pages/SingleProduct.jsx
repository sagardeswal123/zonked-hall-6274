import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Footer from '../Components/Footer';

const SingleProduct = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    const cost = Number(data.price);

    useEffect(()=>{
        axios.get(`https://63f4fc3255677ef68bc7ee48.mockapi.io/product/${id}`).then((res)=>setData(res.data))
    },[id]);

  return (
    <div>
        <Box>
            <Navbar/>
            <Flex>
                <Image w="35%" h="520px" margin="40px" marginLeft="70px" src={data.image} />
                <Box textAlign="left">
                    <Heading marginTop="40px" fontSize="22px">{data.title}</Heading>
                    <Text style={{textDecoration: 'line-through',fontSize:"15px",fontWeight:"50"}}>$ {cost + 20.00}.00</Text>
                    <Text fontSize="18px">$ {cost}.00</Text>
                    <Text fontWeight={500} color="red.800">Limited Time Price!</Text>
                    <Box w="350px" marginTop={10} style={{boxShadow: '1px 2px 9px #F4AAB9',borderRadius:"5px", padding: '1em',}}>
                        <Flex>
                            <Image marginTop="-30px" marginRight="15px" src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.34c/on/demandware.static/-/Sites-oss-Library/default/dwe12903b5/ca-images/plcc-images/platinum/ca-plcc-platinum-icon.svg?yocs=j_" />
                            <Text>            
                                Save $20 on your first purchase of $25+ when you open and use a Catherines Credit Card!1
                            </Text>
                            <br />
                            <br />
                        </Flex>
                    </Box>
                    <br />
                    <Button color="white" bg="rgb(58,42,124)" w="100%">Add To Bag</Button>
                    <br />
                    <br />
                    <Menu>
                        <MenuButton w="100%" as={Button} rightIcon={<ChevronDownIcon />}>
                            Description & Details
                        </MenuButton>
                        <MenuList>
                            <MenuItem w="500px">Item Number: Please Select Size
                                Our gorgeous dress set offers a soft silhouette and unmatched elegance. The tank-style long dress features caviar beading and is topped with a matching sheer jacket that creates a flowy finish.</MenuItem>
                        </MenuList>
                    </Menu>
                    <br />
                    <br />
                    <Menu>
                        <MenuButton w="100%" as={Button} rightIcon={<ChevronDownIcon />}>
                            Shipping & Returns
                        </MenuButton>
                        <MenuList>
                            <MenuItem w="500px">Free exchanges within 60 days of purchase, excluding final sale items.

                            Our goal is your complete satisfaction! If we have not delighted you, unworn, unwashed or defective merchandise may be exchanged or returned within 60 days of ship date. We are happy to process an exchange at no additional shipping expense for a new size, color, or different item. If you prefer to return, you will receive a refund of the purchase price (less shipping and prepaid return label charges). A refund or exchange will not be processed for products that do not meet exchange or refund criteria, are received after 60 days from the original ship date, or are designated as final sale product.

                            Exchanges exclude items shipped directly from 3rd party brands, items purchased through Amazon, Walmart, eBay, or other external websites, or purchases made using PayPal.</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Footer />
        </Box>
    </div>
  )
}

export default SingleProduct


