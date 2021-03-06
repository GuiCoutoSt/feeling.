import { Flex, Text, Image } from "@chakra-ui/react";

import coffee from "../../assets/coffee.svg";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const HomeAbout = () => {
  return (
    <Flex flexDirection="column">
      <FlexMotion
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        position="relative"
        bg="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="140vh"
      >
        <Flex
          justifyContent="center"
          alignItems={["center", "center", "center", "flex-start"]}
          flexDirection={["column", "column", "column", "row"]}
          mb="50px"
        >
          <Flex flexDirection="column">
            <Text
              w="300px"
              mb="15px"
              fontSize={["2xl", "3xl", "3xl", "4xl"]}
              fontWeight="semibold"
            >
              Quem Somos?
            </Text>
            <Text w={["300px", "300px", "300px", "290px"]} mb="15px">
              <Text as="abbr" fontWeight="semibold" color="orange.500">
                feeling.{" "}
              </Text>
              é uma plataforma dedicada a deixar sua vida um pouco mais leve.
              Aqui você encontra motivação extra para seu dia a dia, através de
              citações de autores conhecidos ou não.
            </Text>
          </Flex>

          <Flex
            h="fit-content"
            w={["300px", "300px", "300px", "250px"]}
            flexDirection="column"
            justifyContent="center"
            bg="yellow.50"
            padding="20px 30px"
            mt={["20px", "0px"]}
            borderRadius="15px"
          >
            <Text mb="15px" fontStyle="italic">
              Eu aprendi que as pessoas vão esquecer o que você disse, as
              pessoas vão esquecer o que você fez, mas as pessoas nunca
              esquecerão como você as fez sentir
            </Text>
            <Text color="orange.500" fontWeight="medium">
              Maya Angelou
            </Text>
          </Flex>
        </Flex>

        <Image
          src={coffee}
          alt="man coffee"
          w={["250px", "250px", "250px", "400px"]}
          draggable={false}
        />
      </FlexMotion>
    </Flex>
  );
};
