import { Alert, AlertIcon, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { useWeb3 } from "web3-hooks"

const Home = () => {
  const [web3State] = useWeb3()

  return (
    <Flex
      spacing={16}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mx={16}
      py={16}
    >
      <Heading as={"h1"} size="3xl" my={8}>
        Welcome 🌵
      </Heading>

      <Text
        my={8}
        width={600}
        textAlign={"center"}
        as={"small"}
        style={{ textTransform: "uppercase" }}
      >
        This dapp allows you to make transactions with ERC20 Token (TKN). Also,
        thanks to the Faucet, you can receive 100 TKN every 3 days.
      </Text>

      {web3State.isLogged ? (
        <VStack my={8}>
          <Alert status="success" rounded={"lg"}>
            <AlertIcon />
            Connected with {web3State.account}
          </Alert>
        </VStack>
      ) : (
        <VStack my={8}>
          <Alert status="warning" rounded={"lg"}>
            <AlertIcon />
            Please connect your MetaMask to access dapp functionalities
          </Alert>
        </VStack>
      )}
      {web3State.chainId === 42 ? (
        <VStack my={8}>
          <Alert status="info" rounded={"lg"}>
            <AlertIcon />
            Connected to KOVAN network
          </Alert>
        </VStack>
      ) : (
        <VStack my={8}>
          <Alert status="error" rounded={"lg"}>
            <AlertIcon />
            Please switch from {web3State.networkName} to KOVAN network
          </Alert>
        </VStack>
      )}
    </Flex>
  )
}
export default Home
