import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        height: "100%",
        overflow: "hidden",
        // marginLeft: 10,
        // marginRight: 10
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createDataSNP(snp, pos, region, gwas_gene, gwas_trait, ensembl_gene, HiC_target_gene, chromhmm, atac_region) {
    return { snp, pos, region, gwas_gene, gwas_trait, ensembl_gene, HiC_target_gene, chromhmm, atac_region };
}

function createDataGene(gene, promoter, strand, atac, tf, hic_promoter_bin, hic_distal_bin, chromhmm ) {
    return { gene, promoter, strand, atac, tf, hic_promoter_bin, hic_distal_bin, chromhmm  };
}



export default function RowInfoCard(props) {
    const classes = useStyles();
    let columns = []
    let rows = []
    if (!Object.keys(props.rowValue).includes("strand")) {
        const { snp, pos, region, promoter_region, promoter_openchrom, ensembl_gene, HiC_target_gene, chromhmm, atac_region } = props.rowValue
        rows = [
            createDataSNP(snp, pos, region, promoter_region, promoter_openchrom, ensembl_gene, HiC_target_gene, chromhmm, atac_region)
        ];
        columns = ["SNP", "Position", "SNP region", "Promoter region", "Promoter open chromatin", "Ensembl gene", "HiC Target Gene", "ChromHMM", "Open Chromatin Region"]
    } else {
  
        const { gene, promoter, strand, atac, tf, hic_promoter_bin, hic_distal_bin, chromhmm } = props.rowValue
        rows = [
            createDataGene(gene, promoter, strand, atac, tf, hic_promoter_bin, hic_distal_bin, chromhmm )
        ];
        columns = ["Gene", "Promoter", "Strand", "Open chromatin region", "Footprinting", "Hi-C promoter bin", "HiC distal bin", "ChromHMM"]
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="customized  table">
                <TableHead fixedHeader={true}>
                    <StyledTableRow>{
                        columns.map((column) => {
                            return (
                                <StyledTableCell align="left">{column}</StyledTableCell>
                            )
                        })
                    }
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <StyledTableRow >
                            {
                                Object.keys(row).map((key) => {
                                    if (key === "snp") {
                                        return (
                                            <StyledTableCell align="left">
                                                <Link href={"https://www.ncbi.nlm.nih.gov/snp/" + row[key]} target="_blank">
                                                    {row[key]}
                                                </Link>
                                            </StyledTableCell>
                                        )
                                    }
                                    return (
                                        <StyledTableCell align="left">{row[key]}</StyledTableCell>
                                    )
                                })
                            }
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
