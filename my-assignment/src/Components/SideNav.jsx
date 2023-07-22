import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

const SideNav = () => {
  return (
    <Grid
      gap="10px"
      bgColor="white"
      w={{base:"15%", md:"15%", lg:"10%"}}
      p="10px 20px "
      fontSize={"13px"}
      fontWeight={"500"}
      position ="fixed"
      zIndex="10"
      top="0"
    >
      <Box p="10px">
        <DashboardOutlinedIcon fontSize="small" />
        <Text>Dashboard</Text>
      </Box>
      <Box
        p="10px 0px"
        borderRadius={"10px"}
        bgColor="#E5F1FC"
        border="2px solid #4096EC"
        color={"#4096EC"}
      >
        <NoteAltOutlinedIcon fontSize="small" />
        <Text>Assessment</Text>
      </Box>
      <Box p="10px">
        <LibraryBooksOutlinedIcon fontSize="small" />
        <Text>My Library</Text>
      </Box>
      <Box p="15px" borderTop={"1px dotted #E3E5E8"} mt="10px">
        <Button
          fontSize={"10px"}
          w="46px"
          h="18px"
          textAlign={"center"}
          alignItems={"center"}
          borderRadius={"7px"}
          border={"1px solid #DF623A"}
          display={"block"}
          fontWeight={"500"}
          color="#DF623A"
          p="0px 4px"
          bgColor={"#FBEBEA"}
          m={"auto"}
        >
          Admin
        </Button>
      </Box>
      <Box p="10px">
        <AnalyticsOutlinedIcon fontSize="small" />
        <Text>Round Status</Text>
      </Box>
    </Grid>
  );
};

export default SideNav;
