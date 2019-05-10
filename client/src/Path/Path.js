import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import LoginAccount from "./components/LoginAccount"
import Home from "./components/Home"
import Error from "./components/Error"

const Path = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/LoginAccount" component={ LoginAccount } />
            <Route component={ Error } />
        </Switch>
    </BrowserRouter>
)

export default Path