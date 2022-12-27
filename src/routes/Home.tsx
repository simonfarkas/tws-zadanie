import { Flex, Text, Container } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex>
      <Container maxW="6xl">
        <Text
          fontFamily="Tangerine"
          fontStyle="italic"
          fontSize="4xl"
          fontWeight={600}
          align="left"
          color="white"
        >
          Simon Farkas
        </Text>
        <Text color="white" align="left" pt={10} maxW="2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          consectetur dicta dolorum nesciunt possimus quae rerum sapiente velit
          veniam. Aliquid at deleniti earum exercitationem iste laborum odio
          ratione sit tempora. Accusamus ad alias, aliquam consequuntur deleniti
          fugiat in incidunt ipsa laboriosam libero minima odit officiis
          pariatur placeat possimus qui quisquam reiciendis rem repellendus sit
          tenetur totam vel veniam voluptas voluptates.
        </Text>
      </Container>
    </Flex>
  );
};
