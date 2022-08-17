import {
  Flex,
  Box,
  Heading,
  Spacer,
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        mx="35px"
        py="25px"
        gap="2"
      >
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <HStack spacing="24px">
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/about" passHref>
                    <a>About</a>
                  </Link>
                </Box>
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/services" passHref>
                    <a>Services</a>
                  </Link>
                </Box>
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/technologies" passHref>
                    <a>Technologies</a>
                  </Link>
                </Box>
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/projects" passHref>
                    <a>Projects</a>
                  </Link>
                </Box>
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/contact" passHref>
                    <a>Contact</a>
                  </Link>
                </Box>
              </HStack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box p="2" h="85px" color="pink">
          <Heading size="md" h="80px">
            Abner Development
          </Heading>
        </Box>
        <Spacer />
      </Flex>
    </>
  );
}
