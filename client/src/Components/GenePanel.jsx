import React, { Component } from 'react';
import GeneDialog from "./GeneDialog";
import SnpDialog from "./SnpDialog";
import CellLinePicker from "./CellLinePicker";
import TrackCheckbox from "./TrackCheckbox";
import LocusDialog from "./LocusDialog";
import SubmitButton from "./SubmitButton";
import GeneTextField from "./GeneTextField"
import SpeciesRadioGroup from "./SpeciesRadioGroup"
import { GeneSearchFlow } from "./Config";
import CutoffSelector from "./CutoffSelector"
// import GenePicker from './DiseasePicker';

export default class GenePanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultTracks: [
                // "Loop", "SNP", "Gene_model", "HiC", "ChromHMM", "LD", "ATAC", "H3K27ac", "H3K4me3", "H3K4me1"
            ],
            cell_types: Object.keys(GeneSearchFlow),
            selected_cell_type: "",
            available_tracks: [],  
            gene: "",
        }
    }
    AllTracks = ["Gene_model", "DNase", "Loop", "SNP", "H3K27ac", "H3K4me3", "H3K4me1", "H3K9ac", "ATAC", "ChromHMM"]

    handleSelectCellType = (value) => {
        this.setState({ selected_cell_type: value })
        console.log("I just select cell type" + value)
        let cellType = value.split("_")[0]
        this.props.setCellType(cellType)
        this.setState({ available_tracks: GeneSearchFlow[value] })
        console.log("this cell line has tracks: " + GeneSearchFlow[value])
    }

    handleSetGene = (value)  =>{
        // console.log("now gene is " + value)
        console.log("gene name")
        console.log(value)
        this.setState({ gene: value })
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Gene symbol</div>
                {/* <SearchByRadioGroup handleSearchBy = {this.handleSearchBy}/> */}
                <GeneTextField handleSetGene={this.handleSetGene}/> 
                {/* auto complete won't work for gene as too many of them crashes the browser */}
                {/* <GenePicker handleSetGene={this.handleSetGene} /> */}

                {/* <div style={{ marginTop: 8, fontSize: "1.25rem", marginBottom: -10 }} >Step 2.</div>
                <SpeciesRadioGroup /> */}
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Cell type / Tissue</div>
                <CellLinePicker disabled={this.state.cell_types.length === 0} cell_types={this.state.cell_types} handleSelectCellType={this.handleSelectCellType} />
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }}>Tracks</div>
                <TrackCheckbox disabledTracks={this.AllTracks.filter(value => -1 === this.state.available_tracks.indexOf(value))} available_tracks={this.state.available_tracks} setTracks={this.props.setTracks} />
                <div style={{ marginTop: 12 }} />
                <SubmitButton 
                style={{marginTop:10}}
                search="gene"
                gene={this.state.gene}
                turnOffWelcome={this.props.turnOffWelcome}
                getTableData={this.props.getTableData}
                cell={this.state.selected_cell_type}
                disease=""
                />
            </div>
        )
    }
}
