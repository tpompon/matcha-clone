import React, { Component } from "react"

import { deblockUser, getBlockList } from "utils/fileProvider"

class ListProfilBlock extends Component {

    constructor(props) {
        super(props)
        this.state = { list: null }
    }

    componentWillMount() {
        this.getListBlockProfil()
    }

    getListBlockProfil = () => {
        const { userName } = this.props
        getBlockList(userName)
            .then((response) => this.setState({ list: response.blockList }))
            .catch((error) => console.log(error))
    }

    getNewListBlockProfil = (userName, nameProfilBlock) => {
        deblockUser(userName, nameProfilBlock)
            .then(() => this.getListBlockProfil())
            .catch((error) => console.log(error))
    }

    render() {
        const { userName } = this.props
        const { list } = this.state
        if (list === null) {
            return <div />
        }
        return (
            <div>
                {
                    list.map((nameProfilBlock) => (
                        <div key={ `name-${nameProfilBlock.blockProfil}` }>
                            <p>{ nameProfilBlock.blockProfil }</p>
                            <button onClick={ () => this.getNewListBlockProfil(userName, nameProfilBlock.blockProfil) }>Delete of block list</button>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default ListProfilBlock