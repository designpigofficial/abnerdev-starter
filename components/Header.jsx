import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
  Image,
  Img,
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
        <Button
          ref={btnRef}
          variation="outline"
          colorScheme="pink"
          onClick={onOpen}
        >
          |||
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
            <DrawerHeader pt="25px">Abner Development</DrawerHeader>

            <DrawerBody mt="50%">
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                spacing="24px"
              >
                <Box w="auto" h="80px" pe="20px">
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </Box>
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
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme="blue">
                <Link href="https://github.com/designpigofficial" passHref>
                  <a target="_ blank">
                    <Image src="/github.png" height="60%" alt="" />
                  </a>
                </Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Spacer />
      </Flex>
    </>
  );
}
