import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'I am a chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};

const Charts = () => {
    return (<HighchartsReact highcharts={Highcharts} options={options}/>);
}

export default Charts;
