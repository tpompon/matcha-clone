import * as types from "constants/actionsTypes"

const initialState = {
    userData: {},
}

const users = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {

        case types.LOG_IN_USER_DATA:
            newState = {
                userData: { ...action.userData },
            }    
            return newState

        default:
            return state

    }
}

export default users