import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import ProjectCard from "./WorkCard";

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
          {t.workTitle}
        </Box>
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
        {/* {t.workSubTitle} */}
      </Text>

      {t.work.map(workItem => <Box key={workItem.company}>
        <Heading as="h4" size="md" mb={2}>
          {workItem.company}
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
          {workItem.workedFrom} - {workItem.workedTo}
        </Text>
        <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
          {workItem.description}
        </Text>
        {
          workItem.projects.map(item => (
            <Flex key={item.name} direction={{ base: "column", md: "row" }} mt={10}>
              <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
                <ProjectCard
                  title={item.name}
                  subtitle={item.subtitle}
                  description={item.description}
                  details={item.details}
                  imageUrl={item.imageUrl as string}
                  demoUrl={item.projectUrl}
                  tag={item.tag as string}
                />
              </Box>
            </Flex>
          ))
        }
      </Box>)}
    </Box>
  );
};

export default Projects;
