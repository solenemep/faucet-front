import { createContext } from "react"
import { useContract } from "web3-hooks"
import { faucetAddress, faucetABI } from "../contract/Faucet"

export const FaucetContext = createContext()

export const FaucetContextProvider = ({ children }) => {
  const faucet = useContract(faucetAddress, faucetABI)
  return (
    <FaucetContext.Provider value={{ faucet }}>
      {children}
    </FaucetContext.Provider>
  )
}
