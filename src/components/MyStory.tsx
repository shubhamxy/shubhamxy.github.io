import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import t from '@/content/translations.json'

const MyStorySection = () => {
  const { colorMode } = useColorMode();

  const myStorySectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "teal" : "white",
    _hover: {
      color: colorMode === "light" ? "purple" : "white",
      position: "relative",
      top: "-2px",
    },
  };

  return (
    <Box py={8} {...myStorySectionStyles}>
      <Box>
        <Heading as="h1" size="lg" mb={4}>
          <Box
            as="span"
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, #6B46C1, #205AD5)"
                : "linear(to-r, #A78BFA, #9F7AEA)"
            }
            bgClip="text"
            display="inline"
          >
            {t.myStoryTitle}
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={-3} mb={7}>
          {t.myStorySubtitle}
        </Text>
        {t.myStoryContent.map((paragraph, index) => (
          <Text key={index} fontSize="md" mb={4}>
            {paragraph}
          </Text>
        ))}
        <Text fontSize="md">
          {t.myStoryConclusion}
        </Text>
      </Box>
    </Box>
  );
};

export default MyStorySection;
