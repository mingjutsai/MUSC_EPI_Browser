import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DistChart from "./DistChart";
import Link from "@material-ui/core/Link";
import MAFPieChartGroup from "./MAFPieChartGroup";
import MAFTableGroup from "./MAFTableGroup";
import MAFTableGroup2 from "./MAFTableGroup2";
import MAFBarChartGroup from "./MAFBarChartGroup";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // backgroundColor: "#3b3831",
    color: "black",
    width: window.innerWidth,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SummaryCard(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // const { name, pos, description } = props;
  //   mock
  let title = "";
  let summary = {};
  let n_snp = props.n_snp;
  if (props.wf === "disease") {
    // title = props.info.title
    //console.log(props.disease_summary_info)
    title = "Disease Search";
    // summary = {
    //     "Description": props.info.description,
    //     "GWAS catalog": props.info.gwas_link,
    //     "OMIM": props.info.omim_link,
    //     "Associations": props.disease_length
    // }

    summary = {
      // "EFO ID": props.disease_summary_info["MAPPED_TRAIT_URI"],

      Trait: props.info.trait,
      "EFO ID": props.info.efo_id,
      Associations: props.disease_length,
      // "Associations":props.info.associations
    };
  } else if (props.wf === "snp") {
    title = props.info.title;
    summary = {
      Chromosome: props.info.chromosome,
      Position: props.info.position,
      "Reference allele": props.info.ref,
      "Alternate allele": props.info.alt,
      // Consequence: props.info.consequence,
      // "Nearest gene": props.info.nearest_gene,
      // "MAF": props.info.maf,
      dnSNP: props.info.dbsnp_link,
      "GWAS catalog": props.info.gwas_link,
    };
  } else {
    title = props.gene_summary_info.GeneName;

    //let tempa=JSON.parse(props.gene_summary_info);
    //console.log(tempa);
    //console.log(typeof(tempa));
    let info_all = props.gene_summary_info.GeneID;
    console.log(info_all);
    // let info_all_copy=info_all.slice();
    // console.log(info_all_copy);

    // gene_id=info_all[0];
    console.log(props.gene_summary_info);
    console.log(info_all);
    console.log(typeof info_all);
    // console.log(info_all.split("|"));

    // console.log(gene_id);
    summary = {
      Position: `${props.gene_summary_info.Chr}:${props.gene_summary_info.Start}-${props.gene_summary_info.End}`,
      Alias: props.gene_summary_info.Aliases,
      "Full name": props.gene_summary_info.FullName,
      Geneid: props.gene_summary_info.GeneID,
      HGNC:
        "https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:" +
        props.gene_summary_info.hgnc,
      ENSEMBL:
        "http://uswest.ensembl.org/Homo_sapiens/Gene/Summary?g=" +
        props.gene_summary_info.ensembl,
      OMIM: "https://omim.org/entry/" + props.gene_summary_info.mim,
    };
  }

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justify="left"
        alignItems="left"
        // spacing={2}
      >
        <Grid item xs={props.wf === "disease" ? 4 : props.wf === "snp" ? 2 : 4}>
          <CardContent>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
           Word of the Day
           </Typography> */}

            <Typography variant="h3" component="h2">
              {title}
            </Typography>
            <br />
            {Object.keys(summary).map((key, index) => {
              if (
                key !== "GWAS catalog" &&
                key !== "OMIM" &&
                key !== "dnSNP" &&
                key !== "HGNC" &&
                key !== "ENSEMBL"
              ) {
                return (
                  <div>
                    <Typography variant="h5" component="h4">
                      {key}:
                    </Typography>
                    <span style={{ lineHeight: 5 }} />
                    <Typography
                      variant="h6"
                      component="p"
                      style={{ textIndent: "10px" }}
                    >
                      {summary[key]}
                    </Typography>
                    <br />
                  </div>
                );
              } else {
                return (
                  <div style={{ fontSize: 14 }}>
                    <Link href={summary[key]} target="_blank">
                      {key}
                    </Link>
                    {/* <br/> */}
                  </div>
                );
              }
            })}
          </CardContent>
        </Grid>
        {props.wf == "snp" ? (
          <Grid item xs={4}>
            <CardContent>
              {/* <MAFPieChartGroup maf={props.info.maf}/> */}
              {/* <MAFTableGroup maf={props.info.maf} /> */}
              {/* <MAFTableGroup2 maf={props.info.maf} /> */}
              <MAFBarChartGroup maf={props.info.maf} />
            </CardContent>

            <p style={{ textAlign: "center" }}>
              There are {n_snp} unique SNPs identified for this trait based on
              GWAS catalog.
            </p>
          </Grid>
        ) : props.wf == "disease" ? (
          <Grid item xs={4}>
            <CardContent>
              <DistChart cnt={props.cnt} />
            </CardContent>
            <p style={{ textAlign: "center" }}>
              There are {n_snp} unique SNPs identified for this trait based on
              GWAS catalog.
            </p>
          </Grid>
        ) : (
          <div />
        )}
      </Grid>
      {/* <CardActions>
                <Button size="small" style={{ color: "black", fontSize: '1.4rem' }}>Learn More</Button>
            </CardActions> */}
    </Card>
  );
}
