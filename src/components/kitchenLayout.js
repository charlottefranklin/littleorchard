import React from "react"
import KitchenNavigation from "./navigation/kitchenNavigation";

const KitchenLayout = ({children}) => {
    return (
        <>
            <KitchenNavigation/>
            <main>{children}</main>
        </>
    )
}

export default KitchenLayout
