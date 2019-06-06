const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const nodemailer = require("nodemailer")
const fs = require("fs")

const app = express()
const bodyParser = require("body-parser")

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "input305",
	database: "matcha",
	multipleStatements: true,
})

fs.existsSync("../client/public/imageProfil") || fs.mkdirSync("../client/public/imageProfil", 0777)

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

const saveImage = (dataPicture, userId, namePicture) => {
	const pathDir = `../client/public/imageProfil/${userId}`
	fs.existsSync(pathDir, 0777) || fs.mkdirSync(pathDir, 0777)
	if (fs.existsSync(`${pathDir}/${namePicture}`)) {
		console.log("soon")
	} else {
		fs.writeFile(`${pathDir}/${namePicture}`, Buffer.from(dataPicture.split(",")[1], "base64"), (error) => {
			if (error) {
				throw (error)
			}
			console.log("save")
		})
	}
}

const addNotification = (to, message) => {
	const sqlInsertNotification =  `INSERT INTO notifications (notificationUser, notificationType, date) VALUES ('${to}', '${message.replace(/'/g, "\\'")}', NOW())`
	return sqlInsertNotification
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
	const selectAllProfil = `SELECT p.*, u.biography, u.gender, u.orientation, u.listInterest FROM profil p INNER JOIN userinfos u ON p.userName=u.userName`
	connection.query(selectAllProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ data: results })
		}
	})
})

app.post("/users/checkLogin", (req, res) => {
	const { name, hashPassword } = req.body
	const checkLogin = `SELECT * FROM profil WHERE (userName, password, confirmKeyOk) IN (('${name}', '${hashPassword}', 1))`
	connection.query(checkLogin, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ dataUser: results })
		}
	})
})

app.post("/users/getUserProfil", (req, res) => {
	const { id } = req.body
	const selectDataProfil = `SELECT p.*, u.biography, u.gender, u.orientation, u.listInterest FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.id='${id}'`
	connection.query(selectDataProfil, (error, results) => {
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
	let insertUserIntoBdd = `INSERT INTO profil (userName, password, email, lastname, firstname, confirmKey)
		VALUES('${name}', '${password}', '${email}', '${lastName}', '${firstName}', ${confirmKey});`
	insertUserIntoBdd += `INSERT INTO userinfos (userName) VALUES ('${name}')`
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

app.post("/users/checkUserAlreadyExist", (req, res) => {
	const { userName, email } = req.body
	const checkUserAlreadyExist = `SELECT * FROM profil WHERE userName='${userName}' OR email='${email}'`
	connection.query(checkUserAlreadyExist, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			if (results.length > 0) {
				return res.send("1")
			}  else {
				return res.send("0")
			}
		}
	})
})

app.post("/users/editProfil/sendPictures", (req, res) => {
	const {
		dataPicture, userId, id, requestId, namePicture,
	} = req.body
	saveImage(dataPicture, userId, namePicture)
	const sendDataPictureToBdd = (requestId)
		? `UPDATE picturesusers SET id='${id}', picture='${namePicture}' WHERE id='${id}'`
		: `INSERT INTO picturesusers (userId, picture) VALUES ('${userId}', '${namePicture}')`
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
	const updatePassword = `UPDATE profil SET password='${newPasswordHash}' WHERE email='${email}'`
	connection.query(updatePassword, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`profil is confirmed`)
		}
	})
})

app.post("/users/confirmIdendity", (req, res) => {
	const { key, name } = req.body
	const checkKey = `SELECT * FROM profil WHERE (userName, confirmKey) IN (('${name}', ${key}))`
	connection.query(checkKey, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			if (results.length > 0) {
				const updateConfirmKeyOk = `UPDATE profil SET confirmKeyOk=1 WHERE (userName, confirmKey) IN (('${name}', ${key}))`
				connection.query(updateConfirmKeyOk, (error, results) => {
					if (error) {
						return res.send(error)
					} else {
						return res.send("1")
					}
				})
			} else {
				return res.send("0")
			}
		}
	})
})

app.post("/users/updateInfosProfil", (req, res) => {
	const {
		id, userName, newPassword, email, firstName, lastName, previousUserName,
	} = req.body
	const checkIfUserAlreadyExist = `SELECT * FROM profil WHERE id <> ${id} AND (userName='${userName}' OR email='${email}')`
	connection.query(checkIfUserAlreadyExist, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			if (results.length > 0) {
				return res.send("0")
			} else {
				let updateDataUser = `UPDATE profil SET userName='${userName}', password='${newPassword}', email='${email}', firstName='${firstName}', lastName='${lastName}' WHERE id=${id};`
				updateDataUser += `UPDATE userinfos SET userName='${userName}' WHERE userName='${previousUserName}';`
				updateDataUser += `UPDATE profilmatch SET firstPerson='${userName}' WHERE firstPerson='${previousUserName}';`
				updateDataUser += `UPDATE profilmatch SET secondPerson='${userName}' WHERE secondPerson='${previousUserName}';`
				updateDataUser += `UPDATE notifications SET notificationUser='${userName}' WHERE notificationUser='${previousUserName}';`
				updateDataUser += `UPDATE messages SET fromUser='${userName}' WHERE fromUser='${previousUserName}';`
				updateDataUser += `UPDATE messages SET toUser='${userName}' WHERE toUser='${previousUserName}';`
				updateDataUser += `UPDATE listblockprofil SET user='${userName}' WHERE user='${previousUserName}';`
				updateDataUser += `UPDATE likeuser SET userName='${userName}' WHERE userName='${previousUserName}';`
				updateDataUser += `UPDATE likeuser SET profilName='${userName}' WHERE profilName='${previousUserName}';`
				updateDataUser += `UPDATE inlineUser SET user='${userName}' WHERE user='${previousUserName}';`
				updateDataUser += `UPDATE fakeuser SET fakeUser='${userName}' WHERE fakeUser='${previousUserName}';`
				connection.query(updateDataUser, (error, results) => {
					if (error) {
						return res.send(error)
					} else {
						return res.send("1")
					}
				})
			}
		}
	})
})

app.post("/users/updateInfosPersonal", (req, res) => {
	const {
		orientation, gender, biography, listInterest, userName,
	} = req.body
	const updateUserInfos = `UPDATE userinfos SET orientation='${orientation}', gender='${gender}', biography='${biography}', listInterest='${listInterest}' WHERE userName='${userName}'`
	connection.query(updateUserInfos, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`${userName} personal infos is modified`)
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
			const textNotification = (valueLike === 1) ? `${user} send you a like` : `${user} send you a unlike`
			if (results.length === 0) {
				likeProfil = `INSERT INTO likeuser (userName, profilName, likeUser) VALUES('${user}', '${profilName}', ${valueLike});`
			} else {
				likeProfil = `UPDATE likeuser SET likeUser=${valueLike} WHERE(userName, profilName) IN (('${user}', '${profilName}'));`
			}
			likeProfil += addNotification(profilName, textNotification)
			connection.query(likeProfil, (error, results) => {
				if (error) {
					return res.send(error)
				} else {
					const matchOrNot = `SELECT likeUser FROM likeuser WHERE (userName, profilName) IN (('${profilName}', '${user}'))`
					connection.query(matchOrNot, (error, results) => {
						if (error) {
							return res.send(error)
						} else {
							if (results.length > 0 && results[0].likeUser === 1 && valueLike === 1) {
								return res.send("It's a match")
							} else {
								return res.send("unlike")
							}
						}
					})
				}
			})
		}
	})
})

app.post("/users/profilmatch", (req, res) => {
	const { user, profilName } = req.body
	const verifyIfMatchExist = `SELECT CONCAT(firstPerson, " ", secondPerson) AS name FROM profilMatch WHERE firstPerson='${user}' OR secondPerson='${user}'`
	connection.query(verifyIfMatchExist, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			let matchAlreadyExist = 0
			results.forEach((name) => {
				let check = name.name.split(" ")
				if ((user === check[0] || user === check[1])
					&& (profilName === check[0] || profilName === check[1])) {
						matchAlreadyExist = 1
					}
			})
			if (matchAlreadyExist === 1)  {
				return res.send("1")
			} else {
				let isAMatch = `INSERT INTO profilmatch (firstPerson, secondPerson) VALUES ('${user}', '${profilName}');`
				isAMatch += addNotification(profilName, `${user} send you a like and you're like him before so this is a match`)
				connection.query(isAMatch, (error, results) => {
					if (error) {
						return res.send(error)
					} else {
						return res.send("0")
					}
				})
			}
		}
	})
})

app.post("/users/deleteMatch", (req, res) => {
	const { user, profilName } = req.body
	let deleteMatch = `DELETE FROM profilmatch WHERE (firstPerson='${user}' AND secondPerson='${profilName}') OR (firstPerson='${profilName}' AND secondPerson='${user}');`
	deleteMatch += addNotification(profilName, `${user} doesn't like you anymore`)
	connection.query(deleteMatch, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("match delete")
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

app.post("/users/getAllOtherDataOfProfil", (req, res) => {
	const { userName, profilName } = req.body
	let sql = `SELECT p.*, u.biography, u.gender, u.orientation, u.listInterest FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.userName='${profilName}';`
	sql += `SELECT likeUser FROM likeuser WHERE (userName, profilName) IN (('${profilName}', '${userName}'));`
	sql += `SELECT fakeUser FROM fakeuser WHERE fakeUser='${profilName}';`
	sql += `SELECT inline, DATE_FORMAT(date, "%m-%d-%y %H:%i:%s") as date FROM inlineuser WHERE user='${profilName}'`
	connection.query(sql, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			let otherData = {}
			results.forEach((data) => {
				Object.entries(data).forEach((entry) => {
					Object.entries(entry[1]).forEach((entry) => {
						otherData = {
							...otherData,
							[entry[0]]: entry[1],
						}
					})
				})
			})
			return res.json({ otherData })
		}
	})
})

app.post("/users/getListMatch", (req, res) => {
	const { userName } = req.body
	const getList = `SELECT CONCAT(firstPerson, secondPerson) AS name FROM profilmatch WHERE firstPerson='${userName}' OR secondPerson='${userName}'`
	connection.query(getList, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			const getListMatch = []
			results.forEach((name) => {
				getListMatch.push(name.name.replace(userName, ""))
			})
			return res.json({ listMatch: getListMatch })
		}
	})
})

app.post("/users/sendMessage", (req, res) => {
	const { from, to, message } = req.body
	const textNotification = `You are new message from ${from}`
	let saveMessage = `INSERT INTO messages (fromUser, toUser, message, date) VALUES('${from}', '${to}', '${message.replace(/'/g, "\\'")}', NOW());`
	saveMessage += addNotification(to, textNotification)
	connection.query(saveMessage, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`Message send to ${to}`)
		}
	})
})

app.post("/users/getAllMessages", (req, res) => {
	const { userName, profilMatchName } = req.body
	const getAllMessages = `SELECT *, DATE_FORMAT(date, "%m-%d-%y %H:%i:%s") as date FROM messages WHERE (fromUser='${userName}' OR fromUser='${profilMatchName}') AND (toUser='${userName}' OR toUser='${profilMatchName}')`
	connection.query(getAllMessages, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ results })
		}
	})
})

app.post("/users/getNotificationsNoRead", (req, res) => {
	const { userName } = req.body
	const getNotificationsNoRead = `SELECT id, notificationType FROM notifications WHERE notificationUser='${userName}' AND notificationRead=0`
	connection.query(getNotificationsNoRead, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ notifications: results })
		}
	})
})

app.post("/users/updateNotificationsToRead", (req, res) => {
	const { userName } = req.body
	const updateNotificationsToRead = `UPDATE notifications SET notificationRead=1 WHERE notificationUser='${userName}' AND notificationRead=0`
	connection.query(updateNotificationsToRead, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("Notifications read")
		}
	})
})

app.post("/users/visitProfil", (req, res) => {
	const { userName, profilName } = req.body
	const visitNotification = addNotification(profilName, `${userName} visit you're profil`)
	connection.query(visitNotification, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("send notification")
		}
	})
})

app.post("/users/userIsLog", (req, res) => {
	const { userName } = req.body
	const setUserIsLog = `UPDATE inlineuser SET inline=1 WHERE user='${userName}'`
	connection.query(setUserIsLog, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`${userName} is log`)
		}
	})
})

app.post("/users/userIsDelog", (req, res) => {
	const { userName } = req.body
	const setUserIsDelog = `UPDATE inlineuser SET inline=0, date=NOW() WHERE user='${userName}'`
	connection.query(setUserIsDelog, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send(`${userName} is delog`)
		}
	})
})

app.post("/users/reportingFakeProfil", (req, res) => {
	const { profilName } = req.body
	const reportingFakeProfil = `INSERT INTO fakeuser (fakeUser) VALUES ('${profilName}')`
	connection.query(reportingFakeProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("Reporting fake user")
		}
	})
})

const populareScore = (profilName) => {
	let selectScore = `SELECT userName FROM profil;`
	selectScore += `SELECT likeUser FROM likeuser WHERE profilName='${profilName}' AND likeUser=1`
	connection.query(selectScore, (error, results) => {
		if (error) {
			return 
		} else {
			const score = (results[1].length / results[0].length) * 100
			return score
		}
	})
}

app.listen(4000, () => {
	console.log(`Server is launch on port 4000`)
})
