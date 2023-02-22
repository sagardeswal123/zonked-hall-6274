// import {Link as RouterLink} from "react-router-dom";
import { Input,Button, Flex, InputGroup, InputRightElement,Stack, Box,Image } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import WithSubnavigation from "./NavigationBar";


const Navbar = () => {
  return (
    <Box>
        <Flex w="100%" justifyContent="space-between">
        <Image marginLeft="20px" marginRight="40px" marginTop="3px" width="120px" src="https://lh3.googleusercontent.com/46cM1tmRU44KV5aZxGULhXe7ie9S745DxEQcczQnWcS9DbaZRFA1_ibqGeJK2GkriveOhtaCZbEScuaIyDoxQqOl5D_SeOZ6SL5Qoy0" alt="logo"/>

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
        <Button size='sm' colorScheme='white' variant='ghost'>
            Sign In
        </Button>
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