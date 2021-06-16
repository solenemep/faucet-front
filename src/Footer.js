import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import { useWeb3 } from "web3-hooks"
import { faucetAddress } from "./contract/Faucet"
import { tokenAddress } from "./contract/Token"
import { useDappContext } from "./hook/useDappContext"

const Footer = () => {
  const { bgNavFoot, colorScheme } = useDappContext()
  const [web3State, login] = useWeb3()

  return (
    <Box bg={bgNavFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Badge colorScheme={colorScheme}>
          Deployed on Kovan at {tokenAddress} & {faucetAddress}
        </Badge>
        <Text>🌶</Text>
      </Flex>
    </Box>
  )
}
export default Footer
