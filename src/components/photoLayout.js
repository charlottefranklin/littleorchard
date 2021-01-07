import React from "react"
import PropTypes from "prop-types"

const photoLayout = ({children}) => {
    return (
        <>
            <main className={"main-full-width"}>
                <>{children}</>
            </main>
        </>
    )
}

photoLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default photoLayout
