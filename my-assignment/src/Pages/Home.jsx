import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";
import Overview from "../Components/Overview";
import Assessments from "../Components/Assessments";

const Home = () => {
  return (
    <Flex justifyContent={"space-between"} pr="20px" h="200vh">
      <SideNav />

      <Box
        w={{ base: "83%", md: "83%", lg: "88%" }}
        position="absolute"
        left={{ base: "16%", md: "16%", lg: "11%" }}
      >
        <Navbar />
        <Overview />
        <Assessments/>
      </Box>
    </Flex>
  );
};

export default Home;
