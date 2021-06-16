import { useContext } from "react"
import { FaucetContext } from "../context/FaucetContext"

export const useFaucetContext = () => {
  const context = useContext(FaucetContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FaucetContext outside of its provider`
    )
  }
  return context
}
