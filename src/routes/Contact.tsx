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
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";

interface Inputs {
  fullname: string;
  email: string;
  tel?: string;
  subject: string;
  description: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<Inputs>({
    fullname: "",
    email: "",
    tel: "",
    subject: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.description.length >= 5) {
      console.log(formData);
      toast.success("Submitted!");
    } else {
      toast.error("Description must be longer!");
    }
  };
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
          <form onSubmit={handleSubmit}>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Fullname</FormLabel>
              <Input
                p={2}
                type="text"
                variant="flushed"
                name="fullname"
                required
                minLength={5}
                maxLength={128}
                value={formData.fullname}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                p={2}
                type="email"
                variant="flushed"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                maxLength={256}
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4}>
              <FormLabel>Telephone Number</FormLabel>
              <Input
                p={2}
                type="text"
                name="tel"
                variant="flushed"
                minLength={7}
                value={formData.tel}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Subject</FormLabel>
              <Input
                p={2}
                required
                name="subject"
                variant="flushed"
                minLength={3}
                maxLength={128}
                value={formData.subject}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl experimental_spaceY={2} mb={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                p={2}
                name="description"
                variant="flushed"
                required
                minLength={5}
                value={formData.description}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme="red" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Flex>
  );
};
