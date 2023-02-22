import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Box bg="pink.500" color="white" h="160px">
            <Center>
            <Text><Flex gap="15px" flexDirection="row"><Heading fontFamily="Baskerville" fontSize={100} fontWeight={600}>Amazing Deals </Heading><Heading fontSize={70} marginTop="28px" fontFamily="Baskerville" fontWeight={500}> FROM $14</Heading></Flex></Text>
            </Center>
            <Flex marginTop="15px" gap="5px" justifyContent="center">
                <Button h="50px" w="22%" bg="blueviolet">SHOP ALL THE DEALS</Button>
                <Button h="50px" w="22%" bg="blueviolet">SHOP BEST SELLERS</Button>
            </Flex>
        </Box>
        
    </div>
  )
}

export default LandingPage