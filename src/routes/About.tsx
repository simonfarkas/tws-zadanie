import { Box, Text, Container } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box>
      <Container maxW="6xl">
        <Text
          fontFamily="Tangerine"
          fontStyle="italic"
          fontSize="4xl"
          fontWeight={600}
          align="center"
          color="white"
          pt={32}
        >
          who ?
        </Text>
        <Text color="white" align="center" pt={10}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          consectetur dicta dolorum nesciunt possimus quae rerum sapiente velit
          veniam. Aliquid at deleniti earum exercitationem iste laborum odio
          ratione sit tempora. Accusamus ad alias, aliquam consequuntur deleniti
          fugiat in incidunt ipsa laboriosam libero minima odit officiis
          pariatur placeat possimus qui quisquam reiciendis rem repellendus sit
          tenetur totam vel veniam voluptas voluptates.
        </Text>
      </Container>
    </Box>
  );
};
