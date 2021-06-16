import { useContext } from "react"
import { TokenContext } from "../context/TokenContext"

export const useTokenContext = () => {
  const context = useContext(TokenContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use TokenContext outside of its provider`
    )
  }
  return context
}
