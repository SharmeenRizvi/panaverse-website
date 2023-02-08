"use client"

import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

const Syllabusblockchain = () => {
  return (
    <Container maxW={'7xl'} p="12">
      
      <Heading as="h1">Program of Studies</Heading>
      <Text as="p" fontSize="lg" paddingTop="20px">
      This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.

        </Text>
      
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">

      <Heading as="h2">Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
      <Text as="p" fontSize="lg">
      This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
      </Text> <br /> 
        <Heading as="h4">Core Courses:</Heading>
        <Text as="p" fontSize="lg">
        Every participant of the program will start by completing the following three core courses:
        <b>
<br /> <br />
Quarter I (Core)
CS-101: Object-Oriented Programming using TypeScript
<br /> <br />
Quarter II (Core)
W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
<br /> <br />
Quarter III (Core)
$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
<br /> <br /> </b>
        </Text>
       
        <Heading as="h4">Specialized Track: </Heading>
        
       
        <Text as="p" fontSize="lg">
After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
<br /> <br />

<b>Quarter IV
W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
<br /> <br />
Quarter V
MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</b>

        </Text>
        
      </VStack>

      

      

    </Container>

  );
};

export default Syllabusblockchain;