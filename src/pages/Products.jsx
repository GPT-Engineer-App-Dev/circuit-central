import { Box, SimpleGrid, Image, Text, Button, VStack, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", image: "/images/headphones.jpg" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const query = useQuery();

  useEffect(() => {
    const searchQuery = query.get("search")?.toLowerCase() || "";
    const filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery) &&
      (categories.length === 0 || categories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [query, categories, priceRange]);

  const handleCategoryChange = (selectedCategories) => {
    setCategories(selectedCategories);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };
  return (
    <Box p={5}>
      <Box mb={5}>
        <Text fontSize="xl" mb={2}>Filter by Category</Text>
        <CheckboxGroup onChange={handleCategoryChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="Electronics">Electronics</Checkbox>
            <Checkbox value="Accessories">Accessories</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={5}>
        <Text fontSize="xl" mb={2}>Filter by Price</Text>
        <RangeSlider defaultValue={[0, 1000]} min={0} max={1000} step={50} onChangeEnd={handlePriceChange}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text mt={2}>${priceRange[0]} - ${priceRange[1]}</Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <VStack spacing={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text>${product.price}</Text>
                <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">
                  View Details
                </Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;