import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useWeb3 } from "web3-hooks"
import { useDappContext } from "./hook/useDappContext"
import { useFaucetContext } from "./hook/useFaucetContext"

const Faucet = () => {
  const [web3State] = useWeb3()
  const { hoverNavFoot, colorScheme, bgNavFoot } = useDappContext()
  const { faucet } = useFaucetContext()
  const toast = useToast()

  // NB TOKEN
  const [nbToken, setNbToken] = useState(0)
  useEffect(() => {
    if (faucet) {
      const getNbToken = async () => {
        try {
          const nbToken = await faucet.nbToken()
          setNbToken(nbToken.toString())
        } catch (e) {
          console.log(e)
        }
      }
      getNbToken()
    }
  }, [faucet])

  const [isLoadingAsKToken, setIsLoadingAsKToken] = useState(false)
  const handleAskToken = async () => {
    try {
      setIsLoadingAsKToken(true)
      let tx = await faucet.askToken()
      await tx.wait()
      toast({
        title: "Transfer successfull",
        description: `Transfer of 100 TKN to ${web3State.account}`,
        variant: "subtle",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction signature denied",
          description: e.message,
          variant: "subtle",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }
    } finally {
      setIsLoadingAsKToken(false)
    }
  }

  return (
    <Flex
      spacing={16}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mx={16}
      py={16}
    >
      <Heading as={"h2"} size="2xl" my={8}>
        Faucet
      </Heading>

      <Text
        my={8}
        width={600}
        textAlign={"center"}
        as={"small"}
        style={{ textTransform: "uppercase" }}
      >
        Here you can ask for 100 TKN every 3 days.
      </Text>

      {web3State.isLogged && web3State.chainId === 42 ? (
        <VStack my={8}>
          <Button
            colorScheme={colorScheme}
            px={4}
            py={2}
            width={200}
            size={"lg"}
            type="button"
            aria-label="ask token"
            onClick={handleAskToken}
            isLoading={isLoadingAsKToken}
            _hover={hoverNavFoot}
          >
            Get {nbToken} TKN
          </Button>
        </VStack>
      ) : (
        <VStack my={8}>
          <Link
            style={{ fontWeight: "bold" }}
            href={"/"}
            aria-label={"Faucet page"}
            px={4}
            py={2}
            rounded={"md"}
            _hover={hoverNavFoot}
            bg={bgNavFoot}
          >
            Back Home to check connection
          </Link>
        </VStack>
      )}
    </Flex>
  )
}
export default Faucet
