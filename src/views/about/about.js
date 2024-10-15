import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import Boostrap from "../../assets/icons/Boostrap.png";
import Tailwindcss from "../../assets/icons/tailwind.png";
import Firebase from "../../assets/icons/Firebase.png";
import Next from "../../assets/icons/Nextjs.png";
import Redux from "../../assets/icons/redux.png";
import Npm from "../../assets/icons/Npm.png";



import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/aboutMePhoto.jpg";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organization"
                    value="KhaganBD"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Frontend Developer"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Zigatola Bus Stand,Satmasjid Road,Dhaka"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="Daffodil International University"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bsc in CSE"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English,Bangla"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>


        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<Front-End/>"}
          </Text>
        </Flex>


        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={Tailwindcss} />
          <TechStackCard imagepath={Boostrap} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={Redux} />
          <TechStackCard imagepath={Next} />
          <TechStackCard imagepath={typescript} />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<Back-End/>"}
          </Text>
        </Flex>


        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
         
          <TechStackCard imagepath={cpp} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={Firebase} />
          <TechStackCard imagepath={Npm} />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="rahul1582"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Skeleton
            height="100%"
            isLoaded={loadedgithubimg}
            color="white"
            fadeDuration={1}
          >
            <LazyLoadImage
              src={
                colorMode === "light"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=whatsapp-light&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
                  : "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=calm-pink&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
              }
              alt="GitHub Streak"
              effect="blur"
              onLoad={() => setloadedgithubimg(true)}
            />
          </Skeleton>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/Tanvir286" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY EDUCATION AND TRANING/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdCastForEducation}
                width="40px"
                height="40px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Bachelor's degree</Text>
            <Text color={textColorPrimary} textAlign="center" mt="12px">
              Daffodil International University
              <br/>
              Computer Science & Engineering
              <br/>
              May 2020 - June 2024 Result: 3.25
              <br/>
            </Text> 
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdCastForEducation}
                width="40px"
                height="40px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Higher Secondary Certificate</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Bogura Government Collage
              <br/>
              Science
              <br/>
               2017 July - August 2019
              <br/>
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdCastForEducation}
                width="40px"
                height="40px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Secondary School Certificate</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Ashekpur C.P High School
              <br/>
              Science
              <br/>
               2015 January - march 2017
              <br/>
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdCastForEducation}
                width="40px"
                height="40px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">MERN Development</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
               Creative It Institute
               <br/>
               FullStack Development
               <br/>
               2023 Septembar - Running 
              <br/>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
