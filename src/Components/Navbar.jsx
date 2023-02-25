// import {Link as RouterLink} from "react-router-dom";
import { Input,Button, Flex, InputGroup, InputRightElement,Stack, Box,Image, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import WithSubnavigation from "./NavigationBar";
import { useContext, useRef,useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";





const Navbar = () => {

    const { isOpen,onOpen, onClose } = useDisclosure()
    const firstField = useRef();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const {stoken} = useContext(AuthContext)


  return (
    <Box>
        
        <Flex w="100%" justifyContent="space-between">
        <Image marginLeft="20px" marginRight="40px" marginTop="3px" width="120px" src="https://lh3.googleusercontent.com/BGVDCcxtLqNVR9JozCRBXgBUO_sphzfzpprGLGVTH0JOj6bSDgCMPmGUJt9pLNaDkfIZoHtNN4rfMwjN-tKlAfwTCyg87lMmekSCr4N4" alt="logo"/>

        <Flex justifyContent="center">
        <InputGroup marginLeft="30px" marginTop="30px" size='xl'>
            <Input p="10px" h="40px" w="600px" placeholder='Keyword or catalog item#' />
            <InputRightElement p="13px" children={<SearchIcon color='gray.500' />}/>
        </InputGroup>
        </Flex>

        <Stack  direction='row' spacing={5} align='center'>
        <Button size='sm' colorScheme='white' variant='ghost'>
            Catalog
        </Button>
        <Button size='sm' colorScheme='white' variant='ghost'>
            Card
        </Button>
        <Button size='sm' colorScheme='white' variant='ghost' onClick={onOpen}>
            {(stoken)?"Sign Out":"Sign In"}
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Sign In
            </DrawerHeader>
    
            <DrawerBody>
                <Stack spacing='24px'>
                <Box>
                    <Input
                    ref={firstField}
                    id='username'
                    placeholder='Email*'
                    />
                </Box>
                <Box>
                <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Password*'
                />
                <InputRightElement width='4.5rem'>
                    <Button variant="ghost" h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
                </InputGroup>
                </Box>
                <Button bg="rgb(58,42,124)" color="white">
                    Sign In
                </Button>
                <Text fontSize={12}>You can login with the same email & password as: OneStopPlus®, Woman Within®, Roaman's®, Jessica London®, Ellos®, Intimates For All™, Shoes For All™, Swimsuits For All®, BrylaneHome®, King Size®, June+Vie™, Active For All® and FullBeauty Outlet®.</Text>
                <hr />
                <Link to="/createaccount">
                <Button w="100%" bg="rgb(58,42,124)" color="white">
                    Create Account
                </Button>
                </Link>
                
                <Text fontSize={12}>Enhance your shopping experience & get rewards
                </Text>
                <hr />
                </Stack>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        <Button size='sm' colorScheme='white' variant='ghost'>
            Bag
        </Button>
        </Stack>
        </Flex>
        <WithSubnavigation />
    </Box>
  )
}

export default Navbar;