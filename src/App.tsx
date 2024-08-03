import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Content from "/src/components/Content";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import TablePage from "/src/pages/Table";
import CustomerDetailsForm from "/src/pages/CustomerDetailsForm";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Container maxW="full" p={0} m={0}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/customer-details" element={<CustomerDetailsForm />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
