import React, { Component } from 'react'

import { banUser } from "utils/fileProvider"

import Form from "components/Form"

class Admin extends Component {

	constructor(props) {
		super(props)
		this.state = {
			searchUser: "",
			banForm: [
				{ name: "banUser", value: "", placeholder: "Enter username", type: "text" },
				{ name: "banTime", value: "", placeholder: "Days duration", type: "number" }
			]
		}
	}

	onChangeValue = (e, index) => {
		const { banForm } = this.state
		banForm[index].value = e.target.value
		this.setState({ banForm })
	}

	onSearchUserChange = (e) => {
		let { searchUser } = this.state
		searchUser = e.target.value
		this.setState({ searchUser })
	}

	banUser = () => {
		const { banForm } = this.state
		const banTime = (24*60*60) * banForm[1].value
		const timestampUnban = Math.floor(Date.now() / 1000) + banTime

		banUser(banForm[0].value, timestampUnban) 

		console.log(`${banForm[0].value} has been banned for ${banForm[1].value} days (${banTime} seconds)`)
		console.log(`He will be unban after timestamp: ${timestampUnban} / Current timestamp ${Math.floor(Date.now() / 1000)}`)
	}

	findUser = () => {
		const { searchUser } = this.state
		console.log(`Display ${searchUser} informations`)
	}

	render() {
		const { banForm, searchUser } = this.state
		return(
			<div>
				<h1>Admin Panel</h1>
				<Form inputArray={ banForm } onChangeValue={ this.onChangeValue } />
				<button onClick={ () => this.banUser() }>Ban</button>
				<br />
				<input
					type="text"
					placeholder="Enter username"
					value={ searchUser }
					onChange={ (e) => this.onSearchUserChange(e) }
				/>
				<button onClick={ () => this.findUser() }>Find</button>
			</div>
		)
	}
}

export default Admin
