import {
  Container,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  Box,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Flex w={{ base: "100%", md: "50%" }}>
      <Container maxW="6xl">
        <Text
          fontFamily="Tangerine"
          fontStyle="italic"
          fontSize="4xl"
          fontWeight={600}
          align="left"
          color="white"
        >
          contact
        </Text>
        <Box color="white" py={6}>
          <form>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Fullname</FormLabel>
              <Input
                type="text"
                variant="flushed"
                required
                minLength={5}
                maxLength={128}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                variant="flushed"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                maxLength={256}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4}>
              <FormLabel>Telephone Number</FormLabel>
              <Input type="tel" variant="flushed" minLength={7} />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Subject</FormLabel>
              <Input variant="flushed" required minLength={3} maxLength={128} />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea variant="flushed" required minLength={5} />
            </FormControl>
            <Button colorScheme="red">Submit</Button>
          </form>
        </Box>
      </Container>
    </Flex>
  );
};
