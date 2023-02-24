import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Customer Service</ListHeader>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Shopping Info</Link>
              <Link href={'#'}>Shopping Info</Link>
              <Link href={'#'}>Returns</Link>
              <Link href={'#'}>Exchanges</Link>
              <Link href={'#'}>Billing & Payment</Link>
              <Link href={'#'}>Size & Fit</Link>
              <Link href={'#'}>International</Link>
              <Link href={'#'}>FAQ</Link>
              <Link href={'#'}>Rewards</Link>
              <Link href={'#'}>Perks</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>My Account</ListHeader>
              <Link href={'#'}>Sign In / Register</Link>
              <Link href={'#'}>Track My Order</Link>
              <Link href={'#'}>Return Order</Link>
              <Link href={'#'}>Order History</Link>
              <Link href={'#'}>Wishlist</Link>
              <Link href={'#'}>Offers & Coupons</Link>
              <Link href={'#'}>Rewards</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Credit Card</ListHeader>
              <Link href={'#'}>Apply Now</Link>
              <Link href={'#'}>Learn More</Link>
              <Link href={'#'}>Pay My Bill</Link>
              <ListHeader>Caltalog</ListHeader>
              <Link href={'#'}>Order From Catalog</Link>
              <Link href={'#'}>Request a Catalog</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Charlotte</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>About Fullbeauty Brands</Link>
              <ListHeader>Shipping To</ListHeader>
              <Link href={'#'}>India</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}>
          </Flex>
        </Box>
      </Box>
    );
  }