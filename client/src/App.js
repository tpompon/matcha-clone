import React from "react"
import { Provider } from "react-redux"

import store from "./store"
import Path from "./Path"

const App = () => (
    <Provider store={ store }>
        <Path />
    </Provider>
)

export default App