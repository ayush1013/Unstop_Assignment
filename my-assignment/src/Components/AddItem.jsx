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

function AddItem({ isOpen, onOpen, onClose }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [text, setText] = useState("");
  const [skills, setSkills] = useState([]);

  function handleKeyPress(e){
    if(e.key === "Enter"){
        setSkills([...skills, text]);
    }
    console.log(skills)
  } 

  function handleRemove(){
    
  }

  console.log(text)

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
        <DrawerContent>
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
                <Grid>
                    {
                        skills.length>0 && skills.map((elem)=>(
                            <Flex>
                                <Text>{elem}</Text>
                                <Text onClick={handleRemove} >✖</Text>
                            </Flex>
                        ))
                    }
                </Grid>
                <Input
                  placeholder="Type Here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleKeyPress}
                ></Input>
              </Box>
            </Grid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddItem;
