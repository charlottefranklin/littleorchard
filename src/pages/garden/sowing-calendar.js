import React from "react"

import Layout from "../../components/layout"
import {SeedsDisplay} from "./seeds-display";
import seeds01 from "../../images/seeds01.gif"


const PlantingCalendarPage = () => {
    return (
        <Layout>
            <h1>Sowing calendar</h1>
            <img src={seeds01} alt="sowing table"/>
            <section className="flex-group">
            <SeedsDisplay month="august" />
            <SeedsDisplay month="september" />
            <SeedsDisplay month="october" />
            <SeedsDisplay month="november" />
            <SeedsDisplay month="december" />
            </section>
        </Layout>
    );
};

export default PlantingCalendarPage
