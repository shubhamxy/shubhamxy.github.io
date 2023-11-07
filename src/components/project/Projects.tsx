import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

// Import your t JSON
import t from "@/content/translations.json"; // Replace with the actual path

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Heading as="h1" size="lg" mb={4} mt={8}>
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
          {t.projectsTitle}
        </Box>
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
        {t.projectsSubtitle}
      </Text>
      {t.projects.map(item => (
        <Flex key={item.name} direction={{ base: "column", md: "row" }} mt={10}>
          <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
            <ProjectCard
              title={item.name}
              description={item.description}
              details={item.details}
              imageUrl={item.image}
              demoUrl={item.projectUrl}
              githubUrl={item.sourceCode}
              tag={item.tag}
            />
          </Box>
        </Flex>
      ))}
   
      <Flex justify="flex-end" mb={8}>
        <Link color="gray.500" href={t.github}>
          {t.viewAllProjects}
        </Link>
      </Flex>
    </Box>
  );
};

export default Projects;
