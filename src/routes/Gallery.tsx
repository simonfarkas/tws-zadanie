import { Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export const Gallery = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <a href="https://wellnesso.sk/">
          <img
            alt="logo"
            src="/public/1.png"
            width={360}
            height={240}
            style={{ height: 240 }}
          />
        </a>
        <Text color="white" align="center" mt={2}>
          wellnesso.sk
        </Text>
      </GridItem>
      <GridItem>
        <a href="https://github.com/simonfarkas/hk2022">
          <img
            alt="logo"
            src="/public/2.png"
            width={360}
            height={240}
            style={{
              objectFit: "cover",
              height: 240,
              objectPosition: "top",
            }}
          />
        </a>
        <Text color="white" align="center" mt={2}>
          RemindMe
        </Text>
      </GridItem>
    </Grid>
  );
};
