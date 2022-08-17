import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/react";
import { InputLeftAddon } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Flex>
      <InputGroup>
        <Input focusBorderColor="pink" type="text" placeholder="Name:" />
      </InputGroup>
      <InputGroup>
        <Input focusBorderColor="pink" type="email" placeholder="Email:" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children={<PhoneIcon color="gray.300" />} />
        <Input focusBorderColor="pink" type="tel" placeholder="Phone:" />
      </InputGroup>
    </Flex>
  );
}
