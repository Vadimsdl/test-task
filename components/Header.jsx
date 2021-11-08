
import { Box, Flex, Avatar, Tag, TagLabel, Text } from "@chakra-ui/react"
import { MoreIcon } from './icons';

const Header = ({data}) => {
  return (
    <Flex justifyContent="space-between">
      <Flex maxW="353px" w="100%" justifyContent="space-between">
        <Tag 
          fontFamily="Poppins"
          borderRadius="full" 
          py="14px" px="20px" 
          letterSpacing="0.4px" 
          bg="#BE4444" fontSize="13px" 
          fontWeight="600" 
          color="#fff"
        >
          <TagLabel>{data.tag}</TagLabel>
        </Tag>
        <Box>
            <Avatar size="44px" name={data.fullname} src={data.avatar} />
        </Box>
        <Text 
          my="auto"
          fontFamily="Poppins"
          fontWeight="600" 
          color="#fff"
          fontSize="18px"
          letterSpacing="0.2px"
        >
          {data.fullname}
        </Text>
        <Text 
          my="auto"
          fontFamily="Poppins"
          color="#fff"
          opacity="0.5"
          fontSize="12px"
          letterSpacing="0.2px"
        >{data.online}</Text>
      </Flex>
      <MoreIcon w="20px" h="20px" my="auto"/>
    </Flex>
  );
}


export default Header;