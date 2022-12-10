import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";

interface Props {
  child?: JSX.Element;
}

export const Wrapper = ({ child }: Props) => {
  return (
    <Flex direction="column" justify="space-between">
      <Header />
      <Box bg="primary.1">{child}</Box>
      <Footer />
    </Flex>
  );
};
