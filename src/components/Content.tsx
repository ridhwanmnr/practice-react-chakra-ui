import React from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Container,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Content: React.FC = () => (
  <Box bg="#282a35" color="white" pb={8} mt={0}>
    <Box mb={8}>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <Box>
          <Image src="https://via.placeholder.com/1920x600" alt="Slide 1" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/1920x600" alt="Slide 2" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/1920x600" alt="Slide 3" />
        </Box>
      </Carousel>
    </Box>
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mb={10}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Box
            key={index}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="https://via.placeholder.com/400x300"
              alt={`Card ${index + 1}`}
            />
            <Box p="6">
              <Text
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Card {index + 1}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Box>
          <Heading as="h2" size="xl">
            Hero Text
          </Heading>
          <Text mt={4}>This is a short description.</Text>
          <Button colorScheme="teal" size="lg" mt={6}>
            Try it now!
          </Button>
        </Box>
        <Box>
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Placeholder Image"
            borderRadius="lg"
          />
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
);

export default Content;
