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
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiBookOpen,
} from "react-icons/fi";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { AiOutlineWallet } from "react-icons/ai";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/logo.png" width={"3rem"} />
        <Text fontSize="2xl" fontWeight="bold">
          Celo Tax
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem icon={FiHome}>Dashboard</NavItem>
      <NavItem icon={HiOutlineReceiptTax}>Tax</NavItem>
      <NavItem icon={FiTrendingUp}>Portfolio</NavItem>

      <chakra.div
        my={5}
        width={"15rem"}
        height={"1rem"}
        bgColor={"gray.300"}
        borderY={"1px"}
        borderColor={"gray.200"}
        display={{ base: "none", md: "block" }}
      />
      <NavItem mb={5} icon={AiOutlineWallet}>
        Wallets
      </NavItem>

      <chakra.div
        mb={5}
        width={"15rem"}
        height={"1rem"}
        bgColor={"gray.300"}
        borderY={"1px"}
        borderColor={"gray.200"}
        display={{ base: "none", md: "block" }}
      />
      <NavItem mb={-2} p={2}>
        Docs
      </NavItem>
      <NavItem mb={-2} p={2}>
        Early Access
      </NavItem>
      <NavItem my={-2} p={2}>
        Pricing
      </NavItem>
      <Flex
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={"column"}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        position={"absolute"}
        bottom={0}
      >
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com/CeloTax"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Discord"}
            href={"https://discord.gg/bX3rTew698"}
          >
            <FaDiscord />
          </SocialButton>
          {/* <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton> */}
        </Stack>
        <Text fontFamily="Poppins" textAlign={"center"}>
          © {new Date().getFullYear()} Celo Tax. All rights reserved
        </Text>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "celo.100",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
        <Flex display={{ base: "none", md: "flex" }}>
          Connected to&nbsp;
          <Text fontWeight={"bolder"} color={"#3488EB"}>
            Alfajores
          </Text>
          &nbsp;network
        </Flex>
        <HStack spacing={{ base: "0", md: "6" }}>
          <Menu display={{ base: "none", md: "flex" }}>
            <>
              <MenuButton
                bg={useColorModeValue("gray.300", "gray.600")}
                fontFamily="poppins"
                fontWeight="500"
                px={3}
                borderRadius={"15"}
                rightIcon={<ChevronDownIcon />}
                as={Button}
              >
                <Text>Connected with wallet: 0zAec ... c49f</Text>
              </MenuButton>
              <MenuList>
                <MenuItem> Disconnect Wallet </MenuItem>
              </MenuList>
            </>
          </Menu>
          <Menu>
            <MenuButton
              bg={useColorModeValue("gray.300", "gray.600")}
              px={"4"}
              borderRadius={"full"}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </MenuButton>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  );
};

const SocialButton = ({ children, label, href, width, height }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w="38px"
      h="38px"
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.200"),
        color: useColorModeValue("#1DA1F2", "#1DA1F2"),
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
