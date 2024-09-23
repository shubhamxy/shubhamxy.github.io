import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  useColorMode,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

import t from '@/content/translations.json'
import { Fragment } from "react";
import { FaJava, FaStar } from "react-icons/fa";
import { FaJs, FaReact, FaNode, FaDatabase, FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiSpring, SiHibernate, SiPostgresql, SiMongodb, SiJenkins, SiNestjs, SiRedux } from "react-icons/si";

const skillIcons = {
  java: FaJava,
  javascript: FaJs,
  "spring boot, hibernate": SiSpring,
  "reactjs, react native, nextjs, redux": FaReact,
  "nodejs, expressjs, nestjs": FaNode,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  "linux, ci/cd with docker & jenkins": FaLinux,
  "aws (ec2, ecs, rds, s3, cloudfront, elastic cache etc.)": FaAws,
};

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
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {Object.entries(t.skills).map((item, index) => (
            <Fragment key={index}>
              <Text casing="capitalize" fontWeight="bold">
                {item[0]}:
              </Text>
              {item[1].map((i, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  borderRadius="md"
                >
                  <Icon as={skillIcons[i[0].toLowerCase()]} mr={2} />
                  <Text>{i[0]}</Text>
                </Box>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SkillsSection;
