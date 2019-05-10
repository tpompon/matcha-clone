import React from "react"

import Images from "./components/Images"
import DataProfil from "./components/DataProfil"
import DataPersonal from "./components/DataPersonal"

const InfosPerson = ({ dataPerson }) => {
    if (dataPerson === null) {
        return <div />
    }
    const {
        id, userName, email, lastName, firstName, biography, listInterest, genderOptionChecked, orientationOptionChecked,
    } = dataPerson
    const dataProfil = { userName, email, lastName, firstName }
    const dataPersonal = { biography, listInterest, genderOptionChecked, orientationOptionChecked }
    return (
        <div>
            <Images id={ id } />
            <DataProfil dataProfil={ dataProfil } />
            <DataPersonal dataPersonal={ dataPersonal } />
        </div>
    )
}

export default InfosPerson