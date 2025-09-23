import React from "react";
import { Box, Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";
import { FaPlane, FaHotel } from "react-icons/fa";

// Hardcoded package data
const packageData = [
  // DELHI to MUMBAI
  { id: 1, from: "DELHI", to: "MUMBAI", city: "MUMBAI", price: 5999, desc: "3 nights in Mumbai + flight" },
  { id: 2, from: "DELHI", to: "MUMBAI", city: "MUMBAI", price: 6499, desc: "Luxury hotel in Mumbai + flight" },
  { id: 3, from: "DELHI", to: "MUMBAI", city: "MUMBAI", price: 4999, desc: "Budget stay in Mumbai + flight" },
  { id: 4, from: "DELHI", to: "MUMBAI", city: "MUMBAI", price: 6999, desc: "Family package in Mumbai + flight" },

  // DELHI to BANGLURU
  { id: 5, from: "DELHI", to: "BANGLURU", city: "BANGLURU", price: 7999, desc: "4 nights in Bangluru + flight" },
  { id: 6, from: "DELHI", to: "BANGLURU", city: "BANGLURU", price: 8499, desc: "Luxury hotel in Bangluru + flight" },
  { id: 7, from: "DELHI", to: "BANGLURU", city: "BANGLURU", price: 6999, desc: "Budget stay in Bangluru + flight" },

  // DELHI to PUNE
  { id: 8, from: "DELHI", to: "PUNE", city: "PUNE", price: 9999, desc: "3 nights in Pune + flight" },
  { id: 9, from: "DELHI", to: "PUNE", city: "PUNE", price: 8999, desc: "Luxury hotel in Pune + flight" },
  { id: 10, from: "DELHI", to: "PUNE", city: "PUNE", price: 7999, desc: "Budget stay in Pune + flight" },

  // DELHI to DELHI 
  { id: 11, from: "DELHI", to: "DELHI", city: "DELHI", price: 4999, desc: "Staycation in Delhi + local tours" },

  // MUMBAI to DELHI
  { id: 12, from: "MUMBAI", to: "DELHI", city: "DELHI", price: 5999, desc: "3 nights in Delhi + flight" },
  { id: 13, from: "MUMBAI", to: "DELHI", city: "DELHI", price: 6499, desc: "Luxury hotel in Delhi + flight" },
  { id: 14, from: "MUMBAI", to: "DELHI", city: "DELHI", price: 4999, desc: "Budget stay in Delhi + flight" },

  // MUMBAI to BANGLURU
  { id: 15, from: "MUMBAI", to: "BANGLURU", city: "BANGLURU", price: 7999, desc: "4 nights in Bangluru + flight" },
  { id: 16, from: "MUMBAI", to: "BANGLURU", city: "BANGLURU", price: 8499, desc: "Luxury hotel in Bangluru + flight" },
  { id: 17, from: "MUMBAI", to: "BANGLURU", city: "BANGLURU", price: 6999, desc: "Budget stay in Bangluru + flight" },

  // MUMBAI to PUNE
  { id: 18, from: "MUMBAI", to: "PUNE", city: "PUNE", price: 8999, desc: "2 nights in Pune + flight" },
  { id: 19, from: "MUMBAI", to: "PUNE", city: "PUNE", price: 9499, desc: "Luxury hotel in Pune + flight" },
  { id: 20, from: "MUMBAI", to: "PUNE", city: "PUNE", price: 7999, desc: "Budget stay in Pune + flight" },

  // MUMBAI to MUMBAI
  { id: 21, from: "MUMBAI", to: "MUMBAI", city: "MUMBAI", price: 4999, desc: "Staycation in Mumbai + local tours" },

  // BANGLURU to DELHI
  { id: 22, from: "BANGLURU", to: "DELHI", city: "DELHI", price: 6999, desc: "5 nights in Delhi + flight" },
  { id: 23, from: "BANGLURU", to: "DELHI", city: "DELHI", price: 7499, desc: "Luxury hotel in Delhi + flight" },
  { id: 24, from: "BANGLURU", to: "DELHI", city: "DELHI", price: 5999, desc: "Budget stay in Delhi + flight" },

  // BANGLURU to MUMBAI
  { id: 25, from: "BANGLURU", to: "MUMBAI", city: "MUMBAI", price: 5999, desc: "3 nights in Mumbai + flight" },
  { id: 26, from: "BANGLURU", to: "MUMBAI", city: "MUMBAI", price: 6499, desc: "Luxury hotel in Mumbai + flight" },
  { id: 27, from: "BANGLURU", to: "MUMBAI", city: "MUMBAI", price: 4999, desc: "Budget stay in Mumbai + flight" },

  // BANGLURU to PUNE
  { id: 28, from: "BANGLURU", to: "PUNE", city: "PUNE", price: 9999, desc: "3 nights in Pune + flight" },
  { id: 29, from: "BANGLURU", to: "PUNE", city: "PUNE", price: 8999, desc: "Luxury hotel in Pune + flight" },
  { id: 30, from: "BANGLURU", to: "PUNE", city: "PUNE", price: 7999, desc: "Budget stay in Pune + flight" },

  // BANGLURU to BANGLURU
  { id: 31, from: "BANGLURU", to: "BANGLURU", city: "BANGLURU", price: 4999, desc: "Staycation in Bangluru + local tours" },

  // PUNE to DELHI
  { id: 32, from: "PUNE", to: "DELHI", city: "DELHI", price: 5999, desc: "3 nights in Delhi + flight" },
  { id: 33, from: "PUNE", to: "DELHI", city: "DELHI", price: 6499, desc: "Luxury hotel in Delhi + flight" },
  { id: 34, from: "PUNE", to: "DELHI", city: "DELHI", price: 4999, desc: "Budget stay in Delhi + flight" },

  // PUNE to MUMBAI
  { id: 35, from: "PUNE", to: "MUMBAI", city: "MUMBAI", price: 4999, desc: "3 nights in Mumbai + flight" },
  { id: 36, from: "PUNE", to: "MUMBAI", city: "MUMBAI", price: 5499, desc: "Luxury hotel in Mumbai + flight" },
  { id: 37, from: "PUNE", to: "MUMBAI", city: "MUMBAI", price: 3999, desc: "Budget stay in Mumbai + flight" },

  // PUNE to BANGLURU
  { id: 38, from: "PUNE", to: "BANGLURU", city: "BANGLURU", price: 7999, desc: "4 nights in Bangluru + flight" },
  { id: 39, from: "PUNE", to: "BANGLURU", city: "BANGLURU", price: 8499, desc: "Luxury hotel in Bangluru + flight" },
  { id: 40, from: "PUNE", to: "BANGLURU", city: "BANGLURU", price: 6999, desc: "Budget stay in Bangluru + flight" },

  // PUNE to PUNE
  { id: 41, from: "PUNE", to: "PUNE", city: "PUNE", price: 3999, desc: "Staycation in Pune + local tours" },
];

export default function PackagesResults({ searchParams }) {
  // Destructure search parameters
  const { from, to } = searchParams || {};

  // Filter packages based on search parameters
  const filteredPackages = packageData.filter(pkg => {
    const matchesFrom = from ? pkg.from === from.toUpperCase() : true;
    const matchesTo = to ? pkg.to === to.toUpperCase() : true;
    return matchesFrom && matchesTo;
  });

  return (
    <VStack align="stretch" spacing={3} mt={6} alignItems="center">
      {filteredPackages.length === 0 ? (
        <Text fontSize="xl" fontWeight="bold" color="gray.500" textAlign="center" mt={10}>
          No packages found for your criteria.
        </Text>
      ) : (
        filteredPackages.map((pkg) => (
          <Box
            key={pkg.id}
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
              <FaPlane size="30px" />
              <Text fontSize="14px" fontWeight="bold">Flight</Text>
              <Text fontSize="xs">({pkg.from} to {pkg.to})</Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <FaHotel size="30px" />
              <Text fontSize="14px" fontWeight="bold">Hotel</Text>
              <Text fontSize="xs">({pkg.city})</Text>
            </Box>
            <Flex display="flex" flexDirection="column">
              <Text fontWeight="bold" fontSize="md">Package Details</Text>
              <Text fontSize="sm">{pkg.desc}</Text>
              <Text fontSize="sm">Flight + Hotel: ₹{pkg.price}</Text>
            </Flex>
            <Box>
              <Text fontWeight="bold" color="blue.500" fontSize="xl">
                ₹{pkg.price}
              </Text>
              <Button colorScheme="teal" mt={2} size="sm">Book Package</Button>
            </Box>
          </Box>
        ))
      )}
    </VStack>
  );
}