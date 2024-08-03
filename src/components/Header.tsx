import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  useColorModeValue,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Header: React.FC = () => (
  <Box as="header" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <HStack spacing={6} alignItems="center">
        <Box>
          <Link href="/">MyApp</Link>
        </Box>
        <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="/about">About</Link>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/customer-details">
                Profile
              </MenuItem>
              <MenuItem as="a" href="#">
                Notification Settings
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Multi Dropdown
            </MenuButton>
            <MenuList>
              <MenuGroup title="Group 1">
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Group 2">
                <MenuItem>Option 3</MenuItem>
                <MenuItem>Option 4</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
      <Flex alignItems="center">
        <ButtonGroup spacing={4}>
          <Button colorScheme="green">Login</Button>
          <Button colorScheme="green">Sign Up</Button>
        </ButtonGroup>
        <InputGroup ml={4}>
          <Input placeholder="Search..." />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<SearchIcon />} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
    <Divider orientation="horizontal" />
  </Box>
);

export default Header;
