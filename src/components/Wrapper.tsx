import { Container, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  child?: JSX.Element;
}

export const Wrapper = ({ child }: Props) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      bg="primary.1"
      position="relative"
      pb={32}
    >
      <Header />
      <Container maxW="6xl" minH="calc(100vh-100px)">
        <Flex
          flex={1}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          pt={10}
        >
          {child}
          <Sidebar />
        </Flex>
      </Container>
      <Footer />
    </Flex>
  );
};
