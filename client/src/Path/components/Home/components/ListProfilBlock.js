import React, { Component } from "react"

import { blockList, deblockUser } from "utils/fileProvider"

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
        blockList(userName)
            .then((list) => this.setState({ list }))
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
                        <div key={ `name-${nameProfilBlock}` }>
                            <p>{ nameProfilBlock }</p>
                            <button onClick={ () => this.getNewListBlockProfil(userName, nameProfilBlock) }>Delete of block list</button>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default ListProfilBlock