import { AspectRatio, Box } from "@chakra-ui/react";

function Hero() {
  return (
    <>
      <AspectRatio maxW="2560px" w="100%" h="auto" ratio={1}>
        <iframe title="naruto" src="../public/myVideo.mp4" allowFullScreen />
      </AspectRatio>

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
      ></Box>
    </>
  );
}

export default Hero;
