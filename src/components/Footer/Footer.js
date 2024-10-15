import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  const textColor = useColorModeValue("lightblue.100", "lightpeach.100");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "40px" }}
      pb="30px"
      mt="20px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{
          base: "10px",
          md: "15px",
          xl: "20px"
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        {"</>"} with <AiFillHeart /> by Tanvir Ahamed • All Rights Reserved
      </Text>
      <List display="flex">
        <ListItem
          w="80px"
          h="80px"
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://github.com/Tanvir286" target="blank">
            <AiFillGithub />
          </Link>
        </ListItem>
        <ListItem
          w="80px"
          h="80px"
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://www.linkedin.com/in/tanvir-ahamed261/" target="blank">
            <BiLogoLinkedin />
          </Link>
        </ListItem>
        <ListItem
          w="80px"
          h="80px"
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://www.facebook.com/profile.php?id=100070985734021" target="blank">
           <FaSquareFacebook />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
