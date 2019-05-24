import React, { Component } from "react"

import ChatWithUser from "./components/ChatWithUser"

import { getListMatch, blockList } from "utils/fileProvider"

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
            .then((list) => {
                blockList(userName)
                    .then((blockListUserName) => {
                        const listMatch = []
                        let userBlock
                        list.listMatch.forEach((name) => {
                            userBlock = 0
                            blockListUserName.forEach((userName) => {
                                if (name === userName) {
                                    userBlock = 1
                                }
                            })
                            if (userBlock === 0) {
                                listMatch.push(name)
                            }
                        })
                        this.setState({ listMatch })
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }

    // Maybe it's useless, i take a decision later
    /*
    newChat = (match) => {
         const { chooseYourMatch } = this.state
         if (match === chooseYourMatch) {
             this.setState({ chooseYourMatch: null })
         } else {
             this.setState({ chooseYourMatch: match })
         }
     }
     */

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