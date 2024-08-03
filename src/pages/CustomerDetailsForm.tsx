import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  useColorModeValue,
  FormErrorMessage,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type FormData = {
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNumber?: string;
  address: string;
};

const CustomerDetailsForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const [position, setPosition] = useState<L.LatLngLiteral>({
    lat: 51.505,
    lng: -0.09,
  });
  const [label, setLabel] = useState<"Work" | "Home">("Home");

  const onSubmit: SubmitHandler<FormData> = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify({ ...values, position, label }, null, 2));
        resolve(null);
      }, 3000);
    });
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true);
    const markerRef = React.useRef<L.Marker<any>>(null);

    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    const eventHandlers = React.useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker>
    );
  }

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
            Customer Details Form
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={1} spacing={6} mb={4}>
              <FormControl id="fullName" isInvalid={!!errors.fullName}>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: {
                      value: 2,
                      message: "Full Name must be at least 2 characters",
                    },
                  })}
                />
                <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone Number must be 10 digits",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="stateArea" isInvalid={!!errors.stateArea}>
                <FormLabel>State/Area</FormLabel>
                <Input
                  type="text"
                  {...register("stateArea", {
                    required: "State/Area is required",
                  })}
                />
                <FormErrorMessage>{errors.stateArea?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="postalCode" isInvalid={!!errors.postalCode}>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  type="text"
                  {...register("postalCode", {
                    required: "Postal Code is required",
                    pattern: {
                      value: /^\d{5}$/,
                      message: "Postal Code must be 5 digits",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.postalCode?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="unitNumber">
                <FormLabel>Unit Number (Optional)</FormLabel>
                <Input type="text" {...register("unitNumber")} />
              </FormControl>
              <FormControl id="address" isInvalid={!!errors.address}>
                <FormLabel>House Number / Building / Street Name</FormLabel>
                <Input
                  type="text"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>
            <Box mb={4}>
              <Heading as="h2" size="md" mb={2}>
                Select Your Location on the Map
              </Heading>
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "300px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <DraggableMarker />
              </MapContainer>
            </Box>
            <Box mb={4}>
              <Text mb={2}>Label as:</Text>
              <ButtonGroup>
                <Button
                  colorScheme={label === "Work" ? "teal" : "gray"}
                  onClick={() => setLabel("Work")}
                >
                  Work
                </Button>
                <Button
                  colorScheme={label === "Home" ? "teal" : "gray"}
                  onClick={() => setLabel("Home")}
                >
                  Home
                </Button>
              </ButtonGroup>
            </Box>
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerDetailsForm;
