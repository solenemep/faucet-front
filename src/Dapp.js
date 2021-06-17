import { Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Faucet from "./Faucet"
import Footer from "./Footer"
import Home from "./Home"
import { useDappContext } from "./hook/useDappContext"
import Nav from "./Nav"
import Wallet from "./Wallet"

const Dapp = () => {
  const { bgContent } = useDappContext()

  return (
    <Router>
      <Nav />
      <Box bg={bgContent} minH={"100vh"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/faucet">
            <Faucet />
          </Route>
        </Switch>
      </Box>
      <Footer />
    </Router>
  )
}
export default Dapp
