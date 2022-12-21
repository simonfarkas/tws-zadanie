import React from "react";
import { Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export const Gallery = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <a href="/public/1-compressed.png" target="_blank">
          <img
            alt="logo"
            src="/public/1-compressed.png"
            width={360}
            height={240}
            style={{ height: 240 }}
          />
          <Text color="white" align="center" mt={2}>
            <a href="https://wellnesso.sk/" target="_blank">
              wellnesso.sk
            </a>
          </Text>
        </a>
      </GridItem>
      <GridItem>
        <a href="/public/2-compressed.png" target="_blank">
          <img
            alt="logo"
            src="/public/2-compressed.png"
            width={360}
            height={240}
            style={{
              objectFit: "cover",
              height: 240,
              objectPosition: "top",
            }}
          />
          <Text color="white" align="center" mt={2}>
            <a href="https://github.com/simonfarkas/hk2022" target="_blank">
              RemindMe
            </a>
          </Text>
        </a>
      </GridItem>
    </Grid>
  );
};
