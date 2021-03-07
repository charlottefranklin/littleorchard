import React from "react"
import Layout from "../../components/layout";

import roses from "../../images/kitchen/roses.jpg"
import yoghurt from "../../images/kitchen/yoghurt.jpg"


const KitchenPage = () => {
    return(
        <Layout>
            <h1>Kitchen</h1>
            <img className="img-sml" src={roses} alt="roses"/><br/>
            <img className="img-sml" src={yoghurt} alt="yoghurt"/>
        </Layout>
    );
};

export default KitchenPage
