import React from "react"

import Layout from "../../components/layout"
import {SeedsDisplay} from "./seeds-display";

const PlantingCalendarPage = () => {
    return (
        <Layout>
            <h1>Sowing calendar</h1>
            <SeedsDisplay month="august" />
            <SeedsDisplay month="september" />
            <SeedsDisplay month="october" />
            <SeedsDisplay month="november" />
            <SeedsDisplay month="december" />
        </Layout>
    );
};

export default PlantingCalendarPage
