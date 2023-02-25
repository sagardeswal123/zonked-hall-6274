import { Button, Center, Heading, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../Context/AuthContext';

const init = { email: "", password: "" };

const AccountPage = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);
    const [formData, setFormData] = useState(init);
    const { email, password } = formData;
    const {SignUp,stoken} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };


      const SubmitData =(e)=>{
        e.preventDefault();
        getData(formData);
        if(stoken){
          navigate("/")
        }
      }

    const getData = (obj) =>{
        return fetch(`https://reqres.in/api/register`,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(obj),
        }).then((res)=>res.json()).then((data)=>SignUp(data.token))
    }


  return (
    <>
    <Navbar/>
    <Heading marginTop="30px">Create Account</Heading>
    <Stack>
        <Center>
        <Input marginTop="50px" w="35%" name="email" placeholder='Please Enter Your Email' size='md'
        value={email}
        onChange={(e) => handleChange(e)} />
        </Center>
        <Center>
        <InputGroup marginTop="25px" w="35%" size='md'>
        <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Please Enter password'
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
        />
        <InputRightElement width='4.5rem'>
            <Button variant="ghost" h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>
        </InputGroup>
        </Center>
        <Center>
            <Button onClick={SubmitData} marginTop="25px" marginBottom="30px" color="white" bg="rgb(58,42,124)">
                Submit
            </Button>
        </Center>
    </Stack>
    <Footer/>
    </>
  )
}

export default AccountPage;