import { Box, Text } from "@chakra-ui/react"

const Content = ({data}) => {
  return (
    <Box >
    {data.text.map((text, index)=>{
      return (
          <Text
          key={index}
          fontFamily="Lato"
          mt="24px"
          color="#fff"
          opacity="0.8"
          fontSize="18px"
          letterSpacing="0.08px"
          lineHeight="25px"
        >
          {text}
        </Text>
      );
    })}
    </Box>
  );
}

export default Content;