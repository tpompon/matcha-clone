import React, { Component } from "react"

import { getImageProfil } from "utils/fileProvider"

const styles = {
    image: {
        width: 100,
        height: 100,
    },
}

class PreviewProfil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageProfil: null,
        }
    }

    componentWillMount() {
        const { id } = this.props.data
        getImageProfil(id)
            .then((response) => {
                if (response.imageProfil[0].picture.length > 0) {
                    this.setState({ imageProfil: response.imageProfil[0].picture })
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        const { data, chooseDataPerson } = this.props
        const { userName } = data
        const { imageProfil } = this.state
        if (imageProfil === null) {
            return <div />
        }
        return (
            <div onClick={ () => chooseDataPerson(data) }>
                <img
                    style={ styles.image }
                    src={ imageProfil}
                    alt={ `Imageprofil-${userName}` }
                />
                <p>{ userName }</p>
            </div>
        )
    }

}

export default PreviewProfil