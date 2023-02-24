import { Button, Center, Heading, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const init = { email: "", password: "" };

const AccountPage = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);
    const [formData, setFormData] = useState(init);
    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };


      const SubmitData =(e)=>{
        e.preventDefault();
        getData(formData)
      }

    const getData = (obj) =>{
        return fetch(`https://reqres.in/api/register`,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(obj),
        }).then((res)=>console.log(res))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setbtnPress(true);
    //     PostRequest(formData);
    //   };

    // const PostRequest = (obj) => {
    //     return fetch("https://reqres.in/api/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(obj),
    //     })
    //       .then((response) => {
    //         if (response.status === 200) {
    //           return response.json();
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         if (data.token) {
    //           let token = data.token;
    //           login(token);
    //           // console.log(data,"hello");
    //         }
    //         else{
    //           console.log(data.error);
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error,"Error");
    //       });
    //   };

  return (
    <>
    <Navbar/>
    <Heading marginTop="30px">Create Account</Heading>
    <Stack>
        <Center>
        <Input marginTop="50px" w="35%" placeholder='Please Enter Your Email' size='md'
        
        onChange={(e) => handleChange(e)} />
        </Center>
        <Center>
        <InputGroup marginTop="25px" w="35%" size='md'>
        <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Please Enter password'
            
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