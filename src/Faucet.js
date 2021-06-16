import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useWeb3 } from "web3-hooks"
import { useDappContext } from "./hook/useDappContext"

const Faucet = () => {
  const [web3State, login] = useWeb3()
  const { hoverNavFoot, colorScheme } = useDappContext()
  return (
    <Box mx={16} py={16}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as={"h2"} py={8}>
          TKN Faucet
        </Heading>

        <Text
          width={600}
          textAlign={"center"}
          as={"small"}
          py={8}
          style={{ textTransform: "uppercase" }}
        >
          Here you can ask for 100 TKN every 3 days.
        </Text>

        {web3State.isLogged && web3State.chainId === 42 ? (
          <VStack py={8}>
            <Button
              colorScheme={colorScheme}
              px={4}
              py={2}
              width={300}
              size={"lg"}
              type="button"
              aria-label="Dark Mode"
              //onClick={}
              _hover={hoverNavFoot}
            >
              Get 100 TKN
            </Button>
          </VStack>
        ) : (
          <VStack py={8}>
            <Alert status="error" rounded={"lg"}>
              <AlertIcon />
              Please check if network is KOVAN or your MetaMask connection
            </Alert>
          </VStack>
        )}
      </Flex>
    </Box>
  )
}
export default Faucet
