import React from "react";
import { Flex, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      bg="primary.1"
      color="white"
      p={10}
      h={32}
      position="fixed"
      w="100%"
      bottom={0}
      mt="auto"
    >
      <Container maxW="6xl">
        <Text align="center">Simon Farkas &#169; 2022 </Text>
      </Container>
    </Flex>
  );
};
