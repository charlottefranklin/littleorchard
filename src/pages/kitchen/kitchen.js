import React from "react"
import {Outlet} from "react-router";

import roses from "../../images/kitchen/roses.jpg"
import yoghurt from "../../images/kitchen/yoghurt.jpg"
import KitchenLayout from "../../components/kitchenLayout";


const KitchenPage = () => {

    return (
        <KitchenLayout>
            <Outlet />
            <img className="img-sml" src={roses} alt="roses"/><br/>
            <img className="img-sml" src={yoghurt} alt="yoghurt"/>
        </KitchenLayout>
    );
};

export default KitchenPage
