import React, { Component } from "react"

import CollectionView from "./components/CollectionView"
import InfosPerson from "./components/InfosPerson"

const styles = {
    container: {
        display: "flex",
    },
    infosPerson: {
        width: "70%",
    },
    collectionView: {
        width: "30%",
    },
}

class ListOfPerson extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataPerson: null,
        }
    }

    chooseDataPerson = (dataPerson) => {
        this.setState({ dataPerson })
    }

    render() {
        const { dataUser } = this.props
        const { dataPerson } = this.state
        return (
            <div style={ styles.container }>
                <div style={ styles.infosPerson }>
                    <InfosPerson dataPerson={ dataPerson } />
                </div>
                <div style={ styles.collectionView }>
                    <CollectionView
                        dataUser={ dataUser }
                        chooseDataPerson={ this.chooseDataPerson }
                    />
                </div>
            </div>
        )
    }

}

export default ListOfPerson