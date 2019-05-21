import React, { Component } from "react"

import EditProfil from "./components/EditProfil"
import Disconnect from "./components/Disconnect"
import ListOfPerson from "./components/ListOfPerson"
import ListProfilBlock from "./components/ListProfilBlock"

const optionsArray = [
    "Edit profil",
    "List of person",
    "List Profil Block",
]

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showOption: "",
        }
    }

    choosenOption = () => {
        const { location } = this.props
        if (location.state === undefined) {
            return
        }
        const { dataUser } = location.state
        const { showOption } = this.state
        switch (showOption) {
            
            case "Edit profil":
                return <EditProfil dataUser={ dataUser } />

            case "List of person":
                return <ListOfPerson dataUser={ dataUser } />
            
            case "List Profil Block":
                return <ListProfilBlock userName={ dataUser.userName } />

            default:
                return null

        }
    }

    render() {
        const { history, location } = this.props
        const { state } = location
        if (state === undefined) {
            history.push("/LoginAccount")
        }
        return (
            <div>
                {
                    optionsArray.map((option) => (
                        <button
                            key={ `option-${option}` }
                            onClick={ () => this.setState({ showOption: option }) }
                        >
                            { option }
                        </button>
                    ))
                }
                {
                    this.choosenOption()
                }
                <Disconnect />
            </div>
        )
    }

}
 
export default Home