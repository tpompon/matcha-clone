const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const nodemailer = require("nodemailer")

const app = express()
const bodyParser = require("body-parser")

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "input305",
	database: "matcha",
})

const sendMail = (mail, text, subject) => {
	let transporter = nodemailer.createTransport({
		service: "gmail",
		secure: false,
		port: 25,
		auth: {
			user: "sylvainboeuf@gmail.com",
			pass: "r84lq27k035",
		},
		tls: {
			rejectUnauthorized: false,
		},
	})
	let helperOptions = {
		from: "sylvainboeuf@gmail.com",
		to: mail,
		subject,
		text,
	}
	transporter.sendMail(helperOptions, (error, info) => {
		if (error) {
			return console.log(error)
		}
		console.log("the message was sent")
		console.log(info)
	})
}

connection.connect(err => {
	if (err) {
		return err
	}
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "50mb" }))

app.get("/", (req, res) => {
	res.send("hello from the products server")
})

app.get("/users", (req, res) => {
	const selectAll = "SELECT * FROM user"
	connection.query(selectAll, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ data: results })
		}
	})
})

app.post("/users/picturesUser", (req, res) => {
	const { userId } = req.body
	const selectPictureUsers = `SELECT * FROM picturesusers WHERE userId='${userId}'`
	connection.query(selectPictureUsers, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ pictures: results })
		}
	})
})

app.post("/users/add", (req, res) => {
	const {
		name, password, email, lastName, firstName, confirmKey,
	} = req.body
	const insertUserIntoBdd = `INSERT INTO user (userName, password, email, lastname, firstname, confirmKey)
		VALUES('${name}', '${password}', '${email}', '${lastName}', '${firstName}', ${confirmKey})`
	connection.query(insertUserIntoBdd, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("added user")
		}
	})
	const text = `This is your ${confirmKey}`
	const subject = "Confirm you key"
	sendMail(email, text, subject)
})

app.post("/users/editProfil/sendPictures", (req, res) => {
	const {
		dataPicture, userId, id, requestId,
	} = req.body
	const sendDataPictureToBdd = (requestId)
		? `UPDATE picturesusers SET id='${id}', picture='${dataPicture}' WHERE id='${id}'`
		: `INSERT INTO picturesusers (userId, picture) VALUES ('${userId}', '${dataPicture}')`
	connection.query(sendDataPictureToBdd, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("picture add")
		}
	})
})

app.post("/users/recorverPassword", (req, res) => {
	const { email, newPassword, newPasswordHash } = req.body
	const text = `This is Your new password: ${newPassword}`
	const subject = "New password"
	sendMail(email, text, subject)
	const updatePassword = `UPDATE user SET password='${newPasswordHash}' WHERE email='${email}'`
	connection.query(updatePassword, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`User is confirmed`)
		}
	})
})

app.post("/users/confirmIdendity", (req, res) => {
	const { key, name } = req.body
	const updateConfirmKeyOk = `UPDATE user SET confirmKeyOk=1 WHERE (userName, confirmKey) IN (('${name}', ${key}))`
	connection.query(updateConfirmKeyOk, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`User is confirmed`)
		}
	})
})

app.post("/users/updateInfosProfil", (req, res) => {
	const {
		id, userName, newPassword, email, firstName, lastName,
	} = req.body
	const updateDataUser = `UPDATE user SET userName='${userName}', password='${newPassword}', email='${email}', firstName='${firstName}', lastName='${lastName}' WHERE id=${id}`
	connection.query(updateDataUser, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`user with ${id} is modified`)
		}
	})
})

app.post("/users/updateInfosPersonal", (req, res) => {
	const {
		orientationOptionChecked, genderOptionChecked, biography, listInterest, id,
	} = req.body
	const updateInfosPersonal = `UPDATE user SET orientationOptionChecked='${orientationOptionChecked}', genderOptionChecked='${genderOptionChecked}', biography='${biography}', listInterest='${listInterest}' WHERE id=${id}`
	connection.query(updateInfosPersonal, (error, result) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`user with ${id} is modified`)
		}
	})
})

app.post("/users/getImageProfil", (req, res) => {
	const { id } = req.body
	const getImageProfil = `SELECT picture from picturesusers WHERE userId=${id} LIMIT 1`
	connection.query(getImageProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ imageProfil: results })
		}
	})
})

app.post("/users/likeOrUnlikeProfil", (req, res) => {
	const { user, profilName, valueLike } = req.body
	const searchLikeProfil = `SELECT * FROM likeuser WHERE (userName, profilName) IN (('${user}', '${profilName}'))`
	connection.query(searchLikeProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			let likeProfil
			if (results.length === 0) {
				likeProfil = `INSERT INTO likeuser (userName, profilName, likeUser) VALUES('${user}', '${profilName}', ${valueLike})`
			} else {
				likeProfil = `UPDATE likeuser SET likeUser=${valueLike} WHERE(userName, profilName) IN (('${user}', '${profilName}'))`
			}
			connection.query(likeProfil, (error, results) => {
				if (error) {
					return res.send(error)
				} else {
					return res.send("modified")
				}
			})
		}
	})
})

app.post("/users/listBlockProfil", (req, res) => {
	const { userName } = req.body
	const listBlock = `SELECT blockProfil from listblockprofil WHERE user='${userName}'`
	connection.query(listBlock, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ blockList: results })
		}
	})
})

app.post("/users/blockProfil", (req, res) => {
	const { userName, profilBlock } = req.body
	const blockProfil = `INSERT INTO listblockprofil (user, blockProfil) VALUES('${userName}', '${profilBlock}')`
	connection.query(blockProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`${profilBlock} is blocked.`)
		}
	})
})

app.post("/users/deblockUser", (req, res) => {
	const { userName, userDeblocked } = req.body
	const deblockProfil = `DELETE FROM listblockprofil WHERE (user, blockProfil) IN (('${userName}', '${userDeblocked}'))`
	connection.query(deblockProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`${userDeblocked} is deblocked`)
		}
	})
})

app.post("/users/profilLikedMe", (req, res) => {
	const { userName, userNameProfil } = req.body
	const profilLikedMe = `SELECT likeUser FROM likeuser WHERE (userName, profilName) IN (('${userName}', '${userNameProfil}'))`
	connection.query(profilLikedMe, (error, results) => {
		console.log(results)
		if (error) {
			return res.send(error)
		} else {
			return res.json({ like: results })
		}
	})
})

app.listen(4000, () => {
	console.log(`Server is launch on port 4000`)
})
