import { AspectRatio, Box } from "@chakra-ui/react";

function Hero() {
  return (
    <>
      <AspectRatio maxW="2560px" w="100%" h="auto" ratio={1}>
        <iframe title="naruto" src="../public/myVideo.mp4" allowFullScreen />
      </AspectRatio>
    </>
  );
}

export default Hero;
