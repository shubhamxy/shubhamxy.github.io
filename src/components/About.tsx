import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import t from '@/content/translations.json'
import { Fragment } from "react";
import { FaJava, FaStar } from "react-icons/fa";

const SkillsSection = () => {
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
            {t.skillsTitle}
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={-3} mb={7}>
          {t.skillsSubtitle}
        </Text>
        {Object.entries(t.skills).map((item, index) => (
          <Fragment key={index}>
            <Text key={index} casing="capitalize" fontWeight="bold">
              {item[0]}:
            </Text>
            <Fragment>

            {item[1].map((i, index) => (
              <Text
                key={index}
                borderRadius="md"
              >
                {i[0]} 
              </Text>
            ))}
            </Fragment>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
