import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl?: string; // Optional Github URL prop
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  details,
  imageUrl,
  demoUrl,
  githubUrl,
  tag,
}) => {
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);

  const tagColors: { [key: string]: string } = {
    "Personal Project": "linear-gradient(to right, #9EFF9C, #9AFEDC)",
    Stealth: "linear-gradient(to right, #D3A4FF, #F2A5FD)",
    Featured: "linear-gradient(to right, #FED79C, #FDEBA8)",
  };

  const tagTextColor: { [key: string]: string } = {
    "Personal Project": "#056602",
    Stealth: "#390B66",
    Featured: "#653E02",
  };

  const backgroundGradient = tagColors[tag] || "transparent";
  const textColor = tagTextColor[tag] || "black";

  const descriptionTextColor = colorMode === "light" ? "black" : "gray.400"; // Adjust the description text color
  const githubButtonColor = colorMode === "light" ? "#334254" : "white"; // Adjust the Github button color
  const githubButtonHoverColor = colorMode === "light" ? "black" : "black"; // Adjust the Github button hover color

  return (
    <Card
      className="project-card"
      width="100%"
      borderRadius="lg"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box position="relative">
        {/* Tag on top corner */}
        <Text
          position="absolute"
          top="2"
          right="2"
          fontSize="xs"
          color={textColor}
          bg={backgroundGradient}
          borderRadius="md"
          px={2}
          py={1}
          fontWeight="bold"
          zIndex="1"
        >
          {tag}
        </Text>

        {/* Demo Image */}
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <div
            style={{
              width: "100%",
              paddingTop: "75%", // Set to achieve a 4:3 aspect ratio
              position: "relative",
            }}
          >
            <Image
              src={imageUrl}
              alt={`${title} Screenshot`}
              layout="fill" // Fill the container size
              objectFit="contain" // Maintain aspect ratio and cover the container
            />
          </div>
        </a>
      </Box>
      <CardBody>
        <Heading as="h4" size="md" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
          {subtitle}
        </Text>
        <Text fontSize="sm" color={descriptionTextColor} mb={3}>
          {description}
        </Text>
        {details?.map(item => (
          <Text key={item} fontSize="sm" color={descriptionTextColor} mb={3}>
            {item}
          </Text>
        ))}
        <Flex justify="flex-start" align="center">
          {/* View Demo Button with External Link Icon */}
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              size="xs"
              colorScheme="purple"
              bg="purple.300"
              _hover={{ bg: "purple.500", color: "white" }}
              leftIcon={<FaExternalLinkAlt />} // External link icon
              mr={2}
            >
              View 
            </Button>
          </a>

          {/* Github Button with Github Icon */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                size="xs"
                colorScheme="white"
                bg={githubButtonColor}
                _hover={{ bg: githubButtonHoverColor, color: "white" }}
                leftIcon={<FaGithub />} // Github icon
              >
                Github
              </Button>
            </a>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
