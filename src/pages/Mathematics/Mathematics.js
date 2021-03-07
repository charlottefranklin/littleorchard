import React from 'react';
import Layout from "../../components/layout";
import maxima from "../../images/maxima.png"


const MathematicsPage = () => {
    return (
        <Layout>
            <h1>Mathematics</h1>
            <figure className={"flex-group"}>
                <img className="img-sml" src={maxima} alt="maxima"/>
                <figcaption>Maxima plot placeholder</figcaption>
            </figure>
        </Layout>
    );
};

export default MathematicsPage;
