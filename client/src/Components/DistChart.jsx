import React from 'react';
import Chart from "react-google-charts";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function DistChart(props) {
    let cnt = props.cnt;
    let colors = ['green', 'yellow', "red", "blue"];
    // todo: take care of assign fillOpacity to indicate the HiC filter currently using
    let fillOpacity = props.fillOpacity === undefined ? [1, 1, 1, 1]:props.fillOpacity;
    return (
        <Chart
            // width={'500px'}
            height={'200px'}
            chartType="BarChart"
            loader={<CircularProgress />}
            // data={[
            //     ['', '0-0.05', '0.05-0.5','0.5-1', "NA",],
            //     ['FDR values', cnt[3], cnt[2], cnt[1], cnt[0]],
            //     // [{ role: 'style' },`fill-opacity: ${fillOpacity[0]}`, `fill-opacity: ${fillOpacity[1]}`,`fill-opacity: ${fillOpacity[2]}` , `fill-opacity: ${fillOpacity[3]}`]
            // ]}

            data={[
                ['FDR values', 'Value', { role: 'style' }, {
                    sourceColumn: 0,
                    role: 'annotation',
                    type: 'string',
                    calc: 'stringify',
                }],
                ['0-0.05', cnt[3], `color:${colors[0]};fill-opacity: ${fillOpacity[0]}`, null],
                ['0.05-0.5', cnt[2], `color:${colors[1]};fill-opacity: ${fillOpacity[1]}`, null],
                ['0.5-1', cnt[1], `color:${colors[2]};fill-opacity: ${fillOpacity[2]}`, null],
                ['NA', cnt[0], `color:${colors[3]};fill-opacity: ${fillOpacity[3]}`, null],
            ]}
            options={{
                // Material design options

                title: 'Hi-C interaction FDR value distribution',
                // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                legend: { position: 'none' },
                bar: { groupWidth: '95%' },
                // annotations: {
                //     stem: {
                //       color: '#097138'
                //     },
                //     style: 'line'
                //   },
                // colors: colors,
                // fillOpacity:fillOpacity
            }}
        />
    )

};