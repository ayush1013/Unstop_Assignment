import { Box, Button, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { assessmentData } from "../Data/Assessments";
import AddIcon from "@mui/icons-material/Add";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddItem from "./AddItem";

const Assessments = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor="white" p="20px">
      <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"}>
        My Assessment
      </Text>
      <Grid
        mt="20px"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "20px", md: "20px", lg: "30px" }}
      >
        <Box
          p="30px"
          borderRadius={"15px"}
          border="1px solid #E3E5E8"
          borderStyle={"dashed"}
          bgColor="#F6F8FA"
        >
          {/* <Button borderRadius="50%" w="65px" h="65px" bgColor="white">
            <AddIcon fontSize="large" sx={{ color: "blue" }} />
          </Button> */}
          <AddItem isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <Text fontWeight={"500"} fontSize={"18px"}>
            New Assessment
          </Text>
          <Text fontSize={"12px"}>
            From here you can add questions of multiple types like MCQs,
            Subjective (text, paragraph)!
          </Text>
        </Box>
        {assessmentData &&
          assessmentData.map((elem) => (
            <Box p="15px" borderRadius={"15px"} border="1px solid #E3E5E8">
              <Flex w="100%" justifyContent={"space-between"}>
                <BusinessCenterIcon
                  sx={{
                    color: "#8670F2",
                    backgroundColor: "#EBE8FD",
                    padding: "8px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                  }}
                />
                <MoreVertIcon />
              </Flex>
              <Text
                fontWeight={"500"}
                fontSize={"18px"}
                textAlign={"left"}
                mt="10px"
              >
                {elem.title}
              </Text>
              <Flex gap="6px" alignItems={"center"} fontSize={"14px"}>
                <Text fontWeight={"500"}>{elem.category}</Text>
                <Text color={"#B8C6D7"}>|</Text>
                <Text color={"#B8C6D7"}>
                  {" "}
                  <CalendarMonthIcon
                    sx={{
                      color: "#1C4980",
                      marginTop: "5px",
                      fontSize: "14px",
                    }}
                  />{" "}
                  {elem.date}
                </Text>
              </Flex>
              <Flex
                w="100%"
                mt="18px"
                borderTop="1px solid #E3E5E8"
                borderStyle={"dashed"}
                pt="10px"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex gap="10px">
                  <Box textAlign={"left"} fontWeight={"500"} fontSize={"14px"}>
                    <Text>{elem.duration}</Text>
                    <Text>Duration</Text>
                  </Box>
                  <Box textAlign={"left"} fontWeight={"500"} fontSize={"14px"}>
                    <Text>{elem.question}</Text>
                    <Text>Questions</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Button
                    h="30px"
                    w="80px"
                    fontSize={"13px"}
                    bgColor={"white"}
                    border="1px solid #1C4980"
                    borderRadius={"15px"}
                  >
                    {" "}
                    <InsertLinkIcon
                      sx={{
                        transform: "rotate(-45deg)",
                        fontSize: "20px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Share{" "}
                  </Button>
                  <Flex ml="20px">
                    {elem.attendees.length > 0 &&
                      elem.attendees.map((el) => (
                        <Box
                          key={el.id}
                          w="30px"
                          pl="5px"
                          h="30px"
                          ml="-15px"
                          border={"1px solid white"}
                          borderRadius={"50%"}
                          color="white"
                          fontWeight={"500"}
                          textAlign={"center"}
                          display={"flex"}
                          alignItems={"center"}
                          bgColor={el.name[0] === "A" ? "#6548EE" : "#EE709B"}
                        >
                          {el.name[0]}
                          {el.name.split(" ")[1][0]}
                        </Box>
                      ))}
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

export default Assessments;
