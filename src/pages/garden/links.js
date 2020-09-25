import React from "react"

import Layout from "../../components/layout"
import {EquipmentDisplay, VegDisplay} from "./links-display";
import {FruitDisplay} from "./links-display";
import {shopsData} from "./links-data";

const LinksPage = () => {
    return (
        <Layout>
            <h1>Directory</h1>
            <h2>Seeds and plants</h2>
            <section className={"flex-group link-group"}>
                {shopsData.plantSeedSales.map((grower, i)=> <VegDisplay grower={grower} index={i}/>)}
            </section>

            <h2>Equipment</h2>
            <section className={"flex-group link-group"}>
                {shopsData.equipmentSales.map((seller, i)=> <EquipmentDisplay seller={seller} index={i}/>)}
            </section>
        </Layout>
    );
};

export default LinksPage

// <ul>{calendarData[formatVegList(props.month)].map((item, i) => { return <li key={i}>{item.seed}</li> })}</ul>
