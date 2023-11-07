import { Box, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

const NotFoundPage = () => {
  const { colorMode } = useColorMode(); // Get the color mode (light or dark)

  return (
    <Box
      textAlign="center"
      p={8}
      height="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box fontSize="4rem" mb={2}>
        🤔 {/* Thinking Emoji */}
      </Box>
      <Heading as="h1" size="xl" mb={4}>
        <Box
          as="span"
          bgGradient={
            colorMode === "light"
              ? "linear(to-r, #6B46C1, #205AD5)"
              : "linear(to-r, #A78BFA, #9F7AEA)" // Adjust the color values as needed
          }
          bgClip="text"
          display="inline"
        >
          404 - Page Not Found
        </Box>
      </Heading>
      <Text color={colorMode === "dark" ? "white" : "inherit"}>
        Hmmm wierd, can&rsquo;t find that page. Head back to the{" "}
        <NextLink href="/" passHref>
          <Link color="purple.500" fontWeight="bold">
            homepage ☄️
          </Link>
        </NextLink>
      </Text>
    </Box>
  );
};

export default NotFoundPage;
