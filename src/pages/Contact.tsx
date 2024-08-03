import React from "react";
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange", // Validate on change
  });

  const onSubmit: SubmitHandler<FormData> = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(null);
      }, 3000);
    });
  };

  const validDomains = ["example.com", "gmail.com", "yahoo.com", "outlook.com"];

  const validateEmail = (value: string) => {
    const pattern = new RegExp(
      `^[a-zA-Z0-9._%+-]+@(${validDomains.join("|").replace(".", "\\.")})$`
    );
    return (
      pattern.test(value) ||
      `! Email must be from one of the following domains: ${validDomains.join(
        ", "
      )}`
    );
  };

  const validateName = (value: string) => {
    const pattern = /^[A-Za-z\s]+$/;
    return (
      pattern.test(value) || "! Name should contain only letters and spaces"
    );
  };

  const offensiveWords = [
    "fuck",
    "shit",
    "slut",
    "cunt",
    "bitch",
    "bum",
    "nigga",
  ];

  const validateMessage = (value: string) => {
    const foundWords = offensiveWords.filter((word) =>
      value.toLowerCase().includes(word)
    );
    if (foundWords.length > 0) {
      return `! Message contains prohibited words: ${foundWords.join(", ")}`;
    }
    return true;
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} py={8}>
      <Container maxW="container.md">
        <Box
          bg={useColorModeValue("white", "gray.700")}
          p={6}
          borderRadius="lg"
          shadow="md"
        >
          <Heading as="h1" size="xl" mb={6}>
            Reach Us!
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={4}>
              <FormControl id="name" isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  {...register("name", {
                    required: "Name is required !",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters !",
                    },
                    validate: validateName, // Custom validation function
                  })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: "Email is required !",
                    validate: validateEmail, // Custom validation function
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>
            <FormControl id="message" isInvalid={!!errors.message} mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                {...register("message", {
                  required: "Message is required !",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters !",
                  },
                  maxLength: {
                    value: 500,
                    message: "Message must be less than 500 characters !",
                  },
                  validate: validateMessage, // Custom validation function
                })}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
