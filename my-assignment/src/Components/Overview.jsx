import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const Overview = () => {
  return (
    <Box bgColor="white" p="20px">
      <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"}>
        Assessment Overview
      </Text>

      <Grid
        mt="15px"
        w="100%"
        borderRadius={"15px"}
        border="1px solid #E3E5E8"
        fontWeight={"500"}
        gridTemplateColumns={{base: "repeat(4,auto)", md: "repeat(2,auto)", lg:"repeat(4,auto)" }}
      >
        <Box h="100%" p="15px 20px"  >
          <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
            Total Assessment
          </Text>
          <Flex mt="20px" gap="10px" alignItems={"center"}>
            <ViewAgendaOutlinedIcon
              sx={{
                color: "#8670F2",
                backgroundColor: "#EBE8FD",
                padding: "8px",
                width: "35px",
                height: "35px",
                borderRadius: "6px",
              }}
            />
            <Text fontSize={"20px"} fontWeight={"bold"}>
              40
            </Text>
          </Flex>
        </Box>

        <Box
          borderRight={{base:"none",md:"none",lg:"1px solid #E3E5E8"}}
          borderLeft={"1px solid #E3E5E8"}
          p="15px 20px"
        >
          <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
            Candidates
          </Text>
          <Flex mt="15px" gap="10px" alignItems={"center"}>
            <PeopleAltOutlinedIcon
              sx={{
                color: "#8670F2",
                backgroundColor: "#EBE8FD",
                padding: "8px",
                width: "35px",
                height: "35px",
                borderRadius: "6px",
              }}
            />
            <Flex>
              <Box
                alignItems={"center"}
                p="0px 10px"
                borderRight={"1px solid #E3E5E8"}
              >
                <Text
                  alignItems={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  11,250{" "}
                  <span style={{ color: "#05C165", fontSize: "12px" }}>
                    +75
                  </span>{" "}
                </Text>
                <Text fontSize={"12px"}>Total Candidate</Text>
              </Box>
              <Box alignItems={"center"} p="0px 10px">
                <Text
                  alignItems={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  110{" "}
                  <span style={{ color: "#05C165", fontSize: "12px" }}>
                    +79
                  </span>{" "}
                </Text>
                <Text fontSize={"12px"}>Who Attamped</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box
          borderRight={"1px solid #E3E5E8"}
          borderTop={{base:"1px solid #E3E5E8", md:"1px solid #E3E5E8", lg:"none"}}
          p="15px 20px"
          gridColumnStart={{base:"3", md:"1", lg:"3"}}
        >
          <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
            Candidates Source
          </Text>
          <Flex mt="15px" gap="10px" alignItems={"center"}>
            <LanguageOutlinedIcon
              sx={{
                color: "#E9407A",
                backgroundColor: "#FCE8EF",
                padding: "8px",
                width: "35px",
                height: "35px",
                borderRadius: "6px",
              }}
            />
            <Flex>
              <Box
                alignItems={"center"}
                p="0px 10px"
                borderRight={"1px solid #E3E5E8"}
              >
                <Text
                  alignItems={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  12,000{" "}
                  <span style={{ color: "#05C165", fontSize: "12px" }}>
                    +75
                  </span>{" "}
                </Text>
                <Text fontSize={"12px"}textAlign={"left"} >Email</Text>
              </Box>
              <Box
                alignItems={"center"}
                p="0px 10px"
                borderRight={"1px solid #E3E5E8"}
              >
                <Text
                  alignItems={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  160{" "}
                  <span style={{ color: "#05C165", fontSize: "12px" }}>
                    +75
                  </span>{" "}
                </Text>
                <Text fontSize={"12px"}>Social Share</Text>
              </Box>
              <Box alignItems={"center"} p="0px 10px">
                <Text
                  alignItems={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  150{" "}
                  <span style={{ color: "#05C165", fontSize: "12px" }}>
                    +79
                  </span>{" "}
                </Text>
                <Text fontSize={"12px"}>Unique Link</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box h="100%" p="15px 20px" borderTop={{base:"1px solid #E3E5E8", md:"1px solid #E3E5E8", lg:"none"}} >
          <Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>  
            Total Purpose
          </Text>
          <Flex mt="20px" gap="10px" alignItems={"center"}>
            <InsertLinkOutlinedIcon
              sx={{
                color: "#8670F2",
                backgroundColor: "#EBE8FD",
                padding: "8px",
                width: "35px",
                height: "35px",
                borderRadius: "6px",
              }}
            />
            <Text fontSize={"20px"} fontWeight={"bold"}>
              15
            </Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Overview;
