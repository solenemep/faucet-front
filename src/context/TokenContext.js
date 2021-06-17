import { createContext } from "react"
import { useContract } from "web3-hooks"
import { tokenAddress, tokenABI } from "../contract/Token"

export const TokenContext = createContext()

export const TokenContextProvider = ({ children }) => {
  const token = useContract(tokenAddress, tokenABI)
  return <TokenContext.Provider value={{token}}>{children}</TokenContext.Provider>
}
