import { Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Faucet from "./Faucet"
import Footer from "./Footer"
import Home from "./Home"
import { useDappContext } from "./hook/useDappContext"
import Nav from "./Nav"
import Token from "./Token"

const Dapp = () => {
  const { bgContent } = useDappContext()

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Box bg={bgContent} minH={"100vh"}>
            <Home />
          </Box>
        </Route>
        <Route exact path="/Token">
          <Box bg={bgContent} minH={"100vh"}>
            <Token />
          </Box>
        </Route>
        <Route exact path="/Faucet">
          <Box bg={bgContent} minH={"100vh"}>
            <Faucet />
          </Box>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
export default Dapp
