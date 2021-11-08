import { Box } from "@chakra-ui/react"
import Header from './Header';
import Content from './Content';
import Footer from "./Footer";

const data = {
  header: {
    tag: 'Funding',
    avatar: '/human.png',
    fullname: 'Ralph Edwards',
    online: '3h ago'
  },
  content: {
    text: [
      'Velit ut ultrices quis viverra eu, ultricies nulla at nec. \
      Ut diam venenatis egestas massa vulputate nam. Pretium eros, \
      imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, \
      sit. Magna neque vel amet sem vulputate lacus ut.',

      'Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. \
      Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. \
      Volutpat facilisi venenatis phasellus maecenas in.'
    ]
  }
}

const Card = () => {
  return (
    <Box bg="#272B35" borderRadius="12px">
      <Box px="15px" p="2rem">
        <Header data={data.header}/>
        <Content data={data.content}/>  
      </Box>
      <Footer />
    </Box>
  )
}

export default Card;