import React, { useState } from 'react';
import { Box, Button, Heading, Flex, FormLabel, NumberInput, NumberInputField, Select } from '@chakra-ui/react';

const initialState = {
  location: "",
  price: "",
};

export default function CarInputBox({ onSearch }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(form);
    }
  };

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="md"
      boxShadow="md"
      maxW="600px"
      m="auto"
      mt={6}
    >
      <Heading size="md" mb={4} color="blue.600">
        Search Rental Cars
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex gap={4} flexWrap="wrap">
          <Box flex="1" minW="180px">
            <FormLabel>Location</FormLabel>
            <Select name="location" value={form.location} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="DELHI">DELHI</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="BANGLURU">BANGLURU</option>
              <option value="PUNE">PUNE</option>
            </Select>
          </Box>
          <Box flex="1" minW="120px">
            <FormLabel>Max Cost Per Day</FormLabel>
            <NumberInput min={0} value={form.price} onChange={val => setForm({ ...form, price: val })}>
              <NumberInputField name="price" bg="gray.50" />
            </NumberInput>
          </Box>
          <Box alignSelf="flex-end">
            <Button type="submit" colorScheme="blue" mt={6}>
              Search Cars
            </Button>
          </Box>
        </Flex>
      </form>
    </Box>
  );
}
