import theme from "@/styles/theme";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { FiMail, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import UpdateBanner from "./UpdateBanner";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import t from "@/content/translations.json";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    if (colorMode === "light") {
      document.body.style.backgroundImage =
        "url('/assets/background-dark.png')";
    } else {
      document.body.style.backgroundImage =
        "url('/assets/background-light.png')";
    }
    toggleColorMode();
  };

  const headerBg =
    colorMode === "light"
      ? "rgba(255, 255, 255, 0.4)" // Semi-transparent white
      : "rgba(9, 14, 17, 0.4)"; // Semi-transparent dark

  const headerStyles = {
    bg: headerBg,
    color: colorMode === "light" ? "black" : "white",
    backdropFilter: "blur(16px)",
  };

  return (
    <Box
      mt={10}
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      position="sticky"
      top={4}
      blur='16px'
      filter='auto'
      zIndex="sticky"
      borderRadius="34px"
      {...headerStyles}
    >
      <Flex
        as="header"
        align="center"
        p={4}
        height={"48px"}
        boxShadow="md"
        borderRadius="34px"
      >
        <Flex direction="row" pl={4} alignItems="center">
          {/* Your logo or brand */}
          <Link
            as="a"
            href="/"
            fontSize={{ base: "sm", md: "md" }} // Define font sizes for different screen sizes
            fontWeight="bold"
            _hover={{
              textDecoration: "none",
            }}
          >
            {t.name} 
          </Link>
        </Flex>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          {/* Your navigation links */}
          <Flex alignItems="center">
            <Link
              href={`https://www.twitter.com/${t.twitterHandle}`}
              mr={2}
              fontWeight="bold"
              _hover={{ color: "blue.500", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FiTwitter style={{ marginRight: "6px" }} /> Twitter
            </Link>
            <Link
              mr={2}
              href={`https://linkedin.com/in/${t.linkedinHandle}`}
              fontWeight="bold"
              _hover={{ color: "blue.500", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FaLinkedin style={{ marginRight: "6px" }} /> LinkedIn
            </Link>
            <Link
              href={`${t.github}`}
              fontWeight="bold"
              _hover={{ color: "blue.500", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FaGithub style={{ marginRight: "6px" }} /> Github
            </Link>
          </Flex>
        </Box>
        <Box ml={4}>
          {/* Toggle dark mode */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <FiMoon color="#6B46C1" fill="#6B46C1" />
              ) : (
                <FiSun color="#6B46C1" fill="#6B46C1" />
              )
            }
            onClick={handleToggleColorMode}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
