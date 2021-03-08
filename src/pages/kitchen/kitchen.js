import React from "react"
import {Outlet} from "react-router";

import KitchenLayout from "../../components/kitchenLayout";

const KitchenPage = () => {

    return (
        <KitchenLayout>
            <Outlet />
        </KitchenLayout>
    );
};

export default KitchenPage
