import React from "react"
//import PropTypes from "prop-types"

import InfosProfil from "./components/InfosProfil"
import InfosPersonal from "./components/InfosPersonal"

const EditProfil = ({ dataUser }) => (
    <div>
        <InfosProfil
            infosUser={ dataUser }
        />
        <InfosPersonal
            infosUser={ dataUser }
        />
    </div>
)

EditProfil.propTypes = {
    //dataUser: PropTypes.objectOf().isRequired,
}

export default EditProfil