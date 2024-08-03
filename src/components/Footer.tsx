import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  VStack,
  Divider,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => (
  <Box>
    <Divider borderColor="darkred" borderTopWidth={2} />
    <Box bg={useColorModeValue("gray.700", "gray.900")} color="white" py={8}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8}>
          <VStack align="start">
            <Text fontWeight="bold">CUSTOMER SERVICE</Text>
            <Link href="#">Q&A</Link>
            <Link href="#">Return & Refund</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="#">Scam Safety Tips</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">ABOUT MYAPP</Text>
            <Link href="#">About Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">MyApp Blog</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">PAYMENT</Text>
            <Link href="#">Visa</Link>
            <Link href="#">Mastercard</Link>
            <Link href="#">FPX</Link>
            <Link href="#">Paypal</Link>
            <Text fontWeight="bold" mt={4}>
              LOGISTICS
            </Text>
            <Link href="#">Turbo Carrier</Link>
            <Link href="#">DHL</Link>
            <Link href="#">J&T</Link>
            <Link href="#">NinjaVan</Link>
            <Link href="#">PosLaju</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">FOLLOW US</Text>
            <HStack spacing={4}>
              <Link href="#">
                <FaFacebook />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaLinkedin />
              </Link>
            </HStack>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">MYAPP DOWNLOAD</Text>
            <Box bg="white" p={2} borderRadius="md">
              {/* QR Code Placeholder */}
              <Text>QR Code for app download</Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
    <Box bg="black" color="white" py={4}>
      <Container maxW="container.xl">
        <Text textAlign="center">&copy; 2024 My App. All rights reserved.</Text>
      </Container>
    </Box>
  </Box>
);

export default Footer;
