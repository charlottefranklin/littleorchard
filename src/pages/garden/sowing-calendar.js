import React from "react"

import Layout from "../../components/layout"
import {SeedsDisplay} from "./seeds-display";

const PlantingCalendarPage = () => {
    return (
        <Layout>
            <h1>Sowing calendar</h1>
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
