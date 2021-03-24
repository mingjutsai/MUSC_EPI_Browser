import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function createData(afr, all, amr, eas, eur, sas) {
  return { afr, all, amr, eas, eur, sas };
}

export default function MAFTableGroup(props) {
  const classes = useStyles();

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
  let kg_freq = [kg_ALL, kg_AFR, kg_AMR, kg_EAS, kg_EUR, kg_SAS];
  let gnomad_freq = [
    gnomAD_All,
    gnomAD_AFR,
    gnomAD_AMR,
    gnomAD_EAS,
    gnomAD_NFE,
    gnomAD_SAS,
  ];
  console.log(props.maf);

  const rows1 = [createData(kg_AFR, kg_ALL, kg_AMR, kg_EAS, kg_EUR, kg_SAS)];
  const rows2 = [
    createData(
      gnomAD_All,
      gnomAD_AFR,
      gnomAD_AMR,
      gnomAD_EAS,
      gnomAD_NFE,
      gnomAD_SAS
    ),
  ];

  return (
    <div>
      <div>
        <p style={{ fontSize: 14 }}>Allele frequency in 1000G</p>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>AFR (African)</TableCell>
                <TableCell align="right">ALL (All individuals)</TableCell>
                <TableCell align="right">AMR (Ad Mixed American)</TableCell>
                <TableCell align="right">EAS (East Asian)</TableCell>
                <TableCell align="right">EUR (European)</TableCell>
                <TableCell align="right">SAS (South Asian)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <TableRow key={row.afr}>
                  <TableCell component="th" scope="row">
                    {row.afr}
                  </TableCell>
                  <TableCell align="right">{row.all}</TableCell>
                  <TableCell align="right">{row.amr}</TableCell>
                  <TableCell align="right">{row.eas}</TableCell>
                  <TableCell align="right">{row.eur}</TableCell>
                  <TableCell align="right">{row.sas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <p style={{ fontSize: 14 }}>Allele frequency in gnomAD</p>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>AFR (African)</TableCell>
                <TableCell align="right">ALL (All individuals)</TableCell>
                <TableCell align="right">AMR (Ad Mixed American)</TableCell>
                <TableCell align="right">EAS (East Asian)</TableCell>
                <TableCell align="right">EUR (European)</TableCell>
                <TableCell align="right">SAS (South Asian)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <TableRow key={row.afr}>
                  <TableCell component="th" scope="row">
                    {row.afr}
                  </TableCell>
                  <TableCell align="right">{row.all}</TableCell>
                  <TableCell align="right">{row.amr}</TableCell>
                  <TableCell align="right">{row.eas}</TableCell>
                  <TableCell align="right">{row.eur}</TableCell>
                  <TableCell align="right">{row.sas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
