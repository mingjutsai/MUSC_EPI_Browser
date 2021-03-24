// For validate post method input
const Joi = require("joi");
const path = require("path");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const app = express();
const fs = require("fs");
const { timeStamp } = require("console");

// PORT for production
const port = process.env.PORT || 8080;

// DB Config
mongo_username = "BrowserUser";
mongo_password = "PassWordForBrowser";
// mongo_ip = "localhost";
mongo_ip = "ec2-3-236-139-12.compute-1.amazonaws.com";
mongo_port = "27017";
DB_NAME = "TableView";
MONGO_URI = `${mongo_ip}:${mongo_port}`;
// const db_URI = `mongodb://${MONGO_URI}/${DB_NAME}`;
const db_URI = `mongodb://${mongo_username}:${mongo_password}@${MONGO_URI}/${DB_NAME}`;

// Connect to Mongo
mongoose
  .connect(db_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Define a schema
var AnnotationSchema = new Schema(
  {
    // _id: Schema.Types.ObjectId,
    // RSID: String,
    // Chr: Number,
    // Start: Number,
    // End: Number,
    // Ref: String,
    // Alt: String,
    // Region:String,
    // GeneName_ID_Ensembl: String,
    // AAChange_Ensembl: String,
    // gwasCatalog: String
  },
  { collection: "dbSNP_Annotation" }
);

var Disease2SNPSchema = new Schema({}, { collection: "Disease2SNP" });

var GeneSchema = new Schema({}, { collection: "geneTable" });

var promoter_hMSCSchema = new Schema({}, { collection: "promoter_hMSC" });

var promoter_OBchema = new Schema({}, { collection: "promoter_OB" });

var promoter_OCSchema = new Schema({}, { collection: "promoter_OC" });

let dbSNP_Annotation = mongoose.model("dbSNP_Annotation", AnnotationSchema);

let Disease2SNP = mongoose.model("Disease2SNP", Disease2SNPSchema);

let geneTable = mongoose.model("geneTable", GeneSchema);

let promoter_hMSC = mongoose.model("promoter_hMSC", promoter_hMSCSchema);

let promoter_OB = mongoose.model("promoter_OB", promoter_OBchema);

let promoter_OC = mongoose.model("promoter_OC", promoter_OCSchema);

// get bin id list from a promoter range
const getBinIDs = (chr, start, end, resolution) => {
  let ret = [];
  let s = parseInt(start / resolution) * resolution;
  let e = parseInt(start / resolution) * resolution + resolution;
  while (s != e) {
    ret.push(`${chr}:${s}-${s + resolution}`);
    s += resolution;
  }
  return ret;
};

// CORS-enabled for all origins
app.use(cors());

app.get("/api/tfprinting/", (req, res) => {
  res.sendFile(path.join(__dirname + "/tf_footprinting_template.html"));
});

app.get("/api/tfprinting2/", (req, res) => {
  // console.log('tesing tfprinting2');
  res.sendFile(path.join(__dirname + "/tf_footprinting_template.html"));
});

app.get("/api/snp2promoter/:rsid_cell", async (req, res) => {
  try {
    let rsid_cell = req.params.rsid_cell;

    // example: "rs1313_hMSC"
    let rsid = rsid_cell.split("_")[0];
    let cell = rsid_cell.split("_")[1];

    const snps = await dbSNP_Annotation.find({ RSID: rsid });

    if (cell === "hMSC") {
      let SigHic = snps[0].toJSON()["SigHiC_hMSC"];

      //let promoters = {}

      if (SigHic) {
        let reg_bin_Re = RegExp("RegulatoryBin:(.*?);");
        let reg = reg_bin_Re.exec(SigHic)[1];

        let prom_bin_Re = RegExp("PromoterBin:(.*?)$");
        let prom_bin = prom_bin_Re.exec(SigHic)[1];
        let proms = prom_bin.split(",");
        let promoters = await promoter_hMSC.find({
          $and: [{ HiC_Distal_bin: reg }, { HiC_Promoter_bin: { $in: proms } }],
        });

        res.send({
          snps: snps,
          promoters: promoters,
        });
      } else {
        res.send({
          snps: snps,
          promoters: [],
        });
      }
    } else if (cell === "OB") {
      let SigHic = snps[0].toJSON()["SigHiC_OB"];
      let promoters = {};
      if (SigHic) {
        let reg_bin_Re = RegExp("RegulatoryBin:(.*?);");
        let reg = reg_bin_Re.exec(SigHic)[1];

        let prom_bin_Re = RegExp("PromoterBin:(.*?)$");
        let prom_bin = prom_bin_Re.exec(SigHic)[1];
        let proms = prom_bin.split(",");

        let promoters = await promoter_OB.find({
          $and: [{ HiC_Distal_bin: reg }, { HiC_Promoter_bin: { $in: proms } }],
        });
        res.send({
          snps: snps,
          promoters: promoters,
        });
      } else {
        res.send({
          snps: snps,
          promoters: {},
        });
      }
    } else if (cell === "OC") {
      let SigHic = snps[0].toJSON()["SigHiC_OC"];
      let promoters = {};
      if (SigHic) {
        let reg_bin_Re = RegExp("RegulatoryBin:(.*?);");
        let reg = reg_bin_Re.exec(SigHic)[1];

        let prom_bin_Re = RegExp("PromoterBin:(.*?)$");
        let prom_bin = prom_bin_Re.exec(SigHic)[1];
        let proms = prom_bin.split(",");

        let promoters = await promoter_OC.find({
          $and: [{ HiC_Distal_bin: reg }, { HiC_Promoter_bin: { $in: proms } }],
        });
        res.send({
          snps: snps,
          promoters: promoters,
        });
      } else {
        res.send({
          snps: snps,
          promoters: {},
        });
      }
    } else {
    }

    // res.send(snps)
  } catch (error) {
    //console.error(error);
    //res.json({success: false, error: error.message});
    console.log(error);
  }
});

app.get("/api/snp/:rsid", (req, res) => {
  // console.log(req.params.rsid)
  dbSNP_Annotation.find({ RSID: req.params.rsid }, (err, snp) => {
    if (err) return handleError(err);
    console.log(req.params.rsid + " data is being fetched");
    res.send(snp);
  });
});

app.get("/api/gene_test/:gene", (req, res) => {
  // console.log(req.params.rsid)
  geneTable.find({ GeneName: req.params.gene }, (err, snp) => {
    if (err) return handleError(err);
    console.log(req.params.gene + " data is being fetched");
    res.send(snp);
  });
});

// // original_yzhang_code
// // collection.find({"RSID": { "$in": [ "rs554551566", "rs1414996067" ] }})
// // fetch disease data
// app.get("/api/disease/:disease", async (req, res, next) => {
//   // console.log(req.params.rsid)
//   try {
//     const disease = await Disease2SNP.findOne({ "Disease_trait": req.params.disease })
//     console.log('testing disease');
//     console.log(disease);

//     const snps = await dbSNP_Annotation.find({ "RSID": { "$in": disease.toJSON().SNPs } })
//     res.send(snps)
//   } catch (error) {
//     //console.error(error);
//     //res.json({success: false, error: error.message});
//     next(error);
//   }
// });

// // above original_yzhang_code

app.get("/api/disease/:disease_cell", async (req, res, next) => {
  try {
    let disease_cell = req.params.disease_cell;

    // example: "Hematocrit_hMSC"
    let disease_name = disease_cell.split("_")[0];
    let cell = disease_cell.split("_")[1];
    // console.log(req.params.rsid)

    if (cell === "hMSC") {
      const disease = await Disease2SNP.find({ Disease_trait: disease_name });

      let snpList = [];
      for (let i = 0; i < disease.length; i++) {
        let temp_item = JSON.parse(JSON.stringify(disease[i]));
        let temp_rsid = temp_item.RSID;
        snpList.push(temp_rsid);
      }
      console.log(snpList);

      let output = {};
      let number = 0;
      for (let i = 0; i < snpList.length; i++) {
        // big problem here why snpList[i] do not work?????? 2-16-21
        let snps = await dbSNP_Annotation.find({ RSID: snpList[0] });

        // let SigHic = snps[0].toJSON()["SigHiC_hMSC"]
        let temp2 = JSON.parse(JSON.stringify(snps[0]));
        let SigHic = temp2["SigHiC_hMSC"];

        if (SigHic) {
          let reg_bin_Re = RegExp("RegulatoryBin:(.*?);");
          let reg = reg_bin_Re.exec(SigHic)[1];

          let prom_bin_Re = RegExp("PromoterBin:(.*?)$");
          let prom_bin = prom_bin_Re.exec(SigHic)[1];
          let proms = prom_bin.split(",");
          let promoters = await promoter_hMSC.find({
            $and: [
              { HiC_Distal_bin: reg },
              { HiC_Promoter_bin: { $in: proms } },
            ],
          });

          output[number] = {
            snps: snps,
            promoters: promoters,
          };
          number += 1;
        } else {
          output[number] = {
            snps: snps,
            promoters: [],
          };
          number += 1;
        }
      }
      res.send(output);

      // const snps = await dbSNP_Annotation.find({ "RSID": { "$in": disease.toJSON().SNPs } })
      // res.send(snps)
    } else {
      res.send("hlll");
    }
  } catch (error) {
    //console.error(error);
    //res.json({success: false, error: error.message});
    next(error);
  }
});

//testing disease
app.get("/api/disease_test/:disease", async (req, res, next) => {
  Disease2SNP.findOne({ Disease_trait: req.params.disease }, (err, disease) => {
    if (err) return handleError(err);
    console.log(req.params.disease + " data is being fetched");
    res.send(disease);
  });
});

//testing disease 2
app.get("/api/disease_test2/:disease", async (req, res, next) => {
  try {
    const disease = await Disease2SNP.find({
      Disease_trait: req.params.disease,
    });

    let snpList = [];
    for (let i = 0; i < disease.length; i++) {
      let temp_item = JSON.parse(JSON.stringify(disease[i]));
      let temp_rsid = temp_item.RSID;
      snpList.push(temp_rsid);
    }
    // console.log(snpList)
    let snps = await dbSNP_Annotation.find({ RSID: snpList[1] });

    //  let SigHic = snps[0].toJSON()["SigHiC_hMSC"]

    let temp2 = JSON.parse(JSON.stringify(snps[0]));
    let temp3 = temp2["SigHiC_hMSC"];

    console.log(temp3);

    res.send(temp3);

    // const snps = await dbSNP_Annotation.find({ "RSID": { "$in": disease.toJSON().SNPs } })
    // res.send(snps)
  } catch (error) {
    next(error);
  }
});

//testing disease 3
app.get("/api/disease_test3/:disease", async (req, res, next) => {
  try {
    const disease = await Disease2SNP.find({
      Disease_trait: req.params.disease,
    });
    console.log(disease.length);
    res.send(disease);
  } catch (error) {
    next(error);
  }
});

// fetch data re the gene and cell line
app.get("/api/gene/:gene_cell", async (req, res, next) => {
  //console.log(req.params.rsid)
  try {
    // let entries = []
    // const gene = await Gene2SNP.findOne({ "gene": req.params.gene })

    // const snps_promoter = await dbSNP_Annotation.find({ "RSID": { "$in": gene.toJSON().promoter_snps } })
    // const snps_distal = await dbSNP153_Annotation.find({
    //   "RSID": {
    //     "$in": gene.toJSON().distal_snps
    //     // .slice(0, 10)
    //   }
    // })
    // const snps = snps_promoter.concat(snps_distal)

    // next four line comment on 1-19
    // const gene = await Gene.findOne({ "gene_symbol": req.params.gene })
    // const promoters = await Promoter.find({ "Gene": req.params.gene })

    // let response = { gene: gene, promoters: promoters }

    // res.send(response)

    // next four line comment on 1-20
    // promoter_hMSC.find({ "Gene": req.params.gene }, (err, info) => {
    //   if (err) return handleError(err);
    //   res.send(info);
    // })

    let gene_cell = req.params.gene_cell;
    let gene = gene_cell.split("_")[0];
    let cell = gene_cell.split("_")[1];
    if (cell === "hMSC") {
      let gene_table = await geneTable.find({ GeneName: gene });
      const promoters = await promoter_hMSC.find({ Gene: gene });
      // check_list display all HiC_Promoter_bin with certain gene name.
      // check_list=[];
      // for(let i=0; i<gene_promoter.length; i++){
      //   check_list.push(gene_promoter[i].toJSON()["HiC_Promoter_bin"])
      // }
      // uniqueArray drop the duplicate element in check_list to obtain the unique element in HiC_Promoter_bin
      //   let uniqueArray=[];
      //   uniqueArray = check_list.filter(function(item, pos, self) {
      //     return self.indexOf(item) == pos;
      //  })
      //    console.log(uniqueArray.length);
      // res.send(uniqueArray);
      res.send({ promoters: promoters, gene: gene_table });
    } else if (cell === "OB") {
      let gene_table = await geneTable.find({ GeneName: gene });
      const promoters = await promoter_OB.find({ Gene: gene });
      res.send({ promoters: promoters, gene: gene_table });
    } else if (cell === "OC") {
      let gene_table = await geneTable.find({ GeneName: gene });
      const promoters = await promoter_OC.find({ Gene: gene });
      res.send({ promoters: promoters, gene: gene_table });
    } else {
    }
  } catch (error) {
    //console.error(error);
    //res.json({success: false, error: error.message});
    next(error);
  }
});

//range_test api

app.get("/api/range_test/:coordinates", async (req, res, next) => {
  let coordinates = req.params.coordinates;
  let chr = parseInt(coordinates.split(":")[0].substr(3));
  let tmp = coordinates.split(":")[1];
  let start = parseInt(tmp.split("-")[0]);
  let end = parseInt(tmp.split("-")[1]);

  console.log(chr);
  console.log(start);
  console.log(end);

  // let myquery = { "$and": [{ "Start": { "$gte": start } }, { "Start": { "$lte": end } }, { "Chr": chr }] }
  // let myquery = { $and: [{ "Start": { $gte: start } }, { "Start": { $lte: end } }, { "#Chr": chr }] }
  let myquery = {
    $and: [
      { "#Chr": chr },
      { Start: { $gte: start } },
      { Start: { $lte: end } },
    ],
  };
  console.log(myquery);
  try {
    const snps = await dbSNP_Annotation.findOne(myquery);
    res.send(snps);

    let content = "RSID,Chr,Start,End,Ref,Alt\n";

    let entry = JSON.parse(JSON.stringify(snps));
    for (let key of ["RSID", "#Chr", "Start", "End", "Ref", "Alt"]) {
      content += entry[key] + ",";
    }
    content += "\n";
    // rsids.push(["RSID"])

    console.log(content);

    fs.writeFile(`SNPs_chr${chr}:${start}-${end}.csv`, content, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
      // res.send(snps)
      res.download(`./SNPs_chr${chr}:${start}-${end}.csv`);
    });
  } catch (error) {
    next(error);
  }
});

// fetch data re the gene and cell line
app.get("/api/range/:coordinates", async (req, res, next) => {
  // console.log(req.params.rsid)
  let coordinates = req.params.coordinates;
  // parseInt needs to be removed and have all chr onverted to str
  // let chr = parseInt(coordinates.split(":")[0]);
  let chr = parseInt(coordinates.split(":")[0].substr(3));
  let tmp = coordinates.split(":")[1];
  let start = parseInt(tmp.split("-")[0]);
  let end = parseInt(tmp.split("-")[1]);

  let myquery = {
    $and: [{ Start: { $gt: start } }, { Start: { $lt: end } }, { "#Chr": chr }],
  };
  try {
    // let entries = []

    const snps = await dbSNP_Annotation.find(myquery);
    // const snps_distal = await dbSNP153_Annotation.find({ "RSID": { "$in": gene.toJSON().distal_snps
    // .slice(0, 10)
    // } })

    let content = "RSID,Chr,Start,End,Ref,Alt\n";
    for (let snp of snps) {
      let entry = JSON.parse(JSON.stringify(snp));
      for (let key of ["RSID", "Chr", "Start", "End", "Ref", "Alt"]) {
        content += entry[key] + ",";
      }
      content += "\n";
      // rsids.push(["RSID"])
    }
    console.log(content);

    fs.writeFile(`SNPs_chr${chr}:${start}-${end}.csv`, content, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
      // res.send(snps)
      res.download(`./SNPs_chr${chr}:${start}-${end}.csv`);
    });
  } catch (error) {
    //console.error(error);
    //res.json({success: false, error: error.message});
    next(error);
  }
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
