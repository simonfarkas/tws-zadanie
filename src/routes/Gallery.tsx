import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid, Flex } from "@chakra-ui/react";

const photos = [
  { src: "/public/1-compressed.png", title: "wellnesso.sk" },
  { src: "/public/2-compressed.png", title: "RemindeMe" },
];

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<string>(photos[0].src);
  const [isOverlay, setIsOverlay] = useState<{
    bool: boolean;
    id: number | null;
  }>({ bool: false, id: null });

  const handleClick = (id: number) => {
    setCurrentImage(photos[id].src);
  };

  return (
    <Flex direction="column">
      <img
        alt="project"
        src={currentImage}
        width={700}
        style={{
          height: 400,
          borderRadius: "5px",
        }}
      />
      <SimpleGrid columns={[1, null, 2]} mt={10}>
        {photos.map((photo, index) => (
          <Box
            key={index}
            position="relative"
            onMouseOver={() => setIsOverlay({ bool: true, id: index })}
            onMouseLeave={() => setIsOverlay({ bool: false, id: index })}
          >
            <img
              alt="project"
              src={photo.src}
              width={350}
              style={{
                height: "100%",
                filter: `${
                  isOverlay.bool && isOverlay.id === index
                    ? "brightness(50%)"
                    : ""
                }`,
              }}
              onClick={() => handleClick(index)}
            />
            <Text
              display={
                isOverlay.bool && isOverlay.id === index ? "block" : "none"
              }
              color="white"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
            >
              {photo.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
