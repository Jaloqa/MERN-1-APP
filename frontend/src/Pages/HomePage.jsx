import { Container, VStack, Text, SimpleGrid} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../../store/product';
import ProductCard from '../Components/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);



  return (
  <Container maxW='container.xl' py={12}> 
    <VStack spacing={8}>
    <Text
          bgGradient="linear(to-l, #7e0aa8, #0970ed)"
          bgClip="text"
          fontSize={{base: "22", sm: "28"}}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign= "center"
        >
          Current products 🚀
          </Text>

            <SimpleGrid
              columns={{base: 1, md: 2, lg: 3}}
              spacing={10}
              w='full'
              alignItems='center'
              >
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                  ))}

              </SimpleGrid>



        {products.length === 0 && (
            <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            No products find 😢 {" "}
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline"}}>
                  Create a new product
            </Text>          
          </Link>
          </Text> )}
    
    
    
    </VStack>
  </Container>
  ) 
};
export default HomePage;
