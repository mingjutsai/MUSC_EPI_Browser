import React, { Component } from 'react';
import GeneDialog from "./GeneDialog";
import SnpDialog from "./SnpDialog";
import CellLinePicker from "./CellLinePicker";
import TrackCheckbox from "./TrackCheckbox";
import LocusDialog from "./LocusDialog";
import SubmitButton from "./SubmitButton";
import SnpTextField from "./SnpTextField"
import SpeciesRadioGroup from "./SpeciesRadioGroup"
// import DiseaseTextField from "./DiseasePicker"
import DiseasePicker from './DiseasePicker';
import DiseaseTextField from "./DiseaseTextField"
import { DiseaseSearchFlow } from "./Config";
import CutoffSelector from "./CutoffSelector"


export default class DiseasePanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultTracks: [
                // "Loop", "SNP", "Gene_model", "HiC", "ChromHMM", "LD", "ATAC", "H3K27ac", "H3K4me3", "H3K4me1"
            ],
            selected_disease: "",
            cell_types: [],
            selected_cell_type: "",
            available_tracks: [],
        }
    }

    // Denotes all the tracks including the histone mod tracks 
    AllTracks = ["Gene_model", "Loop", "HiC", "TAD", "LD", "SNP", "H3K27ac", "H3K4me3", "H3K4me1", "ATAC", "ChromHMM"]


    handleSelectDisease = (value) => {
        this.setState({ selected_disease: value })
        console.log("I just select disease" + value)
        this.setState({ cell_types: Object.keys(DiseaseSearchFlow[value]) })
    }

    handleSelectCellType = (value) => {
        this.setState({ selected_cell_type: value })
        console.log("I just select cell type" + value)
        let cellType = value.split("_")[0]
        this.props.setCellType(cellType)
        this.setState({ available_tracks: DiseaseSearchFlow[this.state.selected_disease][value] })
        console.log("this cell line has tracks: " + DiseaseSearchFlow[this.state.selected_disease][value])
    }

    handleSetDisease = (value)  =>{
        console.log("gene name")
        console.log(value)
        this.setState({ disease: value })
    }

    render() {
        const diseases = Object.keys(DiseaseSearchFlow)
        console.log(diseases)
        return (
            <div>
                {/* <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Disease</div>
                <DiseasePicker diseases={diseases} handleSelectDisease={this.handleSelectDisease} /> */}
                {/* above code original by yzhang */}
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Disease</div>
                
                <DiseaseTextField handleSetDisease={this.handleSetDisease}/> 

                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Cell type / Tissue</div>
                <CellLinePicker disabled={this.state.cell_types.length === 0} cell_types={this.state.cell_types} handleSelectCellType={this.handleSelectCellType} />
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Tracks</div>
                <TrackCheckbox disabledTracks={this.AllTracks.filter(value => -1 === this.state.available_tracks.indexOf(value))} available_tracks={this.state.available_tracks} setTracks={this.props.setTracks} />
                <div style={{ marginTop: 8, fontSize: "1.4rem", marginBottom: -10 }} >Statistical threshold</div>
                <CutoffSelector cutoff={this.props.cutoff} setCutoff={this.props.setCutoff} SetKeepSNPinPromoters={this.props.SetKeepSNPinPromoters} keepSNPinPromoters={this.props.keepSNPinPromoters}/>
                <div style={{ marginTop: 12 }} />
                {/* <SubmitButton turnOffWelcome={this.props.turnOffWelcome}
                    getTableData={this.props.getTableData}
                    cell={this.state.selected_cell_type}
                    disease={this.state.selected_disease}
                /> */}
                {/* above code by origianl yzhang */}
                <SubmitButton 
                
                search="disease"
                snp=""
                turnOffWelcome={this.props.turnOffWelcome}
                getTableData={this.props.getTableData}
                cell={this.state.selected_cell_type}
                disease={this.state.disease}
                />
                {/* <GeneDialog />
                <LocusDialog/> */}

            </div>
        )
    }
}
