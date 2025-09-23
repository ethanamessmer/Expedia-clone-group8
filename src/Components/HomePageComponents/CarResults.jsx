import React from "react";
import { Box, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { FaCarSide } from "react-icons/fa";

// Hardcoded car data
const carData = [
  // DELHI
  { id: 1, city: "DELHI", name: "Toyota Corolla", pricePerDay: 60 },
  { id: 2, city: "DELHI", name: "Honda Civic", pricePerDay: 70 },
  { id: 3, city: "DELHI", name: "Suzuki Alto", pricePerDay: 50 },
  { id: 4, city: "DELHI", name: "Hyundai Creta", pricePerDay: 80 },

  // MUMBAI
  { id: 5, city: "MUMBAI", name: "Suzuki Swift", pricePerDay: 50 },
  { id: 6, city: "MUMBAI", name: "Hyundai i20", pricePerDay: 55 },
  { id: 7, city: "MUMBAI", name: "Honda City", pricePerDay: 65 },
  { id: 8, city: "MUMBAI", name: "Toyota Innova", pricePerDay: 90 },

  // BANGLURU
  { id: 9, city: "BANGLURU", name: "Ford EcoSport", pricePerDay: 65 },
  { id: 10, city: "BANGLURU", name: "Maruti WagonR", pricePerDay: 45 },
  { id: 11, city: "BANGLURU", name: "Hyundai Venue", pricePerDay: 70 },
  { id: 12, city: "BANGLURU", name: "Honda Jazz", pricePerDay: 60 },

  // PUNE
  { id: 13, city: "PUNE", name: "Maruti Alto", pricePerDay: 40 },
  { id: 14, city: "PUNE", name: "Hyundai Santro", pricePerDay: 50 },
  { id: 15, city: "PUNE", name: "Ford Figo", pricePerDay: 55 },
  { id: 16, city: "PUNE", name: "Honda Amaze", pricePerDay: 65 },
];

export default function CarResults({ searchParams }) {
  const { location, price } = searchParams || {};
  const maxPrice = Number(price) || Infinity;

  // Filter cars by city and max price per day
  const filtered = carData.filter(
    (car) =>
      (location ? car.city === location : true) &&
      (price ? car.pricePerDay <= maxPrice : true)
  );

  return (
    <Box mt={6}>
      <VStack align="stretch" spacing={3} mt={6} alignItems="center">
        {filtered.length === 0 ? (
          <Text fontSize="xl" fontWeight="bold" color="gray.500" textAlign="center" mt={10}>
            No cars found for your criteria.
          </Text>
        ) : (
          filtered.map((car) => (
            <Box
              key={car.id}
              display="flex"
              gap="20px"
              height="100px"
              width="80%"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              padding="10px"
              justifyContent="space-around"
              alignItems="center"
              borderRadius="10px"
              marginBottom="20px"
              textAlign="center"
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <FaCarSide size="30px" />
                <Text fontSize="14px" fontWeight="bold">Car Rental</Text>
              </Box>
              <Flex display="flex" flexDirection="column">
                <Text fontWeight="bold" fontSize="lg">{car.name}</Text>
                <Text fontSize="sm">Location: {car.city}</Text>
                <Text fontSize="sm">Price per day: ₹{car.pricePerDay}</Text>
              </Flex>
              <Box>
                <Text fontWeight="bold" color="blue.500" fontSize="xl">
                  ₹{car.pricePerDay}
                </Text>
                <Button colorScheme="teal" mt={2} size="sm">Book Car</Button>
              </Box>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
}