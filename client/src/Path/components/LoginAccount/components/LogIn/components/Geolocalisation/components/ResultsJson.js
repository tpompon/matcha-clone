import React from "react"

const ResultsJson = ({ response }) => (
    <div>
        { JSON.stringify(response, null, 2) }
    </div>
)

export default ResultsJson