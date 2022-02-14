import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Divider,
  chakra,
  Stack,
  VisuallyHidden,
  Button,
  useColorMode,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const Tax = () => {
  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab _selected={{ color: "white", bg: "celo.100" }}>Summary</Tab>
        <Tab _selected={{ color: "white", bg: "celo.100" }}>By Token</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Summary</p>
        </TabPanel>
        <TabPanel>
          <p>By Token</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Tax;
