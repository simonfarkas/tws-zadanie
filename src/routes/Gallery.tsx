import React, { useState } from "react";
import { Box, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";

const photos = [
  { src: "/public/1-compressed.png", title: "wellnesso.sk" },
  { src: "/public/2-compressed.png", title: "RemindeMe" },
  { src: "/public/3-compressed.png", title: "Posthut" },
  { src: "/public/4-compressed.png", title: "Todo app" },
  { src: "/public/5-compressed.png", title: "Budget tracker" },
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
      <Image
        alt="project"
        src={currentImage}
        width={700}
        height={400}
        rounded="md"
        objectFit="contain"
      />
      <SimpleGrid columns={[1, null, 2]} mt={10} spacing={2} mx="auto">
        {photos.map((photo, index) => (
          <Box
            key={index}
            position="relative"
            onMouseOver={() => setIsOverlay({ bool: true, id: index })}
            onMouseLeave={() => setIsOverlay({ bool: false, id: index })}
            cursor="pointer"
          >
            <Image
              alt={photo.title}
              src={photo.src}
              width={350}
              height="full"
              style={{
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
