import React from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const skills = [
  { name: "HTML", rating: 90 },
  { name: "CSS", rating: 80 },
  { name: "Javascript", rating: 70 },
  { name: "Typescript", rating: 60 },
  { name: "React", rating: 85 },
  { name: "NodeJS", rating: 70 },
  { name: "SQL", rating: 50 },
  { name: "PHP", rating: 50 },
];

export const Sidebar = () => {
  return (
    <Box
      shadow="md"
      color="white"
      h="100%"
      w={{ base: "100%", md: "35%" }}
      p={10}
    >
      <Text fontSize={28}>Skills</Text>
      {/*{skills.map((skill, index) => (*/}
      {/*  <Flex direction="column" key={index} w="100%" py={2}>*/}
      {/*    <Text mb={2}>{skill.name}</Text>*/}
      {/*    <Box bg="gray.700">*/}
      {/*      <Flex bg="red.500" w={`${skill.rating}%`} px={2}>*/}
      {/*        {skill.rating}%*/}
      {/*      </Flex>*/}
      {/*    </Box>*/}
      {/*  </Flex>*/}
      {/*))}*/}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Technology</Th>
              <Th>Knowledge</Th>
            </Tr>
          </Thead>
          <Tbody>
            {skills.map((skill, index) => (
              <Tr key={index}>
                <Td>{skill.name}</Td>
                <Td>{skill.rating} %</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
