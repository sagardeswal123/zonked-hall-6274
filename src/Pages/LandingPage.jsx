import { Box, Button, Center, Flex, Heading, Text,Image, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <Box>
        <Navbar/>
        <Box bg="pink.500" color="white" h="160px">
            <Center>
            <Text><Flex gap="15px" flexDirection="row"><Heading fontFamily="Baskerville" fontStyle="italic" fontSize={100} fontWeight={600}>Amazing Deals </Heading><Heading fontSize={70} marginTop="28px" fontFamily="Baskerville" fontWeight={500}> FROM $14</Heading></Flex></Text>
            </Center>
            <Flex marginTop="15px" gap="5px" justifyContent="center">
                <Button h="50px" w="22%" bg="blueviolet">SHOP ALL THE DEALS</Button>
                <Button h="50px" w="22%" bg="blueviolet">SHOP BEST SELLERS</Button>
            </Flex>
        </Box>
        <Image margin="auto" className='firstImageAbs' marginTop={20} src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.348/on/demandware.static/-/Sites-oss-Library/default/dwe0b79276/ca-images/homepage/2023/wk08/ca-0221-Amazing_D.jpg?yocs=j_m_" alt="home1pc" />
        <Box className='firstTextRel'>
            <Text fontWeight={600} fontSize="25px" color="blue.800">CRISSCROSS TIMELESS <br /> TUNIC TANK <br /></Text>
            <Text fontWeight={600} fontSize="25px" color="pink.500" >Now</Text>
            <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="pink.500" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="pink.500">18</Text></Box>
            <Text marginTop="-15px" fontWeight={400} fontSize="25px">WAS $29.50</Text>
            <Button marginTop="20px" w="45%" color="white" bg="blue.600">SHOP NOW</Button>
        </Box>
        <Box className='firstTextRel2'>
            <Text fontWeight={600} fontSize="25px" color="blue.800">SHADOW STRIPE <br /> CARDIGAN <br /></Text>
            <Text fontWeight={600} fontSize="25px" color="pink.500" >Now</Text>
            <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="pink.500" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="pink.500">25</Text></Box>
            <Text marginTop="-15px" fontWeight={400} fontSize="25px">WAS $54.95</Text>
            <Button marginTop="20px" w="15%" color="white" bg="blue.600">SHOP NOW</Button>
        </Box>
        <Grid templateColumns="repeat(2,1fr)"gap={2}  marginTop="100px">
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP TOPS & SWEATERS</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP DRESSES</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP BLOUSES</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP PANTS</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP JEANS</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP ACTIVEWEAR</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP CARDIGANS</GridItem>
            <GridItem fontSize="25px" fontWeight={500} p="8px" bg="rgb(224,0,135)" color="white">SHOP JACKETS</GridItem>
        </Grid>
        <Box h="870px" marginTop={10} bg="rgb(58,42,124)">
            <Box>
                <Box color="white" display="inline-flex"><Text fontSize={50} marginTop="28px" fontFamily="Baskerville" fontWeight={500}>MORE</Text> <Text marginLeft={5} marginRight={5} fontSize={70} marginTop="5px" fontFamily="Baskerville" fontStyle="italic" fontWeight={500}>Amazing Deals</Text> <Text fontSize={50} marginTop="28px" fontFamily="Baskerville" fontWeight={500}>FROM</Text> <Text fontSize={50} marginTop="10px" fontFamily="Baskerville" fontWeight={500} marginLeft={5}>$</Text><Text fontSize={70} marginTop="5px" fontFamily="Baskerville" fontWeight={500}>14</Text></Box>
                <br />
                <Button w="30%" color="white" variant='outline'>SHOP ALL AMAZING DEALS</Button>
            </Box>
            <Image className='secondPartAbs' src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.348/on/demandware.static/-/Sites-oss-Library/default/dwd7f01d70/ca-images/homepage/2023/wk08/ca-0221-Amazing2_D.png?yocs=j_" alt="image2"/>
            <Box className='secondRelText1'>
                <Text fontWeight={600} fontSize="25px" color="white" fontStyle="italic" >Now</Text>
                <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="white" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="white">18</Text></Box>
                <Text marginTop="-15px" fontWeight={400} color="white" fontSize="25px">WAS $29.50</Text>
                <Button onClick={()=>console.log("clicked")} marginTop="20px" w="40%" color="rgb(58,42,124)" bg="white">SHOP NOW</Button>
            </Box>
            <Box className='secondRelText2'>
                <Text fontWeight={600} fontSize="25px" color="white" fontStyle="italic" >Now</Text>
                <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="white" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="white">18</Text></Box>
                <Text marginTop="-15px" fontWeight={400} color="white" fontSize="25px">WAS $29.50</Text>
                <Button onClick={()=>console.log("clicked")} marginTop="20px" w="12%" color="rgb(58,42,124)" bg="white">SHOP NOW</Button>
            </Box>
            <Box className='secondRelText3'>
                <Text fontWeight={600} fontSize="25px" color="white" fontStyle="italic" >Now</Text>
                <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="white" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="white">18</Text></Box>
                <Text marginTop="-15px" fontWeight={400} color="white" fontSize="25px">WAS $29.50</Text>
                <Button marginTop="20px" w="12%" color="rgb(58,42,124)" bg="white">SHOP NOW</Button>
            </Box>
            <Box className='secondRelText4'>
                <Text fontWeight={600} fontSize="25px" color="white" fontStyle="italic" >Now</Text>
                <Box display="inline-flex"><Text marginTop="-10px"  fontWeight={600} fontSize="55px" color="white" >$</Text><Text fontWeight={700} marginTop="-35px" fontSize="95px" color="white">18</Text></Box>
                <Text marginTop="-15px" fontWeight={400} color="white" fontSize="25px">WAS $29.50</Text>
                <Button marginTop="20px" w="15%" color="rgb(58,42,124)" bg="white">SHOP NOW</Button>
            </Box>
        </Box>
        <Flex marginTop={5} p="5px" color="white" bg="rgb(58,42,124)">
            <Center margin="auto">
            <Text fontStyle="italic" marginRight={5} fontWeight="400" fontSize="35px">  SEE IT FIRST!</Text>
            <Text marginRight={5} marginTop="8px" fontWeight="300" fontSize="20px">ENJOY EARLY ACCESS TO NEW ARRIVALS,OFFERS AND SALE ALERTS</Text>
            <Button color="rgb(58,42,124)">SIGN UP FOR EMAILS</Button>
            </Center>
        </Flex>
        <Box>
            <Image marginTop={10} src="https://lh3.googleusercontent.com/SBXczF3JxYb1ogF-0fpJlbnk0iDPuN5J7RzHKkwSvl_FBDawX1pwgTNlkS8P0WWqD2jJpzPD2ow3m34i9LlBUxh33coVBgyUP6qMDkA"/>
        </Box>
        <Box>
            <Image marginTop={10} src = "https://lh3.googleusercontent.com/81hv7TkvUu2MNQ4xSE6SLiTs5gSM1muJsOSLC9VJiHPEdonhJ67lU6AOio52p1KeZ62O3mY3yuaeWVLAfAXVlH82-4Iv-o38vcBPuzi_vQ" />
        </Box>
        <Box>
            <Image marginTop={10} src="https://lh3.googleusercontent.com/AMIbf4BWGf6kQwqaY9GFgMKt1VlvtBUWLteXN-AUeWvHREGqzhvfwMQYQIFYX8Fr8xMvoTV8QNwLZJr5DckV7AainUhJHwu4mn76W0M" />
            <Image src="https://lh3.googleusercontent.com/WDPOxcDw01YfdRiEq8o7sTKeK0Goog0cQ2mRVY-HMKAITFqWpYb6ynTpN7-Xhc0RFWh73jY-gthhAMikgaBp0hGYFI9wnP3QVypAYyfw" />
        </Box>
        <Box>
            <Image marginTop={10} src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.349/on/demandware.static/-/Sites-oss-Library/default/dwe64eda39/ca-images/homepage/2022/wk37/09-2022-CA-Outfitting-HP-Banner-051622_D2.jpg?yocs=j_m_" />
        </Box>
        <Footer />
    </Box>
  )
}

export default LandingPage