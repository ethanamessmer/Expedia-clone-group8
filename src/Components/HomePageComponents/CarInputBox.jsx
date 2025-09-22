import React, { useState } from 'react';
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  Heading,
  Flex,
  FormLabel,
} from '@chakra-ui/react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import carLocations from '../../Pages/Stay/city'; 

const CarInputBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [days, setDays] = useState(1);
  const [price, setPrice] = useState('');

  const handleOnSelect = (item) => {
    setLocation(item.name);
  };

  const formatResult = (item) => (
    <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, days, price });
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
            <ReactSearchAutocomplete
              items={carLocations}
              onSelect={handleOnSelect}
              formatResult={formatResult}
              showIcon={false}
              placeholder="Enter city or airport"
              styling={{
                height: "44px",
                border: "1px solid #dfe1e5",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                hoverBackgroundColor: "#eee",
                color: "#212121",
                fontSize: "16px",
                fontFamily: "Arial",
                searchIconMargin: "0 0 0 16px",
              }}
            />
          </Box>
          <Box flex="1" minW="120px">
            <FormLabel>Days</FormLabel>
            <NumberInput min={1} value={days} onChange={(val) => setDays(Number(val))}>
              <NumberInputField bg="gray.50" />
            </NumberInput>
          </Box>
          <Box flex="1" minW="120px">
            <FormLabel>Max Price ($)</FormLabel>
            <NumberInput min={0} value={price} onChange={(val) => setPrice(val)}>
              <NumberInputField bg="gray.50" />
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
};

export default CarInputBox;
