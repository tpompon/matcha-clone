import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

import ChatWithUser from "./components/ChatWithUser"

import { getListMatch } from "utils/fileProvider"

class Messages extends Component {

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
            <Container fluid style={{width: "80%"}}>
                <Row>
                    <Col md="3">
                        <div style={ { borderBottom: "1px solid gray" } } >
                            {
                                listMatch.map((match) => (
                                    <button
                                        a={console.log(match)}
                                        key={ `match-${match}` }
                                        onClick={ () => this.setState({ profilYourMatch: match }) }
                                    >
                                        { match }
                                    </button>
                                ))
                            }
                        </div>
                    </Col>
                    <Col md="8">
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
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Messages
