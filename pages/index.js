import { Flex } from "@chakra-ui/react"
import SidebarWithHeader from "../components/Sidebar"
import Tax from "../components/Tax"

const Home = () => {
  return (
      <SidebarWithHeader>
        <Tax />
        </SidebarWithHeader>
  )
}

export default Home