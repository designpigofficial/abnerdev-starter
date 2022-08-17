import { Box } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      bg="transparent"
      position="relative"
      w="100%"
      h="95vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={0}
      color="white"
    >
      <video autoPlay loop muted h="100%" w="auto">
        <source src="../public/myVideo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}

export default Hero;
