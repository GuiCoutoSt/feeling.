import { Flex, Text, Box, Link, Button } from "@chakra-ui/react";
import { MdModeEdit, MdRestoreFromTrash } from "react-icons/md";
import { useComments } from "../../provider/CommentsProvider";
import { useDisclosure } from "@chakra-ui/react";
import { EditComment } from "../../components/Modal/EditComment";

import { motion, useAnimation } from "framer-motion";

const FlexMotion = motion(Flex);

export const MyCommentCard = ({ phrase, date, commentId, onOpenPhrase }) => {
  const { deleteMyComments } = useComments();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const controls = useAnimation();

  return (
    <FlexMotion
      animate={controls}
      w="90vw"
      maxW="700px"
      minW="320px"
      m="5px 0"
      bg="white"
      padding="10px 20px"
      borderRadius="15px"
      border="solid 4px"
      borderColor="transparent"
      cursor="pointer"
      color="orange.500"
      justifyContent="space-between"
      _hover={{
        borderTop: "solid 1px",
        borderRight: "solid 1px",
        borderLeft: "solid 2px",
        borderBottom: "solid 4px",
        transition: "0.2s",
        borderColor: "black",
      }}
      css={{
        "&:not(:hover)": {
          transition: "0.2s",
        },
      }}
    >
      <Flex flexDirection="column" color="black" justifyContent="space-between">
        <Box>
          <Text
            maxW="550px"
            minW="220px"
            w="100%"
            mb="15px"
            fontStyle="italic"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontWeight="light"
          >
            {phrase}
          </Text>
        </Box>

        <Text fontSize="xs">{date}</Text>
        <Link fontSize="xs" color="orange.500" onClick={onOpenPhrase}>
          Ver a frase
        </Link>
      </Flex>

      <Flex flexDirection="column" justifyContent="space-between" minW="65px">
        <Flex flexDirection="column">
          <Button
            onClick={onOpen}
            h="30px"
            mb="5px"
            fontSize="xs"
            color="black"
            bgColor="white"
            border="2px solid"
            borderColor="black"
            _hover={{ bgColor: "black", color: "white" }}
          >
            Editar
          </Button>
          <Button
            onClick={() => {
              deleteMyComments(commentId);
              controls.start((i) => ({
                opacity: [1, 0],
                x: [0, 20],
                transition: {
                  duration: 0.5,
                },
              }));
            }}
            h="30px"
            fontSize="xs"
            color="red.400"
            bgColor="white"
            border="2px solid"
            borderColor="red.400"
            _hover={{ bgColor: "red.400", color: "white" }}
          >
            Excluir
          </Button>
        </Flex>
      </Flex>

      <EditComment
        isOpen={isOpen}
        onClose={onClose}
        comment={phrase}
        commentId={commentId}
      />
    </FlexMotion>
  );
};
