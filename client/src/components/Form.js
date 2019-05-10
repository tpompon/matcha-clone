import React from "react"
import PropTypes from "prop-types"

import TextInput from "components/TextInput"

const Form = ({ inputArray, onChangeValue }) => (
    <div>
        {
            inputArray.map((inputData, index) => (
                <TextInput
                    key={ `input-${inputData.name}` }
                    value={ inputData.value }
                    placeholder={ inputData.placeholder }
                    type={ inputData.type }
                    onChangeValue={ (e) => onChangeValue(e, index) }
                />
            ))
        }
    </div>
)

Form.propTypes = {
    inputArray: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    onChangeValue: PropTypes.func.isRequired,
}

export default Form