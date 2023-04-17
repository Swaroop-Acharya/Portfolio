import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
    <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">imthepk</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
    </>
  )
}
