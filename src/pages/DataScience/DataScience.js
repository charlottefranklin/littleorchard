import React from 'react';
import Layout from "../../components/layout";

import Charts from "./Charts";


const DataScience = () => {
    return (
        <Layout>
            <h1>Data Science</h1>
            <h2>Datasets</h2>
            <dl>
                <dt className={"primary"}>Glossary</dt>
                <dd>
                    <dl>
                        <dt>Observations, cases, sampling units</dt>
                        <dd>Objects which are having their characteristics recorded</dd>
                        <dt>Variables</dt>
                        <dd>The characteristics being recorded</dd>
                        <dt>Linked variables</dt>
                        <dd>these are linked if being recorded for the same observational parameters</dd>
                    </dl>
                </dd>
            </dl>
            <dl>
                <dt className={"primary"}>Types</dt>
                <dd>
                    <dl>
                        <dt>Continuous</dt>
                        <dd>Weight, length, temperature</dd>
                        <dt>Discrete</dt>
                        <dd>A count of units - eg number of children in a family, number of bus routes in a
                            city
                        </dd>
                    </dl>
                    <dl>
                        <dt>Categorical</dt>
                        <dd>
                            <dl>
                                <dt>Nominal</dt>
                                <dd>categories (eg woodland, scrubland, marshes, forest)</dd>
                                <dt>Ordinal</dt>
                                <dd>naturally ordered categories (eg sm, med, lg)</dd>
                            </dl>
                        </dd>
                    </dl>
                </dd>
            </dl>
            <dl>
                <dt className={"primary"}>Samples and populations</dt>
                <dd>
                    <dl>
                        <dt>Populations</dt>
                        <dd>All the objects possible in a group</dd>
                        <dt>Samples</dt>
                        <dd>A sample of objects in a group</dd>
                        <dt>Underlying population</dt>
                        <dd>Sample can be representative (or not) of the underlying population. In this module assume
                            they are.
                        </dd>
                    </dl>
                </dd>
            </dl>
            <h2>Graphics</h2>
            <Charts/>
            <dl>
                <dt className={"primary"}>What they can tell us</dt>
                <dd>
                    <dl>
                        <dd>Which range of values occur in the data?</dd>
                        <dd>Which values are common and which are not?</dd>
                        <dd>Are there any unusual points? And how are they unusual?</dd>
                    </dl>
                </dd>

                <dt className={"primary"}>Types</dt>
                <dd>
                    <dl>
                        <dt>Bar charts</dt>
                        <dd>Categorical and discrete variables</dd>
                        <dt>Histogram</dt>
                        <dd>Continuous variables</dd>
                    </dl>
                </dd>
            </dl>
        </Layout>
    )
}

export default DataScience;
