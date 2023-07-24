import { Box, Flex, Text } from "@chakra-ui/react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from '@mui/icons-material/Laptop';

function Navbar() {
  return (
    <Flex
      w="100%"
      h="70px"
      bgColor="white"
      justifyContent={"space-between"}
      pr="20px"
      borderBottom={"2px solid #E3E5E8"}
      borderTopRadius={{base:"0px",md:"15px",lg:"15px"}}
      alignItems={"center"}
    >
      <Flex alignItems={"center"} w={{base:"100%"}} >
        <Box
          fontSize={"20px"}
          fontWeight={"bold"}
          p="5px 20px"
          alignItems={"center"}
          borderRight={"2px solid #E3E5E8"}
        >
          <Text>Assessment</Text>
        </Box>
        <Box
          fontSize={"14px"}
          fontWeight={"bold"}
          p="23px 20px"
          alignContent={"center"}
          color={"#0073E6"}
        >
          <Text borderBottom={"3px solid #0073E6"} p=" 23px 0px">
            My Assessments
          </Text>
        </Box>
      </Flex>
      <Box display={{base:"none",md:"block", lg:"block"}} >
        <SmartphoneIcon sx={{ color: "#1C4980" }} />
      </Box>
    </Flex>
  );
}
export default Navbar;
