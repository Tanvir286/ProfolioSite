import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";



import Chat from "../../assets/projects/Chat.png";
import Ecommerce from "../../assets/projects/Ecommerce.png";
import School from "../../assets/projects/school.png";
import Rent from "../../assets/projects/Rent.png";
import Number  from "../../assets/projects/Number Game.png";
import Find from "../../assets/projects/Find.png";


import Chain from "../../assets/projects/chain.png";
import Optional from "../../assets/projects/optional.png";




export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={Chat}
            projectName={"FANCODE Chatting"}
            aboutProject={"A Realtime Chat Application"}
            techStack={"CSS, MATARIAL UI, REACT JS, FIREBASE, REDUX TOOLKIT"}
            projectLiveLink="https://react-chat-seven-chi.vercel.app/"
            projectLink="https://github.com/Tanvir286/React-Chat"
          />
         
          <ProjectCard
            projectImage={School}
            projectName={"ACP HIGH SCHOOL"}
            aboutProject={"The website is focused on a high school environment."}
            techStack={"TAILWIND CSS,JAVASCRIPT,REACT JS"}
            projectLiveLink="https://ashekpurcphs.edu.bd/"
          />
           <ProjectCard
            projectImage={Rent}
            projectName={"FIND HOMEBD"}
            aboutProject={"Find Rent/Sell properties for BD"}
            techStack={"EXPRESS JS,TAILWIND CSS, REACT JS,MONGODB,BOOSTRAP"}
            projectLiveLink="https://find-home-bd.web.app/"
            projectLink="https://github.com/Tanvir286/Find_BD"
          />
          <ProjectCard
            projectImage={Ecommerce}
            projectName={"OREBI ECOMMERCE"}
            aboutProject={"Orebi site you shop online from various categories"}
            techStack={"TALIWIND CSS, REACT JS, REACT SWIPER JS"}
            projectLiveLink="https://orebi-e-commerce-zeta.vercel.app/"
            projectLink="https://github.com/Tanvir286/Orebi_E_Commerce"
          />
          <ProjectCard
            projectImage={Number}
            projectName={"NUMBER GUESSING GAME"}
            aboutProject={"The first person provides a number, then a random number between 1-10 is added. The others person gets 5 chances to guess the final result."}
            techStack={"HTML,CSS,JAVASCRIPT"}
            projectLiveLink="https://number-guess-game-one.vercel.app/"
            projectLink="https://github.com/Tanvir286/Number-Guess-Game"
          />
          <ProjectCard
            projectImage={Find}
            projectName={"FIND LOST PERSON"}
            aboutProject={"The website connects national and international missing persons investigations."}
            techStack={"HTML,CSS,JAVASCRIPT"}
            projectLiveLink="https://tanvir286.github.io/Name-Search-Javascript/"
            projectLink="https://github.com/Tanvir286/Name-Search-Javascript"
          />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={Chain}
            projectName={"Javascript Error Handling"}
            aboutProject={"This blog is about allows developers to access properties of an object without worrying about TypeError"}
            projectLink="https://dev.to/tanvir_ahmed_286/javascript-error-handling-try-catch-throw-finally-1hkc"
          />
          <ProjectCard
            projectImage={Optional}
            projectName={"Javascript Optional Chaining"}
            aboutProject={"This blog is about allows developers to wrap potentially problematic code within a “try” block and specify the course of action in a “catch” block should any errors occur"}
            projectLink="https://dev.to/tanvir_ahmed_286/javascript-optional-chaning-3m0p"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
