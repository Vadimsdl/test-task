import { Box, Text, Input, Button} from "@chakra-ui/react"
import { ArrowRightIcon } from "./icons";

const Footer = () => {
  return (
      <Box bg="#5F74951A" p="1.5rem">
        <Text
          fontFamily="Poppins"
          fontWeight="600" 
          fontSize="16px"
          color="#fff"
          letterSpacing="0.12px"
          mt="2px"
        >
          How can you help with this Request?
        </Text>
        <Box position="relative">
          <Input
            mt="12px" fontSize="16px" 
            h="47px" pl="19px" 
            placeholder="Type here..." 
            border="unset" color="#fff" 
            opacity="0.5" borderRadius="full" 
            bg="#5F749533"
          />
          <Button 
            w="auto" h="47" bg="transparent" 
            pos="absolute" right="0" top="12px" 
            borderRadius="full" 
            _hover={{ bg: "#5F74951A"}} 
            _active={{bg: "#5F74951A"}}
          >
            <ArrowRightIcon/>
          </Button>
        </Box>
      </Box>
  );
}

export default Footer;