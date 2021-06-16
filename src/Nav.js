import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/color-mode"
import { useWeb3 } from "web3-hooks"
import { useDappContext } from "./hook/useDappContext"

const Nav = () => {
  const [web3State, login] = useWeb3()
  const { colorMode, toggleColorMode } = useColorMode()
  const { bgNavFoot, hoverNavFoot, colorScheme } = useDappContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={bgNavFoot} px={4}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log out from dapp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              To log out from this dapp, please disconnect your MetaMask
              account.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={colorScheme} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {web3State.isLogged ? (
          <HStack as={"nav"} spacing={4}>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/"}
              aria-label={"Home page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              Home
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/Token"}
              aria-label={"Token page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              Token
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/Faucet"}
              aria-label={"Faucet page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              Faucet
            </Link>
          </HStack>
        ) : (
          <Spacer />
        )}
        <HStack spacing={4}>
          <Button
            colorScheme={colorScheme}
            px={2}
            py={1}
            mx={4}
            size={"md"}
            type="button"
            aria-label="Dark Mode"
            onClick={web3State.isLogged ? onOpen : login}
            _hover={hoverNavFoot}
          >
            {web3State.isLogged ? "Log out" : "Log in"}
          </Button>
          <Button
            px={2}
            py={1}
            mx={4}
            size={"md"}
            type="button"
            aria-label="Dark Mode"
            onClick={toggleColorMode}
            bg={bgNavFoot}
            _hover={hoverNavFoot}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
export default Nav
