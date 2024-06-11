import { Box, Flex, Link, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    navigate(`/products?search=${event.target.value}`);
  };

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            ElectroMart
          </Link>
        </Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
            color="white"
            variant="filled"
            bg="teal.600"
            _hover={{ bg: "teal.500" }}
            _focus={{ bg: "teal.500" }}
          />
        </InputGroup>
        <Flex alignItems="center" ml={4}>
          <Button as={RouterLink} to="/products" colorScheme="teal" variant="ghost">
            Products
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;