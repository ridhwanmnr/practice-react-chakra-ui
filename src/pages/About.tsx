import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About: React.FC = () => (
  <Box pb={8} mt={0}>
    <Container maxW="full" m={0}>
      <Heading as="h1" size="xl" mb={4}>
        About
      </Heading>
      <Text>
        React is a JavaScript library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies.
      </Text>
    </Container>
  </Box>
);

export default About;
