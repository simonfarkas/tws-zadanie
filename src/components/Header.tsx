import React from "react";
import { Flex, Box, Link, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box bg="primary.1" color="white" p={5}>
      <Container maxW="6xl">
        <Flex direction="row" align="center" justify="space-between">
          <Box>
            <Link onClick={() => navigate("/")}>
              <img alt="logo" src="/public/logo.svg" width={200} height={20} />
            </Link>
          </Box>
          <Flex experimental_spaceX={4} alignSelf="center">
            <Link onClick={() => navigate("/")}>home</Link>
            <Link onClick={() => navigate("/gallery")}>gallery</Link>
            <Link onClick={() => navigate("/who")}>who</Link>
            <Link onClick={() => navigate("/contact")}>contact</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
