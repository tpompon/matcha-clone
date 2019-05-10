import * as constants from "constants/actionsTypes"

export const logInUser = (userData) => ({
    type: constants.LOG_IN_USER_DATA, userData,
})