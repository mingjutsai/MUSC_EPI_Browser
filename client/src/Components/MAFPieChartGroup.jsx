import React from 'react';
import Chart from "react-google-charts";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function MAFPeiChartGroup(props) {
    let cnt = props.cnt;
    let colors = ['green', 'yellow'];
    let populations_kg = ["ALL", "AFR", "AMR", "EAS", "EUR", "SAS"]
    let populations_gnomad = ["ALL", "AFR", "AMR", "EAS", "NFE", "SAS"]
    // const gnomAD_AFR = props.maf["gnomAD_AFR"]
    const {gnomAD_AFR,
        gnomAD_AMR,
        gnomAD_All,
        gnomAD_EAS,
        gnomAD_NFE,
        gnomAD_SAS,
        kg_AFR,
        kg_ALL,
        kg_AMR,
        kg_EAS,
        kg_EUR,
        kg_SAS} = props.maf !== undefined? props.maf: [0,0,0,0,0,0, 0,0,0,0,0,0]
    let kg_freq = [kg_ALL, kg_AFR, kg_AMR, kg_EAS, kg_EUR, kg_SAS]
    let gnomad_freq = [gnomAD_All, gnomAD_AFR, gnomAD_AMR, gnomAD_EAS, gnomAD_NFE, gnomAD_SAS]
    console.log(props.maf)

    // todo: take care of assign fillOpacity to indicate the HiC filter currently using
    let fillOpacity = props.fillOpacity === undefined ? [1, 1, 1, 1] : props.fillOpacity;
    return (
        <div>
            <p style={{ fontSize: 14 }}>1000 Genomes Project Phase 3 allele frequencies</p>
            <div>{
                [...Array(6).keys()].map((i) => {
                    return (
                        <Chart
                            width={'150px'}
                            height={'72px'}
                            chartType="PieChart"
                            loader={<CircularProgress />}
                            data={[
                                ['Allele', 'freq'],
                                ['Major', 1-kg_freq[i]],
                                ['minor', kg_freq[i]]
                            ]}
                            options={{
                                title: kg_freq[i] != 0? populations_kg[i]:populations_kg[i]+" -- No info",
                                legend:{position:'none'},
                                slices: 
                                {
                                    0: { color: kg_freq[i] > 0?'green':"red" },
                                    1: { color: 'red' },
                                  }
                                 ,
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            style={{ display: "inline-block" }}
                        />
                    )
                })}
            </div>
            <p style={{ fontSize: 14 }}>gnomAD genomes r3.0 allele frequencies</p>
            <div>{
                [...Array(6).keys()].map((i) => {
                    return (
                        <Chart
                            width={'150px'}
                            height={'72px'}
                            chartType="PieChart"
                            loader={<CircularProgress />}
                            data={[
                                ['Allele', 'freq'],
                                ['Major', 1-gnomad_freq[i]],
                                ['Minor', gnomad_freq[i]],
                            ]}
                            options={{
                                title: gnomad_freq[i] != 0? populations_gnomad[i]:populations_gnomad[i]+" -- No info",
                                legend:{position:'none'},
                                slices: 
                                {
                                    0: { color: gnomad_freq[i] > 0?'green':"red" },
                                    1: { color: 'red' },
                                  }
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            style={{ display: "inline-block" }}
                            
                        />
                    )
                })}
            </div>
        </div>
    )

};