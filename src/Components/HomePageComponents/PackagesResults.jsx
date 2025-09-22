import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Text, Flex, Button } from "@chakra-ui/react";


//Tried to make this functional, however I don't have access to the firebase on my end and can't use db.json so it's mostly just for cosemtics. 


export default function PackagesResults({ searchParams }) {
  const [results, setResults] = useState([]);
  const { from, to } = searchParams || {};

  useEffect(() => {
    if (!from || !to) return;
    
    Promise.all([
      fetch(`/flight?from=${from}&to=${to}`).then(res => res.json()),
      fetch(`/hotel?place=${to}`).then(res => res.json())
    ]).then(([flights, hotels]) => {
      
      const combos = [];
      flights.slice(0, 3).forEach(flight => {
        hotels.slice(0, 3).forEach(hotel => {
          combos.push({
            flight,
            hotel,
            totalPrice: Number(flight.price || 0) + Number(hotel.price || 0)
          });
        });
      });
      setResults(combos);
    });
  }, [from, to]);

  if (!from || !to) return null;

  return (
    <Box mt={4}>
      <Heading size="md">Package Results</Heading>
      <SimpleGrid columns={1} spacing={4}>
        {results.length === 0 ? (
          <Text>No packages found.</Text>
        ) : (
          results.map((pkg, idx) => (
            <Box key={idx} borderWidth={1} borderRadius="md" p={4} boxShadow="md">
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontWeight="bold" fontSize="lg">{pkg.flight.airline} Flight</Text>
                  <Text>From: {pkg.flight.from} To: {pkg.flight.to}</Text>
                  <Text>Departure: {pkg.flight.departure} Arrival: {pkg.flight.arrival}</Text>
                  <Text>Flight Price: ₹{pkg.flight.price}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">{pkg.hotel.name || "Hotel"}</Text>
                  <Text>Location: {pkg.hotel.place}</Text>
                  <Text>Hotel Price: ₹{pkg.hotel.price}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="blue.500" fontSize="xl">
                    Package Total: ₹{pkg.totalPrice}
                  </Text>
                  <Button colorScheme="teal" mt={2}>Book Package</Button>
                </Box>
              </Flex>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
}