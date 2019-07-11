import React from "react"
import PropTypes from "prop-types"

const styles = {
    input: {},
}

const TextInput = ({
    value, placeholder, onChangeValue, type,
}) => (
    <div>
        <input
            onChange={ onChangeValue }
            style={ styles.input }
            placeholder={ placeholder }
            value={ value }
            type={ type }
        />
    </div>
)

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
}

export default TextInput
