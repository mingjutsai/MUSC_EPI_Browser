import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import { Portal } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import SaveIcon from "@material-ui/icons/Save";
import TemplateViewConfig from "./TemplateViewConfig";
import _ from "lodash";
import { format } from "mathjs";
import { ExportToCsv } from "export-to-csv";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  gene_columns,
  snp_columns,
  disease_columns,
  essential_column_ids,
} from "./TableViewConfig";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import Switch from "@material-ui/core/Switch";
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SummaryCard from "./SummaryCard";
import Link from "@material-ui/core/Link";

// const templateViewConfig = _.cloneDeep(TemplateViewConfig.TemplateViewConfig)
// In production mode, do below for config set up
// _.cloneDeep(TemplateViewConfig.TemplateViewConfig)

const useStyles = makeStyles({
  // tableRow: {
  //   "&$hover:hover": {
  //     backgroundColor: "blue"
  //   }
  // },
  // tableCell: {
  //   "$hover:hover &": {
  //     color: "pink"
  //   }
  // },
  // hover: {},
  // tableRow: {
  //   "&$selected, &$selected:hover": {
  //     backgroundColor:"#2967b6",
  //     borderColor:"#2967b6",

  //     // color:"white"
  //   }
  // },
  // tableCell: {
  //   "$selected &": {
  //     color: "yellow"
  //   }
  // },
  selected: {},
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    // maxHeight: 440,
  },
  caption: {
    color: "black",
    fontSize: "1.1rem",
    padding: 8,
    // border: "1px dashed grey",
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontSize: "1.1rem",
      color: "grey",
      fontWeight: 600,
    },
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
});

const TextOnlyTooltip = withStyles({
  tooltip: {
    fontSize: "1.5em",
  },
})(Tooltip);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function SortableTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    wf,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  // console.log(props)
  // the next line is original code by yzhang, changeed on 021621
  //const columns = "gene" === wf ? _.cloneDeep(gene_columns) : _.cloneDeep(snp_columns);
  // if (wf==="gene"){
  //   const columns=_.cloneDeep(gene_columns);
  // }else if (wf==="snp"){
  //   const columns=_.cloneDeep(snp_columns);
  // }else{
  //   const columns=_.cloneDeep(disease_columns);
  // }
  let columns = [];
  if ("gene" === wf) {
    columns = _.cloneDeep(gene_columns);
  } else if ("snp" === wf) {
    columns = _.cloneDeep(snp_columns);
  } else {
    columns = _.cloneDeep(disease_columns);
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {columns
          // .filter((column) =>
          //   props.showDetails ? true : essential_column_ids.includes(column.id)
          // )
          .map((column) => (
            <TextOnlyTooltip
              TransitionComponent={Zoom}
              placement="top-start"
              style={{ zIndex: 88 }}
              title={column.description}
            >
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  fontSize: "1.7em",
                  color: column.color,
                  textDecorationLine: "underline",
                  textDecorationStyle: "dashed",
                  textDecorationColor: "black",
                }}
                sortDirection={orderBy === column.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={createSortHandler(column.id)}
                  style={{ color: column.color }}
                >
                  {column.label}
                  {orderBy === column.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            </TextOnlyTooltip>
          ))}
      </TableRow>
    </TableHead>
  );
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    leaveDelay: 100,
    enterDelay: 50,
    lineHeight: 1.3,
  },
}))(Tooltip);

export default function TableView(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [selectedID, setSelectedID] = React.useState(null);

  const [orderBy, setOrderBy] = React.useState("gwas_p");
  const [order, setOrder] = React.useState("asc");
  const [showDetails, SetShowDetails] = React.useState(false);

  // console.log(props.wf)

  // when cutoff changes, rerender the table
  const filterRows = (rows) => {
    // console.log("now props.keepSNPinPromoters is :" + props.keepSNPinPromoters)
    // porps.setCutoff(props.cutoff);
    console.log(rows);
    if (props.wf == "gene") {
      return rows;
    }

    console.log(rows);

    let newFilteredRows = [];
    for (let row of rows) {
      let valid_row = true;
      // console.log(row)
      if (props.keepSNPinPromoters && "Promoter" === row.snp_bin_anno) {
        {
        }
      } else {
        for (let criteria of Object.keys(props.cutoff)) {
          // console.log("criteria")
          // console.log(criteria)
          // console.log(row[criteria])
          // console.log(props.cutoff[criteria])
          if (row[criteria] > props.cutoff[criteria]) {
            valid_row = false;
            break;
          } else if (
            props.cutoff[criteria] !== 1 &&
            (row[criteria] === "" || row[criteria] === undefined)
          ) {
            valid_row = false;
            break;
          }
        }
      }

      if (valid_row) {
        newFilteredRows.push(row);
      }
    }
    return newFilteredRows;
  };

  // console.log('new rows added', props.tableData);
  // })

  // React.useEffect(()=>{
  //   console.log(filteredRows)
  // },[filteredRows])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // change the eqtl searchable text
  const handleEqtlClick = (row) => {
    let tissues = [
      "Adipose_Subcutaneous",
      "Adipose_Visceral_Omentum",
      "Adrenal_Gland",
      "Artery_Aorta",
      "Artery_Coronary",
      "Artery_Tibial",
      "Brain_Amygdala",
      "Brain_Anterior_cingulate_cortex_BA24",
      "Brain_Caudate_basal_ganglia",
      "Brain_Cerebellar_Hemisphere",
      "Brain_Cerebellum",
      "Brain_Cortex",
      "Brain_Frontal_Cortex_BA9",
      "Brain_Hippocampus",
      "Brain_Hypothalamus",
      "Brain_Nucleus_accumbens_basal_ganglia",
      "Brain_Putamen_basal_ganglia",
      "Brain_Spinal_cord_cervical_c-1",
      "Brain_Substantia_nigra",
      "Breast_Mammary_Tissue",
      "Cells_Cultured_fibroblasts",
      "Cells_EBV-transformed_lymphocytes",
      "Colon_Sigmoid",
      "Colon_Transverse",
      "Esophagus_Mucosa",
      "Esophagus_Muscularis",
      "Heart_Atrial_Appendage",
      "Heart_Left_Ventricle",
      "Kidney_Medulla",
      "Liver",
      "Lung",
      "Minor_Salivary_Gland",
      "Muscle_Skeletal",
      "Nerve_Tibial",
      "Ovary",
      "Pancreas",
      "Pituitary",
      "Prostate",
      "Skin_Not_Sun_Exposed_Suprapubic",
      "Skin_Sun_Exposed_Lower_leg",
      "Small_Intestine_Terminal_Ileum",
      "Spleen",
      "Stomach",
      "Testis",
      "Thyroid",
      "Uterus",
      "Vagina",
      "Whole_Blood",
    ];
    let eqtl_info = "";
    let genes = [];
    genes = genes.concat(row.gene.split(","));
    if (row.gwas_gene !== "") {
      genes = genes.concat(row.gwas_gene.split(","));
    }

    if (row.target_gene !== "") {
      genes = genes.concat(row.target_gene.split(","));
    }

    // console.log(genes)
    let snp = row.rsid;
    // console.log(snp)

    for (let gene of genes) {
      for (let tissue of tissues) {
        eqtl_info += snp + "," + gene + "," + tissue + "\n";
      }
    }

    props.handleEqtl(eqtl_info);
  };

  // handle change show details toggle
  const handleShowDetailsChange = (event) => {
    SetShowDetails(event.target.checked);
  };

  const handleRowClick = (viewConfig, row) => {
    // console.log(TemplateViewConfig)
    //   rsid, chr, start, end, ref, alt, gene, gwas_gene, gwas_trait, gwas_p, gwas_or_beta, snp_bin, interact_bin, snp_bin_anno, interact_bin_anno, reads, LogP, HiC_FDR, target_gene, atac_region, atac_qval, atac_tf, tss, chromhmm, viewConfig
    // console.log(row)

    // gene search wf
    if (Object.keys(row).includes("strand")) {
      props.handleChangeRowValue({
        gene: row.gene,
        promoter: row.promoter,
        strand: row.strand,
        atac: row.atac,
        tf_parsed: row.tf_parsed,
        hic_promoter_bin: row.hic_promoter_bin,
        hic_distal_bin: row.hic_distal_bin,
        chromhmm_parsed: row.chromhmm_parsed,
      });
    } else {
      props.handleChangeRowValue({
        snp: row.rsid,
        pos: row.snp_id,
        region: row.gene_distance,
        ensembl_gene: row.gene,
        chromhmm: row.snp_chromhmm,
        HiC_target_gene: row.promoter_gene,
        promoter_region: row.promoter_region,
        promoter_openchrom: row.promoter_openchrom,
        atac_region: row.snp_openchrom,
      });
    }

    props.handleChangeViewConfig(viewConfig);
    // console.log(viewConfig)
    // console.log(row.rsid)
    // console.log(filteredRows)
    setSelectedID(row.rsid + row.alt + row.hic_distal_bin);
  };

  // option for table download
  const tableOptions = {
    fieldSeparator: "\t",
    filename: "summary",
    quoteStrings: "",
    decimalSeparator: ".",
    showLabels: true,
    showTitle: false,
    title: "",
    useTextFile: true,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

  // the next line is oringial by yzhang, changed on 021621
  //const columns = "gene" === props.wf ? _.cloneDeep(gene_columns) : _.cloneDeep(snp_columns)

  // if (props.wf==="gene"){
  //   const columns=_.cloneDeep(gene_columns)
  // }else if (props.wf==="snp"){
  //   const columns=_.cloneDeep(snp_columns)
  // }else{
  //   const columns=_.cloneDeep(disease_columns)
  // }

  let columns = [];
  if ("gene" === props.wf) {
    columns = _.cloneDeep(gene_columns);
  } else if ("snp" === props.wf) {
    columns = _.cloneDeep(snp_columns);
  } else {
    columns = _.cloneDeep(disease_columns);
  }

  console.log(columns);

  // setFilteredRows(filteredRows)

  let filteredRows = filterRows(props.rows);

  // get summary card info
  let info = {};
  if (props.wf === "disease") {
    // a mock for disease info, havn't decide this goes to a db or just a config file
    // info["title"] = "Chagas cardiomyopathy"
    // info["description"] = "a form of cardiomyopathy that develops as a result of Chagas disease, an infection with the protozoan parasite Trypanosoma CruziA disease of the cardiac muscle developed subsequent to the initial protozoan infection by trypanosoma cruzi. After infection, less than 10% develop acute illness such as myocarditis (mostly in children). The disease then enters a latent phase without clinical symptoms until about 20 years later. Myocardial symptoms of advanced chagas disease include conduction defects (heart block) and cardiomegaly."
    // info["gwas_link"] = "https://www.ebi.ac.uk/gwas/efotraits/EFO_0005529"
    // info["omim_link"] = "https://omim.org/entry/115200"
    // info["efo_id"]=props.disease_summary_info["MAPPED_TRAIT_URI"].split("efo/")[1]
    // console.log(info["efo_id"])
    info["trait"] = props.disease_trait;
    info["efo_id"] = props.disease_efo_id;
    // info["associations"]=props.disease_length;
  } else if (
    props.wf === "snp" &&
    filteredRows !== undefined &&
    filteredRows.length > 0
  ) {
    console.log(filteredRows);
    info["title"] = filteredRows[0].rsid;
    // info["position"] = "Chr" + filteredRows[0].snp_id.split("-")[0] + " : " + filteredRows[0].snp_id.split("-")[1] ;
    // info["position"] = "test1";
    info["consequence"] = filteredRows[0].snp_region;
    info["nearest_gene"] = filteredRows[0].gene;
    info["maf"] = filteredRows[0].maf;
    info["dbsnp_link"] =
      "https://www.ncbi.nlm.nih.gov/snp/" + filteredRows[0].rsid;
    info["gwas_link"] =
      "https://www.ebi.ac.uk/gwas/variants/" + filteredRows[0].rsid;
    info["gene"] = filteredRows[0].gene;
    info["region"] = filteredRows[0].snp_region;
    info["gene_distance"] = filteredRows[0].gene_distance;
    info["snp_chromhmm"] = filteredRows[0].snp_chromhmm;
    info["snp_openchrom"] = filteredRows[0].snp_openchrom;
    info["snp_tf"] = filteredRows[0].snp_tf;
    info["hic_distal_bin"] = filteredRows[0].hic_distal_bin;
    info["chromosome"] = filteredRows[0].snp_id.split("-")[0];
    info["position"] = filteredRows[0].snp_id.split("-")[1];
    info["ref"] = filteredRows[0].snp_id.split("-")[2];
    info["alt"] = filteredRows[0].snp_id.split("-")[3];
  } else if (
    props.wf === "gene" &&
    filteredRows !== undefined &&
    filteredRows.length > 0
  ) {
    info["title"] = filteredRows[0].gene;
    info["gene"] = filteredRows[0].gene;
    info["strand"] = filteredRows[0].strand;
  } else {
    // info["full_name"] = filteredRows[0]
  }

  console.log(info);

  if (props.wf === "snp") {
    return (
      <div style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>
        <SummaryCard
          cnt={props.cnt}
          wf={props.wf}
          info={info}
          n_snp={props.n_snp}
          gene_summary_info={props.gene_summary_info}
          disease_summary_info={props.disease_summary_info}
          disease_length={props.disease_length}
        />
        <div>
          <p>"SNP Basic Information"</p>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Region(Ensembl)</TableCell>
                    <TableCell align="right">Gene</TableCell>
                    <TableCell align="right">Gene Distance</TableCell>
                    <TableCell align="right">SNP ChromHMM</TableCell>
                    <TableCell align="right">SNP OpenCHrom</TableCell>
                    <TableCell align="right">SNP TF</TableCell>
                    <TableCell align="right">Hic DIstal Bin</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {info["region"]}
                    </TableCell>
                    <TableCell align="right">{info["gene"]}</TableCell>
                    <TableCell align="right">{info["gene_distance"]}</TableCell>
                    <TableCell align="right">{info["snp_chromhmm"]}</TableCell>
                    <TableCell align="right">{info["snp_openchrom"]}</TableCell>
                    <TableCell align="right">{info["snp_tf"]}</TableCell>
                    <TableCell align="right">
                      {info["hic_distal_bin"]}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {/* the next code code is original display code  */}
        <div style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>
          {/* <FormControlLabel
            control={
              <Switch
                checked={showDetails}
                onChange={handleShowDetailsChange}
                name="showDetails"
                color="primary"
              />
            }
            label="Show details"
          /> */}
          <Paper
            className={classes.root}
            style={{ marginTop: 20, textAlign: "center" }}
          >
            <TableContainer className={classes.container}>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{
                  head: {
                    backgroundColor: "black",
                  },
                }}
              >
                <SortableTableHead
                  classes={classes}
                  // numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  // onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={filteredRows.length}
                  wf={props.wf}
                  showDetails={showDetails}
                />

                <TableBody>
                  {stableSort(filteredRows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={
                            row.rsid +
                            row.gene +
                            row.ref +
                            row.alt +
                            row.hic_distal_bin
                          }
                          value={row.viewConfig}
                          selected={
                            selectedID ===
                            row.rsid + row.alt + row.hic_distal_bin
                          }
                          classes={{ selected: classes.selected }}
                          className={classes.tableRow}
                        >
                          <TableCell>
                            <TextOnlyTooltip
                              TransitionComponent={Zoom}
                              placement="middle-start"
                              style={{ fontSize: "2em", zIndex: 88 }}
                              title="Click row to view details"
                            >
                              <IconButton
                                aria-label="expand row"
                                color="primary"
                                size="medium"
                                onClick={() => {
                                  handleRowClick(row.viewConfig, row);
                                }}
                              >
                                <CenterFocusWeakIcon
                                  style={{ fontSize: "large" }}
                                />
                              </IconButton>
                            </TextOnlyTooltip>
                          </TableCell>
                          {columns
                            // .filter(
                            //   // toggle to showdetails
                            //   (column) =>
                            //     showDetails
                            //       ? true
                            //       : essential_column_ids.includes(column.id)
                            // )
                            .map((column) => {
                              const value = row[column.id];
                              if (column.id === "eqtl") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      color: "blue",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                      textDecorationColor: "blue",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      handleEqtlClick(row);
                                    }}
                                  >
                                    eQTL info
                                  </TableCell>
                                );
                              } else if (column.id === "atac_tf") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                    }}
                                  >
                                    {/* <List> */}
                                    {
                                      // todo: the real tf footprints can be a str sep by ",", need to parse that and add tool tips
                                      value.map((tf) => {
                                        console.log(tf);
                                        return (
                                          // <ListItem>
                                          <HtmlTooltip
                                            title={
                                              <React.Fragment>
                                                <Typography
                                                  style={{ fontSize: 16 }}
                                                  color="inherit"
                                                >
                                                  {tf.name}
                                                </Typography>
                                                <img
                                                  src={
                                                    "http://jaspar.genereg.net/static/logos/svg/" +
                                                    tf.jaspar_id +
                                                    ".svg"
                                                  }
                                                  width="200"
                                                  height="100"
                                                ></img>

                                                <p style={{ fontSize: 16 }}>
                                                  <span
                                                    style={{
                                                      letterSpacing: "2px",
                                                      fontFamily: "Courier New",
                                                    }}
                                                  >
                                                    REF: {tf.seq}
                                                  </span>
                                                  <br />
                                                  <span
                                                    style={{
                                                      fontFamily: "Courier New",
                                                      letterSpacing: "2px",
                                                    }}
                                                  >
                                                    ALT:{" "}
                                                  </span>
                                                  <span
                                                    style={{
                                                      color: "#f5f5f9",
                                                      fontFamily: "Courier New",
                                                      letterSpacing: "2px",
                                                    }}
                                                  >
                                                    {tf.seq.slice(
                                                      0,
                                                      tf.snp_pos
                                                    )}
                                                  </span>
                                                  <span
                                                    style={{
                                                      color: "red",
                                                      letterSpacing: "2px",
                                                      fontFamily: "Courier New",
                                                    }}
                                                  >
                                                    {tf.snp_alt}
                                                  </span>
                                                </p>
                                              </React.Fragment>
                                            }
                                          >
                                            <p>{tf.name + "\n"}</p>
                                          </HtmlTooltip>
                                          // </ListItem>
                                        );
                                      })
                                    }
                                    {/* </List> */}
                                  </TableCell>
                                );
                              } else if (column.id === "tf_parsed") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                    }}
                                  >
                                    {/* <List> */}
                                    {value.map((_tf) => {
                                      console.log(_tf);
                                      return (
                                        // <ListItem>
                                        <HtmlTooltip
                                          title={
                                            <React.Fragment>
                                              <Typography
                                                style={{ fontSize: 16 }}
                                                color="inherit"
                                              >
                                                {_tf.name}
                                              </Typography>
                                              <img
                                                src={
                                                  "http://jaspar.genereg.net/static/logos/svg/" +
                                                  _tf.jaspar_id +
                                                  ".svg"
                                                }
                                                width="200"
                                                height="100"
                                              ></img>
                                            </React.Fragment>
                                          }
                                        >
                                          <p>{_tf.name + "\n"}</p>
                                        </HtmlTooltip>
                                        // </ListItem>
                                      );
                                    })}
                                    {/* </List> */}
                                  </TableCell>
                                );
                              } else if (
                                column.id == "promoter" ||
                                column.id == "hic_distal_bin"
                              ) {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                    <div />
                                    <Link
                                      href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/range_test/${value}`}
                                      target="_blank"
                                    >
                                      (Download SNP table within this range)
                                    </Link>
                                  </TableCell>
                                );
                              } else if (column.id == "snp") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                    <div />
                                    <Link
                                      href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:3000`}
                                      target="_blank"
                                    >
                                      (Download SNP table within this range)
                                    </Link>
                                  </TableCell>
                                );
                              } else {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              }
                            })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TextOnlyTooltip
              TransitionComponent={Zoom}
              placement="top-start"
              style={{ fontSize: "2em" }}
              title="Download table"
            >
              <IconButton
                aria-label="cancel"
                // todo
                onClick={() => {
                  const csvExporter = new ExportToCsv(tableOptions);
                  csvExporter.generateCsv(props.table);
                }}
                style={{
                  cursor: "pointer",
                  alignText: "left",
                  width: "40px",
                  zIndex: 88,
                }}
              >
                <SaveIcon style={{ color: "black" }} fontSize="large" />
              </IconButton>
            </TextOnlyTooltip>
            <TablePagination
              classes={{
                toolbar: classes.toolbar,
                caption: classes.caption,
              }}
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              style={{ fontSize: 14, marginTop: -50 }}
            />
          </Paper>
        </div>

        {/* end original code block */}
        <div></div>
      </div>
    );
  } else if (props.wf === "gene") {
    return (
      <div style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>
        <SummaryCard
          cnt={props.cnt}
          wf={props.wf}
          info={info}
          n_snp={props.n_snp}
          gene_summary_info={props.gene_summary_info}
          disease_summary_info={props.disease_summary_info}
          disease_length={props.disease_length}
        />
        <div>
          <p>"Gene Basic Information"</p>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Gene (TPM)</TableCell>

                    <TableCell align="right">Strand</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {info["gene"]}
                    </TableCell>

                    <TableCell align="right">{info["strand"]}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {/* the next code code is original display code  */}
        <div style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>
          {/* <FormControlLabel
            control={
              <Switch
                checked={showDetails}
                onChange={handleShowDetailsChange}
                name="showDetails"
                color="primary"
              />
            }
            label="Show details"
          /> */}
          <Paper
            className={classes.root}
            style={{ marginTop: 20, textAlign: "center" }}
          >
            <TableContainer className={classes.container}>
              <Table
                stickyHeader
                aria-label="sticky table"
                style={{
                  head: {
                    backgroundColor: "black",
                  },
                }}
              >
                <SortableTableHead
                  classes={classes}
                  // numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  // onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={filteredRows.length}
                  wf={props.wf}
                  showDetails={showDetails}
                />

                <TableBody>
                  {stableSort(filteredRows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={
                            row.rsid +
                            row.gene +
                            row.ref +
                            row.alt +
                            row.hic_distal_bin
                          }
                          value={row.viewConfig}
                          selected={
                            selectedID ===
                            row.rsid + row.alt + row.hic_distal_bin
                          }
                          classes={{ selected: classes.selected }}
                          className={classes.tableRow}
                        >
                          <TableCell>
                            <TextOnlyTooltip
                              TransitionComponent={Zoom}
                              placement="middle-start"
                              style={{ fontSize: "2em", zIndex: 88 }}
                              title="Click row to view details"
                            >
                              <IconButton
                                aria-label="expand row"
                                color="primary"
                                size="medium"
                                onClick={() => {
                                  handleRowClick(row.viewConfig, row);
                                }}
                              >
                                <CenterFocusWeakIcon
                                  style={{ fontSize: "large" }}
                                />
                              </IconButton>
                            </TextOnlyTooltip>
                          </TableCell>
                          {columns
                            // .filter(
                            //   // toggle to showdetails
                            //   (column) =>
                            //     showDetails
                            //       ? true
                            //       : essential_column_ids.includes(column.id)
                            // )
                            .map((column) => {
                              const value = row[column.id];
                              if (column.id === "eqtl") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      color: "blue",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                      textDecorationColor: "blue",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      handleEqtlClick(row);
                                    }}
                                  >
                                    eQTL info
                                  </TableCell>
                                );
                              } else if (column.id === "atac_tf") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                    }}
                                  >
                                    {/* <List> */}
                                    {
                                      // todo: the real tf footprints can be a str sep by ",", need to parse that and add tool tips
                                      value.map((tf) => {
                                        console.log(tf);
                                        return (
                                          // <ListItem>
                                          <HtmlTooltip
                                            title={
                                              <React.Fragment>
                                                <Typography
                                                  style={{ fontSize: 16 }}
                                                  color="inherit"
                                                >
                                                  {tf.name}
                                                </Typography>
                                                <img
                                                  src={
                                                    "http://jaspar.genereg.net/static/logos/svg/" +
                                                    tf.jaspar_id +
                                                    ".svg"
                                                  }
                                                  width="200"
                                                  height="100"
                                                ></img>

                                                <p style={{ fontSize: 16 }}>
                                                  <span
                                                    style={{
                                                      letterSpacing: "2px",
                                                      fontFamily: "Courier New",
                                                    }}
                                                  >
                                                    REF: {tf.seq}
                                                  </span>
                                                  <br />
                                                  <span
                                                    style={{
                                                      fontFamily: "Courier New",
                                                      letterSpacing: "2px",
                                                    }}
                                                  >
                                                    ALT:{" "}
                                                  </span>
                                                  <span
                                                    style={{
                                                      color: "#f5f5f9",
                                                      fontFamily: "Courier New",
                                                      letterSpacing: "2px",
                                                    }}
                                                  >
                                                    {tf.seq.slice(
                                                      0,
                                                      tf.snp_pos
                                                    )}
                                                  </span>
                                                  <span
                                                    style={{
                                                      color: "red",
                                                      letterSpacing: "2px",
                                                      fontFamily: "Courier New",
                                                    }}
                                                  >
                                                    {tf.snp_alt}
                                                  </span>
                                                </p>
                                              </React.Fragment>
                                            }
                                          >
                                            <p>{tf.name + "\n"}</p>
                                          </HtmlTooltip>
                                          // </ListItem>
                                        );
                                      })
                                    }
                                    {/* </List> */}
                                  </TableCell>
                                );
                              } else if (column.id === "tf_parsed") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontSize: "1.4rem",
                                      textDecorationLine: "underline",
                                      textDecorationStyle: "dashed",
                                    }}
                                  >
                                    {/* <List> */}
                                    {value.map((_tf) => {
                                      console.log(_tf);
                                      return (
                                        // <ListItem>
                                        <HtmlTooltip
                                          title={
                                            <React.Fragment>
                                              <Typography
                                                style={{ fontSize: 16 }}
                                                color="inherit"
                                              >
                                                {_tf.name}
                                              </Typography>
                                              <img
                                                src={
                                                  "http://jaspar.genereg.net/static/logos/svg/" +
                                                  _tf.jaspar_id +
                                                  ".svg"
                                                }
                                                width="200"
                                                height="100"
                                              ></img>
                                            </React.Fragment>
                                          }
                                        >
                                          <p>{_tf.name + "\n"}</p>
                                        </HtmlTooltip>
                                        // </ListItem>
                                      );
                                    })}
                                    {/* </List> */}
                                  </TableCell>
                                );
                              } else if (
                                column.id == "promoter" ||
                                column.id == "hic_distal_bin"
                              ) {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                    <div />
                                    <Link
                                      href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/range_test/${value}`}
                                      target="_blank"
                                    >
                                      (Download SNP table within this range)
                                    </Link>
                                  </TableCell>
                                );
                              } else if (column.id == "snp") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                    <div />
                                    <Link
                                      href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:3000`}
                                      target="_blank"
                                    >
                                      (Download SNP table within this range)
                                    </Link>
                                  </TableCell>
                                );
                              } else {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontSize: "1.4rem" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              }
                            })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TextOnlyTooltip
              TransitionComponent={Zoom}
              placement="top-start"
              style={{ fontSize: "2em" }}
              title="Download table"
            >
              <IconButton
                aria-label="cancel"
                // todo
                onClick={() => {
                  const csvExporter = new ExportToCsv(tableOptions);
                  csvExporter.generateCsv(props.table);
                }}
                style={{
                  cursor: "pointer",
                  alignText: "left",
                  width: "40px",
                  zIndex: 88,
                }}
              >
                <SaveIcon style={{ color: "black" }} fontSize="large" />
              </IconButton>
            </TextOnlyTooltip>
            <TablePagination
              classes={{
                toolbar: classes.toolbar,
                caption: classes.caption,
              }}
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              style={{ fontSize: 14, marginTop: -50 }}
            />
          </Paper>
        </div>

        {/* end original code block */}
        <div></div>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>
        <SummaryCard
          cnt={props.cnt}
          wf={props.wf}
          info={info}
          n_snp={props.n_snp}
          gene_summary_info={props.gene_summary_info}
          disease_summary_info={props.disease_summary_info}
          disease_length={props.disease_length}
        />
        {/* <FormControlLabel
          control={
            <Switch
              checked={showDetails}
              onChange={handleShowDetailsChange}
              name="showDetails"
              color="primary"
            />
          }
          label="Show details"
        /> */}
        <Paper
          className={classes.root}
          style={{ marginTop: 20, textAlign: "center" }}
        >
          <TableContainer className={classes.container}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{
                head: {
                  backgroundColor: "black",
                },
              }}
            >
              <SortableTableHead
                classes={classes}
                // numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                // onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={filteredRows.length}
                wf={props.wf}
                showDetails={showDetails}
              />

              <TableBody>
                {stableSort(filteredRows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={
                          row.rsid +
                          row.gene +
                          row.ref +
                          row.alt +
                          row.hic_distal_bin
                        }
                        value={row.viewConfig}
                        selected={
                          selectedID === row.rsid + row.alt + row.hic_distal_bin
                        }
                        classes={{ selected: classes.selected }}
                        className={classes.tableRow}
                      >
                        <TableCell>
                          <TextOnlyTooltip
                            TransitionComponent={Zoom}
                            placement="middle-start"
                            style={{ fontSize: "2em", zIndex: 88 }}
                            title="Click row to view details"
                          >
                            <IconButton
                              aria-label="expand row"
                              color="primary"
                              size="medium"
                              onClick={() => {
                                handleRowClick(row.viewConfig, row);
                              }}
                            >
                              <CenterFocusWeakIcon
                                style={{ fontSize: "large" }}
                              />
                            </IconButton>
                          </TextOnlyTooltip>
                        </TableCell>
                        {columns
                          // .filter(
                          //   // toggle to showdetails
                          //   (column) =>
                          //     showDetails
                          //       ? true
                          //       : essential_column_ids.includes(column.id)
                          // )
                          .map((column) => {
                            const value = row[column.id];
                            if (column.id === "eqtl") {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    fontSize: "1.4rem",
                                    color: "blue",
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "dashed",
                                    textDecorationColor: "blue",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    handleEqtlClick(row);
                                  }}
                                >
                                  eQTL info
                                </TableCell>
                              );
                            } else if (column.id === "atac_tf") {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    fontSize: "1.4rem",
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "dashed",
                                  }}
                                >
                                  {/* <List> */}
                                  {
                                    // todo: the real tf footprints can be a str sep by ",", need to parse that and add tool tips
                                    value.map((tf) => {
                                      console.log(tf);
                                      return (
                                        // <ListItem>
                                        <HtmlTooltip
                                          title={
                                            <React.Fragment>
                                              <Typography
                                                style={{ fontSize: 16 }}
                                                color="inherit"
                                              >
                                                {tf.name}
                                              </Typography>
                                              <img
                                                src={
                                                  "http://jaspar.genereg.net/static/logos/svg/" +
                                                  tf.jaspar_id +
                                                  ".svg"
                                                }
                                                width="200"
                                                height="100"
                                              ></img>

                                              <p style={{ fontSize: 16 }}>
                                                <span
                                                  style={{
                                                    letterSpacing: "2px",
                                                    fontFamily: "Courier New",
                                                  }}
                                                >
                                                  REF: {tf.seq}
                                                </span>
                                                <br />
                                                <span
                                                  style={{
                                                    fontFamily: "Courier New",
                                                    letterSpacing: "2px",
                                                  }}
                                                >
                                                  ALT:{" "}
                                                </span>
                                                <span
                                                  style={{
                                                    color: "#f5f5f9",
                                                    fontFamily: "Courier New",
                                                    letterSpacing: "2px",
                                                  }}
                                                >
                                                  {tf.seq.slice(0, tf.snp_pos)}
                                                </span>
                                                <span
                                                  style={{
                                                    color: "red",
                                                    letterSpacing: "2px",
                                                    fontFamily: "Courier New",
                                                  }}
                                                >
                                                  {tf.snp_alt}
                                                </span>
                                              </p>
                                            </React.Fragment>
                                          }
                                        >
                                          <p>{tf.name + "\n"}</p>
                                        </HtmlTooltip>
                                        // </ListItem>
                                      );
                                    })
                                  }
                                  {/* </List> */}
                                </TableCell>
                              );
                            } else if (column.id === "tf_parsed") {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    fontSize: "1.4rem",
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "dashed",
                                  }}
                                >
                                  {/* <List> */}
                                  {value.map((_tf) => {
                                    console.log(_tf);
                                    return (
                                      // <ListItem>
                                      <HtmlTooltip
                                        title={
                                          <React.Fragment>
                                            <Typography
                                              style={{ fontSize: 16 }}
                                              color="inherit"
                                            >
                                              {_tf.name}
                                            </Typography>
                                            <img
                                              src={
                                                "http://jaspar.genereg.net/static/logos/svg/" +
                                                _tf.jaspar_id +
                                                ".svg"
                                              }
                                              width="200"
                                              height="100"
                                            ></img>
                                          </React.Fragment>
                                        }
                                      >
                                        <p>{_tf.name + "\n"}</p>
                                      </HtmlTooltip>
                                      // </ListItem>
                                    );
                                  })}
                                  {/* </List> */}
                                </TableCell>
                              );
                            } else if (
                              column.id == "promoter" ||
                              column.id == "hic_distal_bin"
                            ) {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ fontSize: "1.4rem" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                  <div />
                                  <Link
                                    href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/range_test/${value}`}
                                    target="_blank"
                                  >
                                    (Download SNP table within this range)
                                  </Link>
                                </TableCell>
                              );
                            } else if (column.id == "snp") {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ fontSize: "1.4rem" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                  <div />
                                  <Link
                                    href={`http://ec2-3-236-122-176.compute-1.amazonaws.com:3000`}
                                    target="_blank"
                                  >
                                    (Download SNP table within this range)
                                  </Link>
                                </TableCell>
                              );
                            } else {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ fontSize: "1.4rem" }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            }
                          })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TextOnlyTooltip
            TransitionComponent={Zoom}
            placement="top-start"
            style={{ fontSize: "2em" }}
            title="Download table"
          >
            <IconButton
              aria-label="cancel"
              // todo
              onClick={() => {
                const csvExporter = new ExportToCsv(tableOptions);
                csvExporter.generateCsv(props.table);
              }}
              style={{
                cursor: "pointer",
                alignText: "left",
                width: "40px",
                zIndex: 88,
              }}
            >
              <SaveIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </TextOnlyTooltip>
          <TablePagination
            classes={{
              toolbar: classes.toolbar,
              caption: classes.caption,
            }}
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            style={{ fontSize: 14, marginTop: -50 }}
          />
        </Paper>
      </div>
    );
  } // the is the end if else
}
