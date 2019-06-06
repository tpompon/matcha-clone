import React, { Component } from "react"

import ResultsJson from "./ResultsJson"

const RESULT_TAB = "RESULT_TAB"
const MAP_TAB = "MAP_TAB"
const JSON_TAB = "JSON_TAB"

class GeocodingResults extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: JSON_TAB }
    }

    render() {
        const { response } = this.props
        const results = response.results || []
        console.log(response)
        return (
            <div>
                {
                    (results.length > 0)
                        ? <ResultsJson response={ response } />
                        : null
                }
            </div>
        )
    }

}

export default GeocodingResults