const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const nodemailer = require("nodemailer")
const fs = require("fs")

const app = express()
const bodyParser = require("body-parser")
const ipInfo = require("ipinfo")
const cities = require("all-the-cities")

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	port: 3307,
	password: "tpompon",
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
		from: '"Fred Foo 👻" <foo@example.com>',
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

const addNotification = (from, to, message) => {
	const sqlInsertNotification =  `INSERT INTO notifications (notificationUser, notificationType, date) SELECT '${to}', '${message.replace(/'/g, "\\'")}', NOW() FROM userinfos WHERE NOT EXISTS (SELECT user FROM listblockprofil WHERE user='${to}' AND blockProfil='${from}') LIMIT 1`
	return sqlInsertNotification
}

const uniqueId = () => {
	return `${Date.now()}${Math.floor(Math.random() * 10000)}`
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
	const checkLogin = `SELECT p.* FROM profil p INNER JOIN inlineuser i ON p.userName=i.user WHERE (userName, password, confirmKeyOk) IN (('${name}', '${hashPassword}', 1))`
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
	const selectDataProfil = `SELECT p.*, u.age, u.biography, u.listInterest, u.gender, u.orientation, u.userLocation, u.userAddress, u.userApproximateLocation, u.userApproximateCity, u.populareScore FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.id='${id}'`
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
	insertUserIntoBdd += `INSERT INTO userinfos (userName, gender, orientation) VALUES ('${name}', 'Male', 'Bisexuelle')`
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

app.post("/users/findEmail", (req, res) => {
	const { email } = req.body
	const findEmail = `SELECT email from profil WHERE email='${email}'`
	connection.query(findEmail, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			if (results.length > 0) {
				const key = uniqueId()
				const text = `This is your key: ${key}`
				const subject = "Key to reset your password"
				const setKeyResetPassword = `UPDATE profil SET keyResetPassword='${key}' WHERE email='${email}'`
				connection.query(setKeyResetPassword, (error, results) => {
					if (error) {
						return res.send(error)
					} else {
						sendMail(email, text, subject)
						return res.json({ "result": true })
					}
				})
			} else {
				return res.json({ "result": false })
			}
		}
	})
})

app.post("/users/recoverPassword", (req, res) => {
	const { passwordHash, key } = req.body
	const updatePassword = `UPDATE profil SET password='${passwordHash}' WHERE keyResetPassword='${key}'`
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
				let updateConfirmKeyOk = `UPDATE profil SET confirmKeyOk=1 WHERE (userName, confirmKey) IN (('${name}', ${key}));`
				updateConfirmKeyOk += `INSERT INTO inlineuser (user, inline, date) VALUES ('${name}', 1, NOW());`
				updateConfirmKeyOk += `SELECT p.*, u.age, u.biography, u.gender, u.orientation, u.listInterest, u.userAddress, u.populareScore FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.userName='${name}'`
				connection.query(updateConfirmKeyOk, (error, results) => {
					if (error) {
						return res.send(error)
					} else {
						return res.json({ dataUser: results[2][0] })
					}
				})
			} else {
				return res.json({ results: false })
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
		age, orientation, gender, biography, listInterest, userName,
	} = req.body
	const text = (biography === null) ? "" : biography
	const interest = (listInterest === null) ? "" : listInterest
	const updateUserInfos = `UPDATE userinfos SET age=${age}, orientation='${orientation}', gender='${gender}', biography='${text.replace(/'/g, "\\'")}', listInterest='${interest}' WHERE userName='${userName}'`
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
			likeProfil += addNotification(user, profilName, textNotification)
			connection.query(likeProfil, (error, results) => {
				if (error) {
					return res.send(error)
				} else {
					const matchOrNot = `SELECT likeUser FROM likeuser WHERE (userName, profilName) IN (('${profilName}', '${user}'))`
					connection.query(matchOrNot, (error, results) => {
						if (error) {
							return res.send(error)
						} else {
							populareScore(profilName, valueLike)
							if (results.length > 0 && results[0].likeUser === 1) {
								return res.send("match")
							} else {
								return res.send("like")
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
				isAMatch += addNotification(user, profilName, `${user} send you a like and you're like him before so this is a match`)
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
	deleteMatch += addNotification(user, profilName, `${user} doesn't like you anymore`)
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
	const listBlock = `SELECT p.*, u.age, u.biography, u.gender, u.orientation, u.listInterest, u.userAddress, u.userLocation, u.userApproximateLocation, u.populareScore FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.userName NOT IN (SELECT blockProfil FROM listblockprofil WHERE user='${userName}') AND p.userName<>'${userName}'`
	connection.query(listBlock, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ blockList: results })
		}
	})
})

app.post("/users/getBlockList", (req, res) => {
	const { userName } = req.body
	const getBlockList = `SELECT blockProfil FROM listblockprofil WHERE user='${userName}'`
	connection.query(getBlockList, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ blockList: results })
		}
	})
})

app.post("/users/blockProfil", (req, res) => {
	const { userName, profilBlock } = req.body
	let blockProfil = `INSERT INTO listblockprofil (user, blockProfil) VALUES('${userName}', '${profilBlock}');`
	blockProfil += `DELETE FROM profilmatch WHERE (firstPerson='${userName}' AND secondPerson='${profilBlock}') OR (firstPerson='${profilBlock}' AND secondPerson='${userName}');`
	blockProfil += `SELECT p.*, u.age, u.biography, u.gender, u.orientation, u.listInterest, u.userAddress, u.userLocation, u.userApproximateLocation, u.populareScore FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.userName NOT IN (SELECT blockProfil FROM listblockprofil WHERE user='${userName}') AND p.userName<>'${userName}';`
	blockProfil += `DELETE FROM likeuser WHERE userName='${userName}' AND profilName='${profilBlock}'`
	connection.query(blockProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.json({ blockList: results[2] })
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
	let sql = `SELECT p.*, u.age, u.biography, u.gender, u.orientation, u.listInterest, u.userAddress, u.populareScore FROM profil p INNER JOIN userinfos u ON p.userName=u.userName WHERE p.userName='${profilName}';`
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
	let getList = `SELECT CONCAT(firstPerson, secondPerson) AS name, id FROM profilmatch WHERE firstPerson='${userName}' OR secondPerson='${userName}';`
	getList += `SELECT blockProfil FROM listblockprofil WHERE user='${userName}'`
	connection.query(getList, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			const getListMatch = []
			results[0].forEach((name) => {
				console.log(name.id)
				const profil = name.name.replace(userName, "")
				let block = 0
				results[1].forEach((blockUser) => {
					if (blockUser.blockProfil === profil) {
						block = 1
					}
				})
				if (block === 0) {
					getListMatch.push(profil)
				}
			})
			return res.json({ listMatch: getListMatch })
		}
	})
})

app.post("/users/sendMessage", (req, res) => {
	const { from, to, message } = req.body
	const textNotification = `You are new message from ${from}`
	let saveMessage = `INSERT INTO messages (fromUser, toUser, message, date) VALUES('${from}', '${to}', '${message.replace(/'/g, "\\'")}', NOW());`
	saveMessage += addNotification(from, to, textNotification)
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
	const getNotificationsNoRead = `SELECT id, notificationType FROM notifications WHERE notificationUser='${userName}' AND notificationRead=0 ORDER BY id DESC`
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
	const visitNotification = addNotification(userName, profilName, `${userName} visit you're profil`)
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
	const reportingFakeProfil = `INSERT INTO fakeuser (fakeUser) SELECT '${profilName}' FROM profil WHERE NOT EXISTS (SELECT fakeUser FROM fakeuser WHERE fakeUser='${profilName}') LIMIT 1`
	connection.query(reportingFakeProfil, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("Reporting fake user")
		}
	})
})

app.post("/users/getUserLocation", (req, res) => {
	const { coords, userName, userAddress } = req.body
	const insertLocation = `UPDATE userinfos SET userLocation='${coords}', userAddress="${userAddress}" WHERE userName='${userName}'`
	connection.query(insertLocation, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("insert location success")
		}
	})
})

app.post("/users/getUserApproximateLocation", (req, res) => {
	const { userName } = req.body
	ipInfo((error, cLoc) => {
		if (error) {
			return error
		} else {
			const city = cities.filter(city => {
				if (city.name === cLoc.city && city.country === cLoc.country) {
					return city.name.match(cLoc.city)
				}
			})
			const insertApproximateLocation = `UPDATE userinfos SET userApproximateLocation='${city[0].lat}, ${city[0].lon}', userApproximateCity='${city[0].name}' WHERE userName='${userName}'`
			connection.query(insertApproximateLocation, (error, results) => {
				if (error) {
					return res.send(error)
				} else {
					return res.json({ approximateLocation: `${city[0].lat}, ${city[0].lon}`, userApproximateCity: `${city[0].name}` })
				}
			})
		}
	})
})

app.post("/users/setLocationToNull", (req, res) => {
	const { userName } = req.body
	const setLocationToNull = `UPDATE userinfos SET userLocation=NULL, userAddress=NULL WHERE userName='${userName}'`
	connection.query(setLocationToNull, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			return res.send("set location to null")
		}
	})
})

app.post("/users/populareScore", (req, res) => {
	const { profilName } = req.body
	const selectScore = `SELECT likeUser FROM likeuser WHERE profilName='${profilName}'`
	connection.query(selectScore, (error, results) => {
		if (error) {
			return res.send(error)
		} else {
			const valueLike = (1 / results.length) * 100
			let populareScore = 0
			results.forEach((like) => {
				if (like.likeUser === 1) {
					populareScore += valueLike
				} else {
					populareScore -= valueLike
				}
			})
			return res.json({ populareScore })
		}
	})
})

const populareScore = (profilName, like) => {
	const selectScore = `SELECT likeUser FROM likeuser WHERE profilName='${profilName}'`
	connection.query(selectScore, (error, results) => {
		if (error) {
			return
		} else {
			const valueLike = (1 / results.length) * 100
			let populareScore = 0
			results.forEach((like) => {
				if (like.likeUser === 1) {
					populareScore += valueLike
				} else {
					populareScore -= valueLike
				}
			})
			const insertPopulareScore = `UPDATE userinfos SET populareScore=${populareScore} WHERE userName='${profilName}';`
			connection.query(insertPopulareScore, (error, results) => {
				if (error) {
					return false
				} else {
					return true
				}
			})
		}
	})
}

app.listen(4000, () => {
	console.log(`Server is launch on port 4000`)
})
