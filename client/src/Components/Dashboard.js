import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchPanel from "./SearchPanel";
import Github from '@material-ui/icons/GitHub';
import _ from "lodash";
import Tooltip from '@material-ui/core/Tooltip';
import 'higlass/dist/hglib.css';
import Welcome from './Welcome';
import TableView from "./TableView";
import EmailIcon from '@material-ui/icons/Email';
import PollIcon from '@material-ui/icons/Poll';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HiGlassTracksDialog from "./HiGlassTracksDialog";
import Eqtlwindow from "./EqtlWindow"
import {hMSC_ViewConfig, OB_ViewConfig, OC_ViewConfig} from "./TemplateViewConfig";
import { trackPromise } from 'react-promise-tracker';
import Spinner from "./Spinner";
import SnpDialog from './SnpDialog';


function Copyright() {


  return (
    <Typography style={{ fontSize: 13 }} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.google.com">
        Yi-Hsiang Hsu lab @ HMS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 200;
const appBarHeight = 50;


const TextOnlyTooltip = withStyles({
  tooltip: {
    fontSize: "1.5em"
  }
})(Tooltip);

const defaultOptions = {
  defaultTrackOptions: {
    all: {
      showTooltip: true,
    },
    trackSpecific: {
      'heatmap': {
        showTooltip: true,
      }
    }
  },
  renderer: "webGL",
  sizeMode: "default",
  globalMousePosition: true,
};


// // defaultViewConfig is a frame specifying style of the view, track sources, editable and such. It contains no each track info.
// const defaultViewConfig = {
//   "editable": true,
//   "zoomFixed": false,
//   "trackSourceServers": [
//     "http://10.238.31.237:8000/api/v1",
//     "//higlass.io/api/v1",
//     "https://resgen.io/api/v1/gt/paper-data"
//   ],
//   "exportViewUrl": "/api/v1/viewconfs",
//   "views": [
//     {
//       "editable": true,
//       "initialXDomain": [
//         1181758372.9613872,
//         1186426661.04984
//       ],
//       "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
//       "genomePositionSearchBox": {
//         "autocompleteServer": "//higlass.io/api/v1",
//         "autocompleteId": "QDutvmyiSrec5nX4pA5WGQ",
//         "chromInfoServer": "//higlass.io/api/v1",
//         "chromInfoId": "hg19",
//         "visible": true
//       },
//       "tracks": {
//         "center": [

//         ],
//         "left": [],
//         "right": [],
//         "top": [

//         ],
//         "bottom": [
//         ],
//         "whole": [],
//         "gallery": []
//       },
//       "uid": "EeRsoR8CQ1uXuQdP7STidg",
//       "layout": {
//         "x": 0,
//         "y": 0,
//         "w": 12,
//         "h": 14
//       },
//       "initialYDomain": [
//         1737490463.3879144,
//         1737789774.5166466
//       ]
//     }
//   ],
//   "zoomLocks": {
//     "locksByViewUid": {},
//     "locksDict": {}
//   },
//   "locationLocks": {
//     "locksByViewUid": {},
//     "locksDict": {}
//   },
//   "valueScaleLocks": {
//     "locksByViewUid": {},
//     "locksDict": {}
//   }
// }

// const templateViewConfig = _.cloneDeep(hMSC_ViewConfig)


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: 91,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "fixed",
    height: appBarHeight
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 90,
    height: "100%"
  },
  drawerPaper: {
    marginTop: 0,
    width: drawerWidth,
    height: "100%"
  },

  // drawerPaper: {
  //   position: 'fixed',
  //   whiteSpace: 'nowrap',
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    minHeight: 300,
    height: window.innerHeight,
    // width:window.width,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    width: "90%"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function Dashboard() {
  const classes = useStyles();


  // UI STATES

  // default material ui drawer open state
  const [open, setOpen] = React.useState(false);

  // track view popup window display state
  const [tracksOpen, setTracksOpen] = React.useState(false);

  // welcome page display state
  const [welcome, setWelcome] = React.useState(true);

  // eqtl searchable text table display state
  const [eqtlWindowOpen, setEqtlWindowOpen] = React.useState(false);

  // DATA STATES

  // states for alpha for p values FDR and beta/or and keeping rows if SNP is in a promoter region
  const ALPHA = [1, 0.5, 0.05, 0.01]
  const DEFAULT_ALPHA = 1
  const [cutoff, setCutoff] = React.useState({
    // HiC_FDR: DEFAULT_ALPHA
  });
  const [keepSNPinPromoters, SetKeepSNPPromoters] = React.useState(true)
  const SetKeepSNPinPromoters = () => {
    SetKeepSNPPromoters(!keepSNPinPromoters)
  }

  // table data, row on click value for row info card, and view config for track view
  const [cellType, setCellType] = React.useState("")
  const [rowValue, setRowValue] = React.useState({});
  const [tableData, setTableData] = React.useState([]);
  const [viewConfig, setViewConfig] = React.useState(hMSC_ViewConfig);
  const [eqtlInfo, setEqtlInfo] = React.useState("");
  const [table, setTable] = React.useState([])
  // const [filteredRows, setFilteredRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [n_snp, setN_snp] = React.useState(0);
  const [gene_summary_info, setGene_summary_info] = React.useState("");
  const [disease_length, setDisease_length]=React.useState(0);
  // const [disease_summary_info, setDisease_summary_info]=React.useState("");
  const [disease_efo_id, setDisease_efo_id]=React.useState("");
  const [disease_trait, setDisease_trait]=React.useState("");



  // FDR range count data cnt0 is NA count, cnt1 is 0.5-1, cnt2 is 0.05-0.5, cnt3 is 0-0.05
  const [cnt, setCnt] = React.useState([0, 0, 0, 0])

  // tracks to display state
  const [tracks, setTracks] = React.useState(["Gene_model", "Loop", "SNP", "H3K27ac", "H3K4me3", "H3K4me1", "DNase", "ATAC", "ChromHMM"])


  // workflow state
  const [wf, setWf] = React.useState("snp");

  // UI HANDLERS
  const changeHeightLarge = (e) => {
    // console.log("mouse over MUSC icon")
    e.target.height = "35";
  }

  const changeHeightSmall = (e) => {
    // console.log("mouse over MUSC icon")
    e.target.height = "25";
  }

  // default handler of drawer from material UI
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // handle welcome window display by clicking on MUSC icon
  const turnOnWelcome = () => {
    setWelcome(true);
  };
  const turnOffWelcome = () => {
    setWelcome(false);
    // console.log("welcome is off");
  };

  // handle which work flow to use, search by SNP, Gene, Disease
  const handleWf = (e) => {
    setWf(e.currentTarget.value);
  };


  // DATA HANDLERS
  // wrapper fn to open eqtl info window and set the text in it
  const handleEqtl = (eqtl_info) => {
    setEqtlInfo(eqtl_info)
    setEqtlWindowOpen(true)
  }


  // wrapper function to handle change viewconfig for track view display, triggered when row click
  const handleChangeViewConfig = (value) => {
    // console.log("I am handling view config change")
    // console.log(value)
    setViewConfig(value);
    setTracksOpen(true);
    // console.log("track view should be opened.")
  }

  const handleChangeRowValue = (value) => {
    // console.log(value)
    setRowValue(value)
  }

  // handle use the cancel icon to close the trackview
  const handleTracksClose = () => {
    setTracksOpen(false);
  };

  // handle selection of tracks to show, todo 
  const handleChangeTracks = (trackList) => {
    setTracks(trackList)
    let tmp = _.cloneDeep(viewConfig)
    tmp.views.tracks.top = [];
    for (let track of viewConfig.views.tracks.top) {
      if (track.tilesetUid === "NyITQvZsS_mOFNlz5C2LJg" ||
        track.tilesetUid === "P0PLbQMwTYGy-5uPIQid7A") {
        tmp.views.tracks.top.push(_.cloneDeep(track));
        continue;
      }
      for (let selected of trackList) {
        if (track.tilesetUid.toUpperCase().includes(selected.toUpperCase())) {
          tmp.views.tracks.top.push(_.cloneDeep(track))
        }
        // todo: add the check for track with more than one series like the loop track, which contains a grey all sig loop and purple final loop result
      }
    }
  }

  const chr_pos_map = {
    1: 0,
    2: 248956422,
    3: 491149951,
    4: 689445510,
    5: 879660065,
    6: 1061198324,
    7: 1232004303,
    8: 1391350276,
    9: 1536488912,
    10: 1674883629,
    11: 1808681051,
    12: 1943767673,
    13: 2077042982,
    14: 2191407310,
    15: 2298451028,
    16: 2400442217,
    17: 2490780562,
    18: 2574038003,
    19: 2654411288,
    20: 2713028904,
    21: 2777473071,
    22: 2824183054,
    'X': 2875001522,
    'Y': 3031042417
  }

  // const createDataGene = (gene, strand, transcript_id, chr, start, end, hic_promoter_bin, hic_distal_bin, atac, chromhmm, reftss, tss, ccre, tf) => {
  //   let viewConfig = _.cloneDeep(templateViewConfig);
  //   viewConfig.views[0].initialXDomain[0] = chr_pos_map[chr] + start - 100000
  //   viewConfig.views[0].initialXDomain[1] = chr_pos_map[chr] + start + 100000
  //   viewConfig.views[0].initialYDomain[0] = chr_pos_map[chr] + start - 100000
  //   viewConfig.views[0].initialYDomain[1] = chr_pos_map[chr] + start + 100000
  //   let promoter = chr + ":" + start + "-" + end
  //   let tf_parsed = []
  //   if (tf !== "." && tf !== "") {
  //     try {
  //       let l = tf.split(";")
  //       for (let _tf of l) {
  //         let mbpsidRe = RegExp('mbpsid:(.*?),')
  //         let tfRe = RegExp('TF:(.*?),')
  //         let regionRe = RegExp('region:(.*?),')
  //         let refseqRe = RegExp('refseq:(.*?),')
  //         // let bitscoreRe = RegExp('bit-score:(.*?)')
  //         let mbpsid = mbpsidRe.exec(_tf)[1]
  //         let name = tfRe.exec(_tf)[1]
  //         let region = regionRe.exec(_tf)[1]
  //         let refseq = refseqRe.exec(_tf)[1]
  //         // let bit_score = bitscoreRe.exec(_tf)[1]
  //         let tmp = {
  //           mbpsid: mbpsid,
  //           tf: name,
  //           region: region,
  //           refseq: refseq,
  //         }
  //         tf_parsed.push({
  //           name: tmp.tf,
  //           jaspar_id: tmp.mbpsid,
  //           seq: tmp.refseq
  //         })
  //       }
  //     }
  //     catch {
  //       console.log("no hic data")
  //     }
  //   }
  //   let tmp_chromhmm = chromhmm.split(";")
  //   let chromhmm_parsed_arr = []
  //   for (let s of tmp_chromhmm) {
  //     if (s.includes('Prom')) {
  //       chromhmm_parsed_arr.push(s)
  //     }
  //   }
  //   let chromhmm_parsed = chromhmm_parsed_arr.join(",")


  //   return { gene, strand, transcript_id, chr, start, end, promoter, hic_promoter_bin, hic_distal_bin, atac, chromhmm_parsed, reftss, tss, ccre, tf_parsed, viewConfig }
  // }


  const createDataGene = (chr, start, end, transcript, tss, gene_1, strand, reftss, ccre, type, openchromatin, chromhmm, hic_promoter_bin, hic_distal_bin, hic_info, gene_tpm, transcript_tpm) => {
    let viewConfig = _.cloneDeep(cellType.startsWith("hMSC") ? hMSC_ViewConfig: cellType.startsWith("OB")? OB_ViewConfig: OC_ViewConfig);
      viewConfig.views[0].initialXDomain[0] = chr_pos_map[chr] + start - 100000
      viewConfig.views[0].initialXDomain[1] = chr_pos_map[chr] + start + 100000
      viewConfig.views[0].initialYDomain[0] = chr_pos_map[chr] + start - 100000
      viewConfig.views[0].initialYDomain[1] = chr_pos_map[chr] + start + 100000
    let gene=gene_1 + " ("+ gene_tpm +")"
    let transcript_id=transcript + " ("+ transcript_tpm + ")"
    //let promoter = start + "-" + end
    let promoter = chr + ":" + start + "-" + end
    // let promoter=start + "-" + end
    //let hic_promoter_bin=hic_promoter_bin
    let hic_distal_regulatory_bin=hic_distal_bin
    let open_chromatin=openchromatin
    //let chromhmm=chromhmm
    //let reftss=reftss
    let encode_ccre=ccre
    let hic_infomation=hic_info
    return {gene, strand, transcript_id, promoter, hic_promoter_bin, hic_distal_regulatory_bin, open_chromatin, chromhmm, reftss, encode_ccre, hic_infomation}
  }



  // func to generate a row obj for snp or disease table
  const createDataSNP = (rsid, snp_chr, snp_start, snp_end, ref, alt, GeneName_ID_Ensembl, GeneInfo_DistNG_Ensembl, Region_Ensembl, snp_chromhmm, snp_openchrom, snp_tf,
    hic_distal_bin, hic_promoter_bin, promoter_chr, promoter_start, promoter_end, promoter_tx_name, promoter_tx_tpm, promoter_gene_name, promoter_gene_tpm, reftss, ccre, promoter_chromhmm, promoter_openchrom,
    kg_AFR, kg_ALL, kg_AMR, kg_EAS, kg_EUR, kg_SAS,
    gnomAD_AFR, gnomAD_AMR, gnomAD_All, gnomAD_EAS, gnomAD_NFE, gnomAD_SAS) => {
    let viewConfig = _.cloneDeep(cellType.startsWith("hMSC") ? hMSC_ViewConfig: cellType.startsWith("OB")? OB_ViewConfig: OC_ViewConfig);
    viewConfig.views[0].initialXDomain[0] = chr_pos_map[snp_chr] + snp_start - 100000
    viewConfig.views[0].initialXDomain[1] = chr_pos_map[snp_chr] + snp_start + 100000
    console.log(viewConfig)
    // let viewConfig = {}
    let snp_id = snp_chr + "-" + snp_start + "-" + ref + "-" + alt
    let snp_region = Region_Ensembl
    let gene = GeneName_ID_Ensembl
    let gene_distance = GeneInfo_DistNG_Ensembl
    let promoter_region = promoter_chr !== ""? promoter_chr + "-" + promoter_start + "-" + promoter_end : ""
    let promoter_tx = promoter_tx_name!=="" ? promoter_tx_name + "(" + promoter_tx_tpm + ")" : ""
    let promoter_gene = promoter_gene_name !== "" ? promoter_gene_name + "(" + promoter_gene_tpm + ")" : ""

    let maf = {
      kg_AFR: kg_AFR !== null ? kg_AFR : 0, kg_ALL: kg_ALL !== null ? kg_ALL : 0, kg_AMR: kg_AMR !== null ? kg_AMR : 0, kg_EAS: kg_EAS !== null ? kg_EAS : 0, kg_EUR: kg_EUR !== null ? kg_EUR : 0, kg_SAS: kg_SAS !== null ? kg_SAS : 0,
      gnomAD_AFR: gnomAD_AFR, gnomAD_AMR: gnomAD_AMR, gnomAD_All: gnomAD_All, gnomAD_EAS: gnomAD_EAS, gnomAD_NFE: gnomAD_NFE, gnomAD_SAS: gnomAD_SAS
    }
    return { rsid, snp_id, snp_region, gene, gene_distance, snp_chromhmm, snp_openchrom,
       snp_tf, hic_distal_bin, hic_promoter_bin, promoter_region, promoter_tx, promoter_gene,
        reftss, ccre, promoter_chromhmm, promoter_openchrom, maf, viewConfig, };
  }

  // func to generate a row obj for disease table
  const createDataDisease = (chr, start, ref, alt, rsid, risk_allele, region_ensembel, 
    mapped_trait, reported_gene, p_value, or_beta, ci95, genename_id_ensembl, 
    study_accession, geneinfo_distng_ensembl, chromhmm_e026_25, openchromatin_hmsc, 
    atac_mbps_hmsc_day1, sighic_hmsc) => {
    let snp=rsid
    let snp_id="Ch"+chr + "-" + start + "-" + ref + "-" + alt
    let snp_region=region_ensembel !== "" ? region_ensembel.split(";")[0]:""
    let reported_trait=mapped_trait
    let gene=genename_id_ensembl
    let ci=ci95
    let gene_distance=geneinfo_distng_ensembl
    let chromhmm=chromhmm_e026_25
    let open_chromatin_region=openchromatin_hmsc
    let tf_footprinting=atac_mbps_hmsc_day1
    let hic_regulatory_bin=sighic_hmsc
     return {snp, snp_id, risk_allele, p_value, or_beta, ci, snp_region,
       reported_gene, reported_trait, gene, study_accession, gene_distance, 
       chromhmm, open_chromatin_region, tf_footprinting, hic_regulatory_bin};
   }


  const parse_hic = (hic) => {
    // example
    // RegulatoryBin:chr6:33566000:33568000,RegulatoryID:interaction83980_chr6_bin1,
    // PromoterBin:chr6:33432000:33434000,PromoterID:interaction83980_chr6_bin2,
    // InteractionReads:6.000000,LogP:-7.437166,FDR:1.000000,
    // TargetGene:Gene:SYNGAP1,Transcript:ENST00000645250.1,
    // TxtStart:33431910,Gene:SYNGAP1,Transcript:ENST00000428982.4,TxtStart:33431730	
    // console.log(hic)

    let regulatory_bin = ""
    let promotor_bin = ""
    let reads = ""
    let LogP = ""
    let HiC_FDR = ""
    let target_gene = ""
    if (hic === undefined || hic === null || hic === "") {
      return [regulatory_bin, promotor_bin, reads, LogP, HiC_FDR, target_gene]
    } else {
      let regRe = RegExp('RegulatoryBin:(.*?),')
      let proRe = RegExp('PromoterBin:(.*?),')
      let readsRe = RegExp('Reads:(.*?),')
      let logpRe = RegExp('LogP:(.*?),')
      let fdrRe = RegExp('FDR:(.*?),')
      let geneRe = RegExp('Gene:(.*?),')
      try {
        regulatory_bin = regRe.exec(hic)[1]
        promotor_bin = proRe.exec(hic)[1]
        reads = parseInt(readsRe.exec(hic)[1])

        // actually this has been converted to pval from log
        LogP = 10 ** parseFloat(logpRe.exec(hic)[1])

        HiC_FDR = parseFloat(fdrRe.exec(hic)[1])
        target_gene = geneRe.exec(hic)[1].substring(5)
      } catch {
        console.log("no hic data")
      }

      return [regulatory_bin, promotor_bin, reads, LogP, HiC_FDR, target_gene]
    }
  }

  // const parse_hic = (hic) => {
  //   // example
  //   // RegulatoryBin:chr6:33566000:33568000,RegulatoryID:interaction83980_chr6_bin1,
  //   // PromoterBin:chr6:33432000:33434000,PromoterID:interaction83980_chr6_bin2,
  //   // InteractionReads:6.000000,LogP:-7.437166,FDR:1.000000,
  //   // TargetGene:Gene:SYNGAP1,Transcript:ENST00000645250.1,
  //   // TxtStart:33431910,Gene:SYNGAP1,Transcript:ENST00000428982.4,TxtStart:33431730	
  //   // console.log(hic)

  //   let regulatory_bin = ""
  //   let promotor_bin = ""
  //   let reads = ""
  //   let LogP = ""
  //   let HiC_FDR = ""
  //   let target_gene = ""
  //   if (hic === undefined || hic === null || hic === "") {
  //     return [regulatory_bin, promotor_bin, reads, LogP, HiC_FDR, target_gene]
  //   } else {
  //     let regRe = RegExp('RegulatoryBin:(.*?),')
  //     let proRe = RegExp('PromoterBin:(.*?),')
  //     let readsRe = RegExp('Reads:(.*?),')
  //     let logpRe = RegExp('LogP:(.*?),')
  //     let fdrRe = RegExp('FDR:(.*?),')
  //     let geneRe = RegExp('Gene:(.*?),')
  //     try {
  //       regulatory_bin = regRe.exec(hic)[1]
  //       promotor_bin = proRe.exec(hic)[1]
  //       reads = parseInt(readsRe.exec(hic)[1])

  //       // actually this has been converted to pval from log
  //       LogP = 10 ** parseFloat(logpRe.exec(hic)[1])

  //       HiC_FDR = parseFloat(fdrRe.exec(hic)[1])
  //       target_gene = geneRe.exec(hic)[1].substring(5)
  //     } catch {
  //       console.log("no hic data")
  //     }

  //     return [regulatory_bin, promotor_bin, reads, LogP, HiC_FDR, target_gene]
  //   }
  // }
  const parse_gwas = (gwas_str) => {
    let traitRe = RegExp('Trait=(.*?),')
    let pRe = RegExp('P-value=(.*?),')
    let or_betaRe = RegExp('Beta=(.*?);')
    let gwas_trait = ""
    let gwas_p = ""
    let gwas_or_beta = ""

    if (gwas_str === undefined || gwas_str === "") {
      return [gwas_trait, gwas_p, gwas_or_beta]
    }
    else {
      let gwas_trait = traitRe.exec(gwas_str)[1];
      let gwas_p = +pRe.exec(gwas_str)[1];
      // gwas_p = gwas_p.toExponential();
      let gwas_or_beta = +or_betaRe.exec(gwas_str + ";")[1];
      return [gwas_trait, gwas_p, gwas_or_beta]
    }
  }

  // when the table content changes, handle the rows, filtered rows, and table(the downloadable)
  const getTableDatum = (wf, tableData,) => {

    // counts for the summary card
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let newRows = [];
    let newTable = [];
    let keySet = new Set();
    let n_snp_set = new Set()
    if (wf === "snp") {

      console.log("current cellType is" + cellType)
      let cellType_abbr = cellType.split(":")[0]


      for (let snp of tableData.snps) {
        if (tableData.promoters.length == 0) {
          let row = createDataSNP(
            snp.RSID,
            snp["#Chr"],
            snp.Start,
            snp.End,
            snp.Ref,
            snp.Alt,
            snp.GeneName_ID_Ensembl,
            snp.GeneInfo_DistNG_Ensembl,
            //obj.Region,
            snp.Region_Ensembl,
            // obj.gwas_gene,
            // snp.GWAS_Catalog,
            //obj.gwasCatalog,
            // obj.gwas_p,
            // obj.gwas_or_beta,
            // obj.gwasCatalog,
            // obj.AAChange_Ensembl,
            //homer,
            //atac,
            //mpbs,
            //chromhmm,
            // obj.SigHic_hMSC,
            snp.chromHMM_E026_25,
            snp.OpenChromatin_hMSC,
            snp['ATAC-MBPS_hMSC-Day1'],

            // promoter.HiC_Distal_bin,
            // promoter.HiC_Promoter_bin,
            // promoter.Chr,
            // promoter.Start,
            // promoter.End,
            // promoter.Transcript,
            // promoter.Transcript_TPM,
            // promoter.Gene,
            // promoter.Gene_TPM,
            // promoter.RefTSS,
            // promoter["ENCODE-cCRE-PLS"],
            // promoter.ChromHMM,
            // promoter.OpenChromatin,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',

            snp['1000g_AFR'],
            snp['1000g_ALL'],
            snp['1000g_AMR'],
            snp['1000g_EAS'],
            snp['1000g_EUR'],
            snp['1000g_SAS'],
            snp.gnomAD_AFR,
            snp.gnomAD_AMR,
            snp.gnomAD_All,
            snp.gnomAD_EAS,
            snp.gnomAD_NFE,
            snp.gnomAD_SAS
          )

          // handle counts for Hi-C interactions FDR falls into different range 
          // used for the summary card 
          if (row.HiC_FDR === "") {
            cnt0 += 1;
          } else if (!keySet.has(row.snp_bin + row.interact_bin)) {
            if (0 <= row.HiC_FDR <= 0.05) {
              cnt3 += 1;
            } else if (0.5 >= row.HiC_FDR >= 0.05) {
              cnt2 += 1;
            } else {
              cnt1 += 1;
            }
            keySet.add(row.snp_bin + row.interact_bin)
          }

          n_snp_set.add(row.rsid)

          newRows.push(row)
          let tableRow = _.cloneDeep(row)
          // console.log(row)
          delete tableRow.viewConfig
          newTable.push(tableRow)
        } else {
          for (let promoter of tableData.promoters) {
            // todo: carefully examine the data and populate row content
            // let homer = ""
            // let atac = ""
            // let mpbs = ""
            // let chromhmm = ""
            // if (Object.keys(obj).includes(cellType_abbr)) {
            //   homer = obj[cellType_abbr].HomerSig_Regulaotry_Promoter + " " + obj[cellType_abbr].HomerSig_Promoter_Regulaotry
            //   atac = obj[cellType_abbr].ATAC
            //   mpbs = obj[cellType_abbr].Footprinting_MPBS
            //   chromhmm = obj[cellType_abbr].ChromHMM
            // }
            //console.log('display...snps')
            //console.log(obj)


            let row = createDataSNP(
              snp.RSID,
              snp["#Chr"],
              snp.Start,
              snp.End,
              snp.Ref,
              snp.Alt,
              snp.GeneName_ID_Ensembl,
              snp.GeneInfo_DistNG_Ensembl,
              //obj.Region,
              snp.Region_Ensembl,
              // obj.gwas_gene,
              // snp.GWAS_Catalog,
              //obj.gwasCatalog,
              // obj.gwas_p,
              // obj.gwas_or_beta,
              // obj.gwasCatalog,
              // obj.AAChange_Ensembl,
              //homer,
              //atac,
              //mpbs,
              //chromhmm,
              // obj.SigHic_hMSC,
              snp.chromHMM_E026_25,
              snp.OpenChromatin_hMSC,
              snp['ATAC-MBPS_hMSC-Day1'],

              promoter.HiC_Distal_bin,
              promoter.HiC_Promoter_bin,
              promoter.Chr,
              promoter.Start,
              promoter.End,
              promoter.Transcript,
              promoter.Transcript_TPM,
              promoter.Gene,
              promoter.Gene_TPM,
              promoter.RefTSS,
              promoter["ENCODE-cCRE-PLS"],
              promoter.ChromHMM,
              promoter.OpenChromatin,

              snp['1000g_AFR'],
              snp['1000g_ALL'],
              snp['1000g_AMR'],
              snp['1000g_EAS'],
              snp['1000g_EUR'],
              snp['1000g_SAS'],
              snp.gnomAD_AFR,
              snp.gnomAD_AMR,
              snp.gnomAD_All,
              snp.gnomAD_EAS,
              snp.gnomAD_NFE,
              snp.gnomAD_SAS
            )

            // handle counts for Hi-C interactions FDR falls into different range 
            // used for the summary card 
            if (row.HiC_FDR === "") {
              cnt0 += 1;
            } else if (!keySet.has(row.snp_bin + row.interact_bin)) {
              if (0 <= row.HiC_FDR <= 0.05) {
                cnt3 += 1;
              } else if (0.5 >= row.HiC_FDR >= 0.05) {
                cnt2 += 1;
              } else {
                cnt1 += 1;
              }
              keySet.add(row.snp_bin + row.interact_bin)
            }

            n_snp_set.add(row.rsid)

            newRows.push(row)
            let tableRow = _.cloneDeep(row)
            // console.log(row)
            delete tableRow.viewConfig
            newTable.push(tableRow)
          }
        }

      }


      // console.log("new viewconfig")
      if (newRows.length > 0) {
        console.log(newRows[0].viewConfig)
      }

    } else if(wf==="disease"){

      console.log("current cellType is" + cellType)
      let cellType_abbr = cellType.split(":")[0]
      
      console.log('testing....disease....')
      let tableData_length=Object.keys(tableData).length;
      console.log(tableData_length);
     
       // set summary card information
      setDisease_length(tableData_length);
          
      if (tableData[0]){
        // setDisease_summary_info(tableData[0]);
        setDisease_efo_id(tableData[0]["MAPPED_TRAIT_URI"].split("efo/")[1]);
        setDisease_trait(tableData[0]["Disease_trait"]);
      }

      

      for (let item of tableData){
        let row = createDataDisease(  
          item["#Chr"],item.Start, item.Ref, item.Alt, item.RSID, item.Risk_allele, 
          item.Region_Ensembl, item.MAPPED_TRAIT, item.Reported_gene, item["P-value"],
          item["OR-Beta"], item.CI95, item.GeneName_ID_Ensembl, item["STUDY_ACCESSION"],
          item["GeneInfo_DistNG_Ensembl"], item["chromHMM_E026_25"], item["OpenChromatin_hMSC"],
          item["ATAC-MBPS_hMSC-Day1"], item["SigHiC-hMSC"]
        )
          

          
        newRows.push(row)
        let tableRow = _.cloneDeep(row)
        // console.log(row)
        delete tableRow.viewConfig
        newTable.push(tableRow)
      }

      


      

      // console.log("new viewconfig")
      // if (newRows.length > 0) {
      //   console.log(newRows[0].viewConfig)
      // }






    }else {
      console.log('this is for gene...')
      console.log("current cellType is" + cellType)
      let cellType_abbr = cellType.split(":")[0]

      // gene, strand, transcript_id, chr, start, end, promoter, atac, chromhmm, reftss, ccre, viewConfig 

      for (let obj of tableData.promoters) {
        //console.log(obj)
        let row = createDataGene(
          obj.Chr,
          obj.Start,
          obj.End,
          obj.Transcript,
          obj.TSS,
          obj.Gene,
          obj.Strand,
          obj.RefTSS,
          obj["ENCODE-cCRE-PLS"],
          obj.Type,
          obj.OpenChromatin,
          obj.ChromHMM,
          obj.HiC_Promoter_bin,
          obj.HiC_Distal_bin,
          obj.HiC_info,
          obj.Gene_TPM,
          obj.Transcript_TPM
          
          //obj.Footprinting,
        )
        //console.log(row)
        
        

        newRows.push(row)
        let tableRow = _.cloneDeep(row)
        // console.log(row)
        delete tableRow.viewConfig
        newTable.push(tableRow)
      }

      if (tableData.gene[0]){
        setGene_summary_info(tableData.gene[0])
      }
      
      console.log(tableData.gene[0])
      


      // console.log("new viewconfig")
      // if (newRows.length > 0) {
      //   console.log(newRows[0].viewConfig)
      // }

    }

    // setFilteredRows(newFilteredRows)
    setRows(newRows);
    setTable(newTable);
    setCnt([cnt0, cnt1, cnt2, cnt3])
    setN_snp(n_snp_set.size)
    //  console.log(newRows)
    //  console.log(newTable)
  }

  // handle getting table data from express server
  const getTableData = (cell, disease, snp = "", gene = "", search = "disease") => {
    // todo: need to specify this is disease table
    // todo: sort the table based on something, i.e. gwas
    // todo: get cell line specific data, i.e. fantom 5, ATAC data
    // getTableDatum("", []);
    if (search === "disease") {
      if (disease.includes(":")) {
        let tmp = disease.split(":")
        tmp = tmp[0]
        tmp = tmp.split(" ")
        disease = tmp.join("_")
      }
      console.log(disease)
      trackPromise(
        fetch(`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/disease_test3/${disease}`)
          .then(response => {
            return response.text()
          })
          .then(data => data ? JSON.parse(data) : {})
          .then(data => {
            console.log("table generated...for disease")
            console.log(data)
            // setTableData(data)
            getTableDatum("disease", data)
          }, (error) => {
            console.log(error);
          }
          ))
    } else if (search === "snp") {
      // console.log(snp)
      trackPromise(
        fetch(`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/snp2promoter/${snp}_${cell}`)
          .then(response => {
            return response.text()
          })
          .then(data => data ? JSON.parse(data) : {})
          .then(data => {
            console.log("table generated....")
            console.log(data)
            getTableDatum("snp", data)
          }, (error) => {
            console.log(error);
          }
          ))
    } else if (search === "gene") {
      trackPromise(
        fetch(`http://ec2-3-236-122-176.compute-1.amazonaws.com:8080/api/gene/${gene}_${cell}`)
          .then(response => {
            return response.text()
          })
          .then(data => data ? JSON.parse(data) : {})
          .then(data => {
            console.log("table generated...")
            console.log(gene)
            console.log(data)
            getTableDatum("gene", data)
          }, (error) => {
            console.log(error);
          }
          )
      )
    }

  }


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="white" position="absolute" className={clsx(classes.appBar, false && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            size='medium'
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            className={clsx(classes.menuButton, false && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <img height="25" src={require('../logo512.png')} onClick={turnOnWelcome} onMouseLeave={changeHeightSmall} onMouseOver={changeHeightLarge} />

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

          </Typography>
          <TextOnlyTooltip placement="top-start" style={{ zIndex: 88 }} title="Data">
            <IconButton color="inherit">
              <Badge color="secondary">
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                  <PollIcon style={{ fontSize: 25 }} />
                </a>

              </Badge>
            </IconButton>
          </TextOnlyTooltip>
          <TextOnlyTooltip placement="top-start" style={{ zIndex: 88 }} title="Wiki page">
            <IconButton color="inherit">
              <Badge color="secondary">
                <a href="https://github.com/yzhang250/Musculoskeletal-epigenome-Browser#musculoskeletal-epigenome-browser" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                  <LocalLibraryIcon style={{ fontSize: 25 }} />
                </a>
              </Badge>
            </IconButton>
          </TextOnlyTooltip>
          <TextOnlyTooltip placement="top-start" style={{ zIndex: 88 }} title="Github page">
            <IconButton color="inherit">
              <Badge color="secondary">
                <a href="https://github.com/yzhang250/Musculoskeletal-epigenome-Browser" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                  <Github style={{ fontSize: 25 }} />
                </a>
              </Badge>
            </IconButton>
          </TextOnlyTooltip>
          <TextOnlyTooltip placement="top-start" style={{ zIndex: 88 }} title="Contact us">
            <IconButton color="inherit">
              <Badge color="secondary">
                <a href="mailto:yzhang250@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                  <EmailIcon style={{ fontSize: 25 }} />
                </a>

              </Badge>
            </IconButton>
          </TextOnlyTooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        variant="persistent"
        // classes={{
        //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        // }}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={open}

      >
        <div className={classes.toolbarIcon}>

        </div>

        {/* <Divider/> */}
        <SearchPanel isOpen={open} handleDrawerClose={handleDrawerClose}
          turnOffWelcome={turnOffWelcome}
          turnOnWelcome={turnOnWelcome}
          wf={wf}
          setTracks={setTracks}
          getTableData={getTableData}
          setCutoff={setCutoff}
          keepSNPinPromoters={keepSNPinPromoters}
          SetKeepSNPinPromoters={SetKeepSNPinPromoters}
          cutoff={cutoff}
          setCellType={setCellType}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div style={{ height: appBarHeight - 35 }} />

        {welcome ? <Welcome handleWf={handleWf} handleDrawerOpen={handleDrawerOpen} /> :
          // <Box height="75%" style={{ textAlign: "left", position: "relative", display: "block", padding: 1 }}>
          // </Box>}
          <div>
            <TableView handleChangeViewConfig={handleChangeViewConfig}
              handleChangeRowValue={handleChangeRowValue}
              defaultViewConfig={cellType.startsWith("hMSC") ? hMSC_ViewConfig: cellType.startsWith("OB")? OB_ViewConfig: OC_ViewConfig}
              table={table}
              rows={rows}
              // filteredRows={filteredRows}
              cutoff={cutoff}
              setCutoff={setCutoff}
              keepSNPinPromoters={keepSNPinPromoters}
              wf={wf}
              handleEqtl={handleEqtl}
              cnt={cnt}
              n_snp={n_snp}
              gene_summary_info={gene_summary_info}
              // disease_summary_info={disease_summary_info}
              disease_length={disease_length}
              disease_efo_id={disease_efo_id}
              disease_trait={disease_trait}
            />
            <br />
            <Spinner />
            <Eqtlwindow
              eqtlInfo={eqtlInfo}
              setEqtlWindowOpen={setEqtlWindowOpen}
              eqtlWindowOpen={eqtlWindowOpen}
            />
            <HiGlassTracksDialog
              options={defaultOptions}
              viewConfig={viewConfig}
              tracksOpen={tracksOpen}
              onClose={handleTracksClose}
              rowValue={rowValue}
              tracks={tracks}
            />
          </div>}
        <Box pt={6} style={{ marginTop: -20 }}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}