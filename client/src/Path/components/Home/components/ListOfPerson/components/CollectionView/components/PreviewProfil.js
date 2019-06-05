import React, { Component } from "react"

import { getImageProfil } from "utils/fileProvider"

const styles = {
    image: {
        width: 100,
        height: 100,
    },
    noImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        border: "10px dashed red",
    }
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
                if (response.imageProfil.length > 0) {
                    if (response.imageProfil[0].picture.length > 0) {
                        this.setState({ imageProfil: response.imageProfil[0].picture })
                    }
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        const { data, chooseDataPerson } = this.props
        const { userName } = data
        const { imageProfil } = this.state
        return (
            <div>
                {
                    (imageProfil === null)
                        ? (
                            <div onClick={ () => chooseDataPerson(data) }>
                                <div style={ styles.noImage } />
                                <p>{ userName }</p>
                            </div>
                        )
                        : (
                            <div onClick={ () => chooseDataPerson(data) }>
                                <img
                                    style={ styles.image }
                                    src={ process.env.PUBLIC_URL + `/imageProfil/${data.id}/${imageProfil}` }
                                    alt={ `Imageprofil-${userName}` }
                                />
                                <p>{ userName }</p>
                            </div>
                        )
                }
            </div>
        )
    }

}

export default PreviewProfil