import React, { Component } from 'react';
import GeneTextField from "./GeneTextField";
import SnpDialog from "./SnpDialog";
import CellLinePicker from "./CellLinePicker";
import TrackCheckbox from "./TrackCheckbox";
import LocusDialog from "./LocusDialog";
import SubmitButton from "./SubmitButton";
import SpeciesRadioGroup from "./SpeciesRadioGroup"



export default class GeneDiseasePanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultTracks :["Loop", "SNP", "Gene_model", "H3K4me1"]
        }
    }
      
    render() {
        return (
            <div>
                <SpeciesRadioGroup />
                <CellLinePicker />
                <TrackCheckbox defaultTracks={this.state.defaultTracks}/>
                <GeneTextField />
                <div style={{ marginTop: 12 }} />
                <SubmitButton turnOffWelcome={this.props.turnOffWelcome} />
            </div>
        )
    }
}
