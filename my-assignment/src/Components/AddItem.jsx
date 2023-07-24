import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
  Grid,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function AddItem({ isOpen, onOpen, onClose }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [text, setText] = useState("");
  const [skills, setSkills] = useState([]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setSkills([...skills, text]);
      setText("");
    }
    console.log(skills);
  }

  function handleRemove(i) {
    skills.splice(i, 1);
    console.log(skills);
  }

  console.log(text);

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        borderRadius="50%"
        w="65px"
        h="65px"
        bgColor="white"
      >
        <AddIcon fontSize="large" sx={{ color: "blue" }} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent top={{base:"50px", md:"50px", lg:"0"}} borderTopRadius={"20px"} w={{base:"100%", md:"50%", lg:"40%"}} m="auto" >
          <DrawerCloseButton />
          <DrawerHeader borderBottom={"1px solid #E3E5E8"} color="#1C4980">
            Create new assessment
          </DrawerHeader>

          <DrawerBody>
            <Grid
              color="#1C4980"
              fontSize={"18px"}
              fontWeight={"500"}
              textAlign={"left"}
              gap="20px"
            >
              <Box mt="10px">
                <Text>Name os assessment</Text>
                <Input placeholder="Type Here" mt="5px" />
              </Box>
              <Box>
                <Text>Purpose of the test is</Text>
                <Select placeholder="Select"></Select>
              </Box>
              <Box>
                <Text>Description</Text>
                <Select placeholder="Select"></Select>
              </Box>
              <Box>
                <Text>Skills</Text>
                <Grid
                  border={"1px solid #E3E5E8"}
                  p="10px"
                  gridTemplateColumns={{base:"repeat(2,auto)", md:"repeat(3,auto)",lg:"repeat(4,auto)"}}
                  fontSize={"12px"}
                  gap="15px"
                >
                  {skills.length > 0 &&
                    skills.map((elem, i) => (
                      <Flex
                        bgColor="#DDEDFF"
                        p="5px 10px"
                        borderRadius={"15px"}
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Text>{elem}</Text>
                        <Text onClick={() => handleRemove(i)}>
                          <ClearIcon
                            sx={{ fontSize: "20px", marginLeft: "5px" }}
                          />
                        </Text>
                      </Flex>
                    ))}
                </Grid>
                <Input
                  mt="-1px"
                  placeholder="Type Here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleKeyPress}
                ></Input>
              </Box>
              <Box mt="10px">
                <Text>Duration of assessment</Text>
                <Input placeholder="Type Here" type="time" mt="5px" />
              </Box>
            </Grid>
          </DrawerBody>

          <Button
            bgColor="#0073E6"
            color="white"
            m="auto"
            display={"block"}
            w="92%"
            mt="20px"
            mb="20px"
          >
            Next
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddItem;
