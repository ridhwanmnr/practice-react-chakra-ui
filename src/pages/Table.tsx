import React from "react";
import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
} from "@chakra-ui/react";

const data = [
  {
    name: "React",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "reactjs.org",
  },
  {
    name: "Angular",
    loadTime: "Moderate",
    resourceUsage: "High",
    responsiveness: "High",
    userExperience: "Good",
    trend: "Stable",
    website: "angular.io",
  },
  {
    name: "Vue",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "vuejs.org",
  },
  {
    name: "Svelte",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "svelte.dev",
  },
  {
    name: "Preact",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Good",
    trend: "Rising",
    website: "preactjs.com",
  },
  {
    name: "Ember",
    loadTime: "Moderate",
    resourceUsage: "High",
    responsiveness: "Moderate",
    userExperience: "Good",
    trend: "Stable",
    website: "emberjs.com",
  },
  {
    name: "SolidJS",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "solidjs.com",
  },
  {
    name: "Qwik",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "qwik.dev",
  },
  {
    name: "Meteor",
    loadTime: "Moderate",
    resourceUsage: "High",
    responsiveness: "Moderate",
    userExperience: "Good",
    trend: "Stable",
    website: "meteor.com",
  },
  {
    name: "Backbone.js",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "Moderate",
    userExperience: "Good",
    trend: "Falling",
    website: "backbonejs.org",
  },
  {
    name: "Alpine.js",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Good",
    trend: "Rising",
    website: "alpinejs.dev",
  },
  {
    name: "Lit",
    loadTime: "Fast",
    resourceUsage: "Low",
    responsiveness: "High",
    userExperience: "Excellent",
    trend: "Rising",
    website: "lit.dev",
  },
];

const TablePage: React.FC = () => (
  <Container maxW="full" m={0}>
    <Heading as="h1" size="xl" mb={4}>
      Frontend Frameworks
    </Heading>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Load Time</Th>
          <Th>Resource Usage</Th>
          <Th>Responsiveness</Th>
          <Th>User Experience Rating</Th>
          <Th>Trend</Th>
          <Th>Website</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((framework) => (
          <Tr key={framework.name}>
            <Td>{framework.name}</Td>
            <Td>{framework.loadTime}</Td>
            <Td>{framework.resourceUsage}</Td>
            <Td>{framework.responsiveness}</Td>
            <Td>{framework.userExperience}</Td>
            <Td>{framework.trend}</Td>
            <Td>
              <Link href={`https://${framework.website}`} isExternal>
                {framework.website}
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Container>
);

export default TablePage;
