import { Box, Flex, Badge, Text, VStack } from "@chakra-ui/react"
import { useDappContext } from "./hook/useDappContext"
import { faucetAddress } from "./contract/Faucet"
import { tokenAddress } from "./contract/Token"

const Footer = () => {
  const { bgNavFoot, colorScheme } = useDappContext()

  return (
    <Box bg={bgNavFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Badge colorScheme={colorScheme}>Deployed on Kovan</Badge>
        <Text>🌶</Text>
        <VStack alignItems={"center"} my={8}>
          <Badge colorScheme={colorScheme}>Token {tokenAddress}</Badge>
          <Badge colorScheme={colorScheme}>Faucet {faucetAddress}</Badge>
        </VStack>
      </Flex>
    </Box>
  )
}
export default Footer
