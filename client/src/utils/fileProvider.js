import hash from "hash.js"

import { checkEmail, checkPassword } from "utils/utils"

const optionsFetch = (dataBody) => {
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(dataBody),
    }
    return options
}

export const getUsers = () => {
    return fetch("http://localhost:4000/users")
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => {
            console.log(error)
        })
}

export const getPicturesUser = (userId) => {
    return fetch(`http://localhost:4000/users/picturesUser`, optionsFetch({ userId }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const addNewUser = (newUser) => {
    let userData = {}
    newUser.forEach((inputData) => {
        userData = {
            ...userData,
            [inputData.name]: inputData.value,
        }
    })
    return checkUserAlreadyExist(userData)
        .then((userExist) => {
            if (userExist === 0) {
                if (!checkEmail(userData.email)) {
                    alert("L'adresse email est invalide !!!")
                } else if (!checkPassword(userData.password)) {
                    alert("Le mot de passe n'est pas assez securise")
                } else {
                    const confirmKey = Math.floor(Math.random() * 10000000000000)
                    const hashPassword = hash.sha256().update(userData.password).digest("hex")
                    fetch(`http://localhost:4000/users/add`, optionsFetch({
                        name: userData.userName,
                        password: hashPassword,
                        email: userData.email,
                        lastName: userData.lastName,
                        firstName: userData.firstName,
                        confirmKey,
                    }))
                    return { ...userData, confirmKey }
                }
            } else {
                alert("Le nom ou l'adresse email est déjà utilisé")
            }
            return 0
        })
}

export const checkLogIn = (inputArray) => {
    const name = inputArray[0].value
    const password = inputArray[1].value
    const hashPassword = hash.sha256().update(password).digest("hex")
    return getUsers()
        .then((listUsers) => {
            let logUser = 0
            listUsers.data.forEach((dataUser) => {
                if (dataUser.userName === name && dataUser.password === hashPassword && dataUser.confirmKeyOk === 1) {
                    logUser = dataUser
                }
            })
            return logUser
        })
        .catch((error) => console.log(error))
}

export const checkKey = (name, key) => {
    return getUsers()
        .then((listUsers) => {
            let keyExist = 0
            listUsers.data.forEach((dataUser) => {
                if (dataUser.userName === name && dataUser.confirmKey === key) {
                    fetch(`http://localhost:4000/users/confirmIdendity`, optionsFetch({ key, name }))
                    keyExist = 1
                }
            })
            return keyExist
        })
        .catch((error) => console.log(error))
}

const checkUserAlreadyExist = (dataNewUser) => {
    const { userName, email } = dataNewUser
    return getUsers()
        .then((listUsers) => {
            let userAlreadyExist = 0
            if (listUsers.data !== undefined) {
                listUsers.data.forEach((dataUser) => {
                    if (dataUser.userName === userName || dataUser.email === email) {
                        userAlreadyExist = 1
                    }
                })
            }
            return userAlreadyExist
        })
        .catch((error) => console.log(error))
}

export const recorverPassword = (email) => {
    const newPassword = Math.floor(Math.random() * 1000000)
    const newPasswordHash = hash.sha256().update(newPassword.toString()).digest("hex")
    fetch(`http://localhost:4000/users/recorverPassword`, optionsFetch({
        email, newPassword, newPasswordHash,
    }))
}

export const saveInfosProfil = (id, inputArray) => {
    let infosProfilUser = { id }
        inputArray.forEach((data) => {
            infosProfilUser = {
                ...infosProfilUser,
                [data.name]: data.value,
            }
        })
    getUsers()
        .then((listUsers) => {
            let userNameAlreadyExist = 0
            let emailAlreadyExist = 0
            if (listUsers.data !== undefined) {
                const { userName, email, newPassword } = infosProfilUser
                listUsers.data.forEach((dataUser) => {
                    if (dataUser.userName === userName) {
                        if (infosProfilUser.userName === userName) {
                            userNameAlreadyExist = 0
                        } else {
                            userNameAlreadyExist = 1
                        }
                    }
                    if (dataUser.email === email) {
                        if (infosProfilUser.email === email) {
                            emailAlreadyExist = 0
                        } else {
                            emailAlreadyExist = 1
                        }
                    }
                })
                if (userNameAlreadyExist === 1) {
                    alert("UserName is already exist")
                } else if (emailAlreadyExist === 1) {
                    alert("Email is already exist")
                } else if (!checkEmail(email)) {
                    alert("email address is not valid")
                } else if (!checkPassword(newPassword)) {
                    alert("Password is not secured.")
                } else {
                    infosProfilUser.newPassword = hash.sha256().update(newPassword).digest("hex")
                    fetch("http://localhost:4000/users/updateInfosProfil", optionsFetch(infosProfilUser))
                }
            }
        })
        .catch((error) => console.log(error))
}

export const saveInfosPersonal = (infosPersonal) => {
    console.log(infosPersonal)
    fetch("http://localhost:4000/users/updateInfosPersonal", optionsFetch(infosPersonal))
}

export const getImageProfil = (id) => {
    return fetch("http://localhost:4000/users/getImageProfil", optionsFetch({ id }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

// it's like a htmlspecialchar function in php
/*
const escapeHtml = (text) => {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
*/