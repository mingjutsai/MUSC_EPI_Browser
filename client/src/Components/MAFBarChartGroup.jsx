import React from "react";
import Chart from "react-google-charts";

export default function MAFPeiChartGroup(props) {
  const {
    gnomAD_AFR,
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
    kg_SAS,
  } =
    props.maf !== undefined ? props.maf : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div>
      <div style={{ display: "flex", maxWidth: 900 }}>
        <Chart
          width={"400px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["type", "value"],
            ["AFR (Afican)", 0.031],
            ["All (All individuals)", 0.056],
            ["AMR (Ad Mixed American)", 0.0648],
            ["EAS (East Asian)", 0.1091],
            ["EUR (European)", 0.0617],
            ["SAS (South Asian)", 0.0345],
          ]}
          options={{
            title: "Allele frequency in 1000G",
            chartArea: { width: "50%" },
            hAxis: {
              // title: "value",
              minValue: 0,
            },
            vAxis: {
              // title: "type",
            },
            legend: "none",
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />

        <Chart
          width={"400px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "type",
              "value",
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
              },
            ],
            ["AFR (Afican)", 0.031, null],
            ["All (All individuals)", 0.05, null],
            ["AMR (Ad Mixed American)", 0.046, null],
            ["EAS (East Asian)", 0.1091, null],
            ["EUR (European)", 0.0517, null],
            ["SAS (South Asian)", 0.0348, null],
          ]}
          options={{
            title: "Allele frequency in gnomAD",
            chartArea: { width: "50%" },
            hAxis: {
              // title: "value",
              minValue: 0,
            },
            vAxis: {
              // title: "type",
            },
            legend: "none",
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
}
