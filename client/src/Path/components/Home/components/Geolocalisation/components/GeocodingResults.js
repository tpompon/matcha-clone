import React from "react"

import ResultsJson from "./ResultsJson"

const GeocodingResults = ({ response }) => {
    const results = response.results || []
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

export default GeocodingResults