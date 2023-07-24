import React from "react";
import SegmentIcon from "@mui/icons-material/Segment";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import LaptopIcon from "@mui/icons-material/Laptop";
import MyDrawer from "./Drawer";

const MobNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      p="10px"
      display={{ base: "flex", md: "none", lg: "none" }}
      alignItems={"center"}
      bgColor="white"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <MyDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"} ml="10px">
          Assessment
        </Text>
      </Flex>
      <Box>
        <LaptopIcon />
      </Box>
    </Flex>
  );
};

export default MobNav;
