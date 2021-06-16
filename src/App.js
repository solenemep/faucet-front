import { DappContextProvider } from "./context/DappContext"
import { FaucetContextProvider } from "./context/FaucetContext"
import { TokenContextProvider } from "./context/TokenContext"
import Dapp from "./Dapp"

const App = () => {
  return (
    <TokenContextProvider>
      <FaucetContextProvider>
        <DappContextProvider>
          <Dapp />
        </DappContextProvider>
      </FaucetContextProvider>
    </TokenContextProvider>
  )
}

export default App
