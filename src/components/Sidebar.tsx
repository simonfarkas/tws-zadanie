import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const skills = [
  { name: "HTML", rating: 90 },
  { name: "CSS", rating: 80 },
  { name: "Javascript", rating: 70 },
  { name: "React", rating: 85 },
  { name: "Typescript", rating: 75 },
  { name: "NodeJS", rating: 70 },
  { name: "SQL", rating: 40 },
  { name: "PHP", rating: 50 },
];

export const Sidebar = () => {
  return (
    <Box
      shadow="md"
      color="white"
      h="100%"
      w="35%"
      p={10}
      display={{ base: "none", md: "block" }}
    >
      <Text fontSize={28}>Skills</Text>
      {skills.map((skill, index) => (
        <Flex direction="column" key={index} w="100%" py={2}>
          <span>{skill.name}</span>
          <Box bg="gray.700">
            <Flex bg="red.500" w={`${skill.rating}%`} px={2}>
              {skill.rating}%
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
