import React from "react"
import PropTypes from "prop-types"

const RadioInput = ({ radioInputArray, onChangeValue, optionChecked }) => (
    <div>
        {
            radioInputArray.map((inputData) => (
                <input
                    key={ `option-${inputData}` }
                    type="radio"
                    value={ inputData }
                    onChange={ onChangeValue }
                    checked={ optionChecked === inputData }
                />
            ))
        }
    </div>
)

RadioInput.propTypes = {
    radioInputArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onChangeValue: PropTypes.func.isRequired,
    optionChecked: PropTypes.string.isRequired,
}

export default RadioInput