import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useWeb3 } from "web3-hooks"

const Home = () => {
  const [web3State, login] = useWeb3()
  return (
    <Box mx={16} py={16}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as={"h1"} py={8}>
          Welcome 🌵
        </Heading>

        <Text
          width={600}
          textAlign={"center"}
          as={"small"}
          py={8}
          style={{ textTransform: "uppercase" }}
        >
          This dapp allows you to make transactions with ERC20 Token (TKN).
          Also, thanks to the Faucet, you can receive 100 TKN every 3 days.
        </Text>

        {web3State.isLogged ? (
          <VStack py={8}>
            <Alert status="success" rounded={"lg"}>
              <AlertIcon />
              Connected with {web3State.account}
            </Alert>
          </VStack>
        ) : (
          <VStack py={8}>
            <Alert status="warning" rounded={"lg"}>
              <AlertIcon />
              Please connect your MetaMask to access dapp functionalities
            </Alert>
          </VStack>
        )}
        {web3State.chainId === 42 ? (
          <VStack py={8}>
            <Alert status="info" rounded={"lg"}>
              <AlertIcon />
              Connected to KOVAN network
            </Alert>
          </VStack>
        ) : (
          <VStack py={8}>
            <Alert status="error" rounded={"lg"}>
              <AlertIcon />
              Please switch to KOVAN network
            </Alert>
          </VStack>
        )}
      </Flex>
    </Box>
  )
}
export default Home
