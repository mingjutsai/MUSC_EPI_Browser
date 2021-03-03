import React, { Component } from 'react';
import CellLinePicker from "./CellLinePicker";
import TrackCheckbox from "./TrackCheckbox";
import SubmitButton from "./SubmitButton";
import SnpTextField from "./SnpTextField"
import { SnpSearchFlow } from "./Config";
import CutoffSelector from "./CutoffSelector"


export default class SnpPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultTracks: [
                // "Loop", "SNP", "Gene_model", "HiC", "ChromHMM", "LD", "ATAC", "H3K27ac", "H3K4me3", "H3K4me1"
            ],
            cell_types: Object.keys(SnpSearchFlow),
            selected_cell_type: "",
            available_tracks: [],  
            snp: "",
        }
    }
    AllTracks = ["Gene_model", "Loop", "HiC", "TAD", "LD", "SNP","DNase", "H3K9ac","H3K27ac", "H3K4me3", "H3K4me1", "ATAC", "ChromHMM"]

    handleSelectCellType = (value) => {
        this.setState({ selected_cell_type: value })
        console.log("I just select cell type" + value)
        let cellType = value.split("_")[0]
        this.props.setCellType(cellType)
        this.setState({ available_tracks: SnpSearchFlow[value] })
        console.log("this cell line has tracks: " + SnpSearchFlow[value])
    }

    handleSetSnp = (value)  =>{
        console.log("now snp is " + value)
        this.setState({ snp: value })
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >SNP</div>
                {/* <SearchByRadioGroup handleSearchBy = {this.handleSearchBy}/> */}
                <SnpTextField handleSetSnp={this.handleSetSnp}/> 

                {/* <div style={{ marginTop: 8, fontSize: "1.25rem", marginBottom: -10 }} >Step 2.</div>
                <SpeciesRadioGroup /> */}
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Cell type / Tissue</div>
                <CellLinePicker disabled={this.state.cell_types.length === 0} cell_types={this.state.cell_types} handleSelectCellType={this.handleSelectCellType} />
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }}>Tracks</div>
                <TrackCheckbox disabledTracks={this.AllTracks.filter(value => -1 === this.state.available_tracks.indexOf(value))} available_tracks={this.state.available_tracks} setTracks={this.props.setTracks} />
                {/* <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Statistical threshold</div> */}
                {/* <CutoffSelector cutoff={this.props.cutoff} setCutoff={this.props.setCutoff}/> */}
                <div style={{ marginTop: 12 }} />
                <SubmitButton 
                search="snp"
                snp={this.state.snp}
                turnOffWelcome={this.props.turnOffWelcome}
                getTableData={this.props.getTableData}
                cell={this.state.selected_cell_type}
                disease=""
                />
            </div>
        )
    }
}
