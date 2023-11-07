import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CalloutButton from "./CalloutButton";
import t from '@/content/translations.json'

const ProfileSection = () => {
  const { colorMode } = useColorMode();

  const [isHovered, setIsHovered] = useState(false);

  const profileSectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "#6B46C1" : "white",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "center" }}
      justify="center"
      maxHeight={{ base: "auto", md: "75vh", lg: "90vh" }}
      p={{ base: 4, md: 0 }}
      mb={{ base: 8, md: 0, lg: "20px" }}
      mt={{
        base: 8,
        md: 0,
        lg: "20px",
      }}
      {...profileSectionStyles}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex={{ base: "none", md: 2 }}
        mb={{ base: 4, md: 0 }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            boxShadow: "lg",
            overflow: "hidden",
            position: "relative",
            transform: isHovered ? "translateY(-5px)" : "none",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="profile-image"
        >
          <Box
            width="200px"
            height="200px"
            borderRadius="50%"
            boxShadow="lg"
            overflow="hidden"
            position="relative"
            className="profile-image"
          >
            <Image
              src="/assets/main.jpeg"
              alt={t.coverImageAlt}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </div>
        </Flex>

      <Box
        flex={{ base: 1, md: 8 }}
        ml={{ base: 0, md: "lg" }}
        mt={{
          base: "lg",
          md: "16px",
          lg: "16px",
        }}
        mb={{
          base: "16px",
          md: "24px",
          lg: "48px",
        }}
      >
        <Heading as="h1" size="xl" mb={4}>
          <span className="wave" role="img" aria-label="Waving Hand">
            👋
          </span>{" "}
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
            {t.title}
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt="5px" mb="2px">
          {t.description}
        </Text>
        <Text fontSize="xl">
          {t.introduction}
        </Text>

        <Text
          mt={4}
          fontSize="md"
          color={colorMode === "light" ? "#6B46C1" : "#A78BFA"}
        >
          <Box as="span" fontWeight="bold">
            TL;DR:
          </Box>{" "}
          {t.summary}
        </Text>

        <Text fontSize="xs" color="gray.500" mt={4}>
          {t.press.map((press: any, index) => (
              press.link && press.name ? <Link
                key={index}
                href={press.link || ""}
                isExternal
                textDecoration="underline"
              >
                {press.name || ""}
              </Link> : <Fragment key={index}/>
          ))}
        </Text>

        <CalloutButton
          link={t.calloutTextLink}
          text={t.calloutText}
        />
      </Box>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
        }

        .wave {
          display: inline-block;
          animation-name: wave-animation;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
        }

        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Flex>
  );
};

export default ProfileSection;
