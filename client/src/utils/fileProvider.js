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

const transformArrayInObject = (array) => {
    let dataObject = {}
    array.forEach((data) => {
        dataObject = {
            ...dataObject,
            [data.name]: data.value,
        }
    })
    return dataObject
}

export const getUserProfil = (id) => {
    return fetch("http://localhost:4000/users/getUserProfil", optionsFetch({ id }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const getPicturesUser = (userId) => {
    return fetch(`http://localhost:4000/users/picturesUser`, optionsFetch({ userId }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const addNewUser = (newUser) => {
    const userData = { ...transformArrayInObject(newUser) }
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
    return fetch("http://localhost:4000/users/checkLogin", optionsFetch({ name, hashPassword }))
        .then((response) => response.json())
        .then((responseJson) => responseJson.dataUser[0])
        .catch((error) => console.log(error))
}

export const checkKey = (name, key) => {
    return fetch(`http://localhost:4000/users/confirmIdendity`, optionsFetch({ key, name }))
        .then((response) => response.json())
        .then((responseJson) => { console.log(responseJson);return responseJson })
        .catch((error) => console.log(error))
}

const checkUserAlreadyExist = (dataNewUser) => {
    const { userName, email } = dataNewUser
    return fetch("http://localhost:4000/users/checkUserAlreadyExist", optionsFetch({ userName, email }))
        .then((response) => response.text())
        .then((responseText) => (responseText === "1") ? 1 : 0)
        .catch((error) => console.log(error))
}

export const findEmail = (email) => {
    return fetch("http://localhost:4000/users/findEmail", optionsFetch({ email }))
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.result === true) {
                return 1
            }
            return 0
        })
        .catch((error) => console.log(error))
}

export const recoverPassword = (newPassword, key) => {
    const passwordHash = hash.sha256().update(newPassword).digest("hex")
    fetch(`http://localhost:4000/users/recoverPassword`, optionsFetch({ passwordHash, key }))
}

export const banUser = (username, bantime) => {
    fetch(`http://localhost:4000/users/ban`, optionsFetch({ username, bantime }))
}

export const updateInfosProfil = (id, previousUserName, inputArray) => {
    const infosProfilUser = { id, previousUserName, ...transformArrayInObject(inputArray) }
    const { email, newPassword } = infosProfilUser
    if (!checkEmail(email)) {
        alert("email address is not valid")
    } else if (!checkPassword(newPassword)) {
        alert("Password is not secured.")
    } else {
        infosProfilUser.newPassword = hash.sha256().update(newPassword).digest("hex")
        return fetch("http://localhost:4000/users/updateInfosProfil", optionsFetch(infosProfilUser))
            .then((response) => response.text())
            .then((responseText) => (responseText === "1") ? 1 : 0)
            .catch((error) => console.log(error))
    }
}

export const updateInfosPersonal = (infosPersonal) => {
    fetch("http://localhost:4000/users/updateInfosPersonal", optionsFetch(infosPersonal))
}

export const getImageProfil = (id) => {
    return fetch("http://localhost:4000/users/getImageProfil", optionsFetch({ id }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const likeOrUnkikeUser = (user, profilName, valueLike) => {
    fetch("http://localhost:4000/users/likeOrUnlikeProfil", optionsFetch({ user, profilName, valueLike }))
        .then((response) => response.text())
        .then((responseText) => {
            if (responseText === "match") {
                fetch("http://localhost:4000/users/profilMatch", optionsFetch({ user, profilName }))
                    .then((response) => response.text())
                    .then((res) => {
                        if (+res === 1 && valueLike === 1) {
                            alert("You are already matched with this person")
                        } else if (+res === 1 && valueLike === -1) {
                            fetch("http://localhost:4000/users/deleteMatch", optionsFetch({ user, profilName }))
                        } else {
                            alert(responseText)
                        }
                    })
                    .catch((error) => console.log(error))
            }
        })
        .catch((error) => console.log(error))
}

export const blockList = (userName) => {
    return fetch("http://localhost:4000/users/listBlockProfil", optionsFetch({ userName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const getBlockList = (userName) => {
    return fetch("http://localhost:4000/users/getBlockList", optionsFetch({ userName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const getAllOtherDataOfProfil = (userName, profilName) => {
    return fetch("http://localhost:4000/users/getAllOtherDataOfProfil", optionsFetch({ userName, profilName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const blockProfil = (userName, profilBlock) => {
    return fetch("http://localhost:4000/users/blockProfil", optionsFetch({ userName, profilBlock }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
} 

export const deblockUser = (userName, userDeblocked) => {
    return fetch("http://localhost:4000/users/deblockUser", optionsFetch({ userName, userDeblocked }))
}

export const getListMatch = (userName) => {
    return fetch("http://localhost:4000/users/getListMatch", optionsFetch({ userName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const sendMessage = (from, to, message) => {
    fetch("http://localhost:4000/users/sendMessage", optionsFetch({ from, to, message }))
}

export const getAllMessages = (userName, profilMatchName) => {
    return fetch("http://localhost:4000/users/getAllMessages", optionsFetch({ userName, profilMatchName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => error)
}

export const getNotificationsNoRead = (userName) => {
    return fetch("http://localhost:4000/users/getNotificationsNoRead", optionsFetch({ userName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const updateNotificationsToRead = (userName) => {
    fetch("http://localhost:4000/users/updateNotificationsToRead", optionsFetch({ userName }))
}

export const visitProfil = (userName, profilName) => {
    fetch("http://localhost:4000/users/visitProfil", optionsFetch({ userName, profilName }))
}

export const userIsLog = (userName) => {
    fetch("http://localhost:4000/users/userIsLog", optionsFetch({ userName }))
}

export const userIsDeLog = (userName) => {
    fetch("http://localhost:4000/users/userIsDelog", optionsFetch({ userName }))
}

export const reportingFakeProfil = (profilName) => {
    fetch("http://localhost:4000/users/reportingFakeProfil", optionsFetch({ profilName }))
}

export const getPopularScoreOfProfil = (profilName) => {
    fetch("http://localhost:4000/users/showPopulareScore", optionsFetch({ profilName }))
}

export const setLocation = (userName, dataAddress) => {
    return fetch("http://localhost:4000/users/getUserLocation", optionsFetch({
        userName,
        coords: dataAddress.coords,
        userAddress: dataAddress.address,
    }))
}

export const setNewLocation = (userName, coords, userAddress) => {
    return fetch("http://localhost:4000/users/getUserLocation", optionsFetch({ userName, coords, userAddress }))
}

export const getLocation = () => {
    const geolocation = navigator.geolocation
    const getLocation = new Promise((resolve, reject) => {
        if (!geolocation) {
            console.log("Not supported !")
        }
        geolocation.getCurrentPosition((position) => {
            resolve(position)
        }, () => {
            reject (null)
        })
    })
    return getLocation
}

export const setLocationToNull = (userName) => {
    return fetch("http://localhost:4000/users/setLocationToNull", optionsFetch({ userName }))
}

export const getUserApproximateLocation = (userName) => {
    return fetch("http://localhost:4000/users/getUserApproximateLocation", optionsFetch({ userName }))
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => console.log(error))
}

export const calculDistance = (lat1, lon1, lat2, lon2) => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0
    } else {
        const radLat1 = Math.PI * lat1 / 180
        const radLat2 = Math.PI * lat2 / 180
        const theta = lon1 - lon2
        const radTheta = Math.PI * theta / 180
        let distance = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta)
        if (distance > 1) {
            distance = 1
        }
        distance = Math.acos(distance)
        distance = distance * 180 / Math.PI
        distance = distance * 60 * 1.1515
        distance = distance * 1.609344
        return distance
    }
}

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
