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

function createData(name, number) {
  return { name, number };
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

  const rows = [
    createData("AFR (African)", gnomAD_AFR),
    createData("ALL (All individuals)", gnomAD_All),
    createData("AMR (Ad Mixed American)", gnomAD_AMR),
    createData("EAS (East Asian)", gnomAD_EAS),
    createData("EUR (European)", gnomAD_NFE),
    createData("SAS (South Asian)", gnomAD_SAS),
  ];

  return (
    <div>
      <div>
        <p style={{ fontSize: 14 }}>Allele frequency in gnomAD</p>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
