import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            ElectroMart
          </Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/products" colorScheme="teal" variant="ghost">
            Products
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;