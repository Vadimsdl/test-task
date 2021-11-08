import Head from 'next/head';
import { Flex, Center, Container } from "@chakra-ui/react"
import Card from '../components/Card';
import "@fontsource/poppins"
import "@fontsource/lato"

export default function Home() {
  return (
    <div>
      <Flex h="100vh">
        <Center w="100%" h="100%">
          <Container maxW="640px" w="100%" maxH="464px" h="100%" borderRadius="12px" mt="14px" p="0">
            <Card />
          </Container>
        </Center>
      </Flex>
    </div>
  );
}
