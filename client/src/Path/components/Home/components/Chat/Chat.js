import React, { Component } from "react"

import ChatWithUser from "./components/ChatWithUser"

import { getListMatch } from "utils/fileProvider"

class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listMatch: null,
            profilYourMatch: null,
        }
    }

    componentWillMount() {
        const { userName } = this.props
        getListMatch(userName)
            .then((list) => this.setState({ listMatch: list.listMatch }))
            .catch((error) => console.log(error))
    }

    render() {
        const { userName } = this.props
        const { listMatch, profilYourMatch } = this.state
        if (listMatch === null) {
            return <div />
        }
        return (
            <div>
                <div>
                    {
                        listMatch.map((match) => (
                            <button
                                key={ `match-${match}` }
                                onClick={ () => this.setState({ profilYourMatch: match }) }
                            >
                                { match }
                            </button>
                        ))
                    }
                </div>
                {
                    (profilYourMatch !== null)
                        ? (
                            <ChatWithUser
                                userName={ userName }
                                profilMatchName={ profilYourMatch }
                            />
                        )
                        : null
                }
            </div>
        )
    }

}

export default Chat