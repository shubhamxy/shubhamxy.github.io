import { Box, Flex, Link } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

const UpdateBanner = () => {
  return (
    <Box
      bg="teal.500"
      color="white"
      py={3}
      px={4} // Add horizontal padding
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      borderRadius="20px" // Add rounded edges
      margin="0 60px" // Add margins on the left and right sides
    >
      <Flex align="center" justify="center">
        <Box as={FiAlertCircle} mr={1} />
        Latest July Updates has been posted.{" "}
        <Box as="span" ml={1}>
          <Link
            color="white"
            textDecoration="underline"
            href="https://blog.shubm.me/p/july-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read here
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default UpdateBanner;
