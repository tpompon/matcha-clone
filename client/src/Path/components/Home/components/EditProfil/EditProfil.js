import React from "react"
//import PropTypes from "prop-types"

import InfosProfil from "./components/InfosProfil"
import InfosPersonal from "./components/InfosPersonal"

const EditProfil = ({ dataUser, updateDataUser }) => (
    <div>
        <InfosProfil
            infosUser={ dataUser }
            updateDataUser={ updateDataUser }
        />
        <InfosPersonal
            infosUser={ dataUser }
            updateDataUser={ updateDataUser }
        />
    </div>
)

EditProfil.propTypes = {
    //dataUser: PropTypes.objectOf().isRequired,
}

export default EditProfil