import { Flex, Box, Heading, Spacer, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        mx="35px"
        py="25px"
        gap="2"
      >
        <Box p="2" h="85px" color="pink">
          <Heading size="md" h="80px">
            Abner Development
          </Heading>
        </Box>
        <Spacer />
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
      </Flex>
    </>
  );
}
