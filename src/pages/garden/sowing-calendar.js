import React from "react"

import Layout from "../../components/layout"
import {calendarData} from "../../pages/garden/data"

const PlantingCalendarPage = () => {
    return (
        <Layout>
            <h1>Sowing calendar</h1>
            <div><h2>August</h2>
                {calendarData["august-seeds"].map((item, i) => {
                        return <div key={i}>{item.seed}</div>
                    }
                )}
            </div>
            <div><h2>September</h2>
                {calendarData["september-seeds"].map((item, i) => {
                        return <div key={i}>{item.seed}</div>
                    }
                )}
            </div>
            <div><h2>October </h2>
                {calendarData["october-seeds"].map((item, i) => {
                        return <div key={i}>{item.seed}</div>
                    }
                )}
            </div>
        </Layout>
    );
};

export default PlantingCalendarPage


