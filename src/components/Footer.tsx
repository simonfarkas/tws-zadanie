import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg="primary.1"
      color="white"
      p={10}
      h={32}
      mt="auto"
      position="fixed"
      inset={0}
    >
      <Container maxW="6xl">
        <Text align="center">Simon Farkas &#169; 2022</Text>
      </Container>
    </Box>
  );
};
