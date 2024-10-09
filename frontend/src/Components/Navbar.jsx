import {Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {CiSquarePlus } from "react-icons/ci";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7e0aa8, #0970ed)"
          bgClip="text"
          fontSize={{base: "22", sm: "28"}}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign= "center"
        >
          <Link to="/">Pruduct Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
          <Button>
            <CiSquarePlus fontSize={20} />  
            
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FiMoon /> : <FiSun />}
          </Button>

        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
