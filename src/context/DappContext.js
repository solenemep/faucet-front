import { useColorModeValue } from "@chakra-ui/react"
import { createContext } from "react"

export const DappContext = createContext()

export const DappContextProvider = ({ children }) => {
  const bgNavFoot = useColorModeValue("red.100", "red.900")
  const hoverNavFoot = {
    textDecoration: "none",
    color: "inherit",
    bg: useColorModeValue("red.200", "red.800"),
  }

  const bgContent = useColorModeValue("red.50", "red.800")
  const colorScheme = "red"

  return (
    <DappContext.Provider
      value={{ bgNavFoot, hoverNavFoot, bgContent, colorScheme }}
    >
      {children}
    </DappContext.Provider>
  )
}
