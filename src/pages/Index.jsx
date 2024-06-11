import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to ElectroMart
      </Heading>
      <Text fontSize="lg" mb={6}>
        Your one-stop shop for the latest electronics.
      </Text>
      <VStack spacing={4}>
        <Button as={Link} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;