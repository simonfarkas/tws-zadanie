import { Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

//TODO: Thumbnails on images

export const Gallery = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <img
          alt="logo"
          src="/public/1.png"
          width={360}
          height={240}
          style={{ height: 240 }}
        />
        <Text color="white" align="center" mt={2}>
          wellnesso.sk
        </Text>
      </GridItem>
      <GridItem>
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
        <Text color="white" align="center" mt={2}>
          RemindMe
        </Text>
      </GridItem>
    </Grid>
  );
};
