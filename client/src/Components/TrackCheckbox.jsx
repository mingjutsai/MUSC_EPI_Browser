import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import HistonModTrackPicker from "./HistonModTrackPicker"

const SelectiveCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},

})(props => <Checkbox color="default" size="small" {...props} />);


// Denotes all the tracks including the histone mod tracks 
const AllTracks = ["Gene_model", "Loop", "SNP", "H3K27ac", "H3K4me3", "H3K4me1", "H3K9ac","DNase" , "ATAC", "ChromHMM"]

// Denotes only the histone mod tracks 
const HisMods = ["H3K27ac", "H3K4me3", "H3K4me1", "H3K9ac"]


export default function TrackCheckbox(props) {
    const [state, setState] = React.useState({
        Gene_model: props.available_tracks.includes("Gene_model"),
        ChromHMM: props.available_tracks.includes("ChromHMM"),
        ATAC: props.available_tracks.includes("ATAC"),
        Loop: props.available_tracks.includes("Loop"),
        SNP: props.available_tracks.includes("SNP"),
        DNase: props.available_tracks.includes("DNase"),
        // HiC: props.available_tracks.indexOf("HiC") > -1,
        // TAD: props.available_tracks.includes("TAD"),
        // LD: props.available_tracks.includes("LD"),
        H3K27ac: props.available_tracks.includes("H3K37ac"),
        H3K4me1: props.available_tracks.includes("H3K4me1"),
        H3K4me3: props.available_tracks.includes("H3K4me3"),        
        H3K9ac: props.available_tracks.includes("H3K9ac"),

        // tracks: props.defaultTracks
    });

    React.useEffect(() => {
        if (props.available_tracks) {
            //execute your code.

            let nextState = {}
            for (let track of AllTracks) {
                nextState[track] = props.available_tracks.includes(track)
            }
            setState(nextState);
        }
        console.log('property changed', props.available_tracks);
    }, [props.available_tracks])

    // const componentWillReceiveProps = (nextProps) => {
    //     let nextState = {}
    //     for (let track of AllTracks) {
    //         nextState[track] = nextProps.available_tracks.includes(track)
    //     }
    //     setState(nextState);
    // }

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });

        let tracks = []
        console.log(state)


        for (let t of AllTracks) {
            if (state[t]) {
                tracks.push(t)
            }
        }
        if (tracks.includes(event.target.name)) {
            const index = tracks.indexOf(event.target.name);
            tracks.splice(index, 1);
        } else {
            tracks.push(event.target.name)
        }
        // console.log(tracks)
        props.setTracks(tracks)
    };

    const handleHisModChange = (newValue) => {

        let tracks = []
        for (let t of AllTracks) {
            if (state[t]) {
                tracks.push(t)
            }
        }
        for (let t of HisMods) {
            if (state[t] !== newValue.includes(t)) {
                setState({ ...state, [t]: newValue.includes(t) })
                if (tracks.includes(t)) {
                    const index = tracks.indexOf(t);
                    tracks.splice(index, 1);
                } else {
                    tracks.push(t)
                }
            }
        }
        // console.log(tracks)
        props.setTracks(tracks)
    };

    return (
        <div>

            <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
                {/* <div style={{ fontSize: 14, fontStyle: "italic", fontWeight: "normal", textTransform: 'none' }}> Tracks</div> */}
                <FormGroup column={1}>
                    
                    {
                    // Not let user to choose turn off gene model track
                    /* <FormControlLabel
                        disabled={props.disabledTracks.includes("Gene_model")}
                        control={
                            <Checkbox
                                checked={state.Gene_model}
                                onChange={handleChange}
                                name="Gene_model"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"Gene model"}</span>}
                    /> */}
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("ChromHMM")}
                        control={
                            <Checkbox
                                checked={state.ChromHMM}
                                onChange={handleChange}
                                name="ChromHMM"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"ChromHMM"}</span>}
                    />
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("ATAC")}
                        control={
                            <Checkbox
                                checked={state.ATAC}
                                onChange={handleChange}
                                name="ATAC"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"ATAC"}</span>}
                    />
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("DNase")}
                        control={
                            <Checkbox
                                checked={state.DNase}
                                onChange={handleChange}
                                name="DNase"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"DNase"}</span>}
                    />
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("Loop")}
                        control={
                            <Checkbox
                                checked={state.Loop}
                                onChange={handleChange}
                                name="Loop"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"HiC Loop"}</span>}
                    />

                    {/* <FormControlLabel
                        disabled={props.disabledTracks.includes("HiC")}
                        control={
                            <Checkbox
                                checked={state.HiC}
                                onChange={handleChange}
                                name="HiC"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"HiC  Contact Map"}</span>}
                    /> */}
                    {/* <FormControlLabel
                        disabled={props.disabledTracks.includes("TAD")}
                        control={
                            <Checkbox
                                checked={state.TAD}
                                onChange={handleChange}
                                name="TAD"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"TAD"}</span>}
                    />
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("LD")}
                        control={
                            <Checkbox
                                checked={state.LD}
                                onChange={handleChange}
                                name="LD"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"LD"}</span>}
                    /> */}
                    <FormControlLabel
                        disabled={props.disabledTracks.includes("SNP")}
                        control={
                            <Checkbox
                                checked={state.SNP}
                                onChange={handleChange}
                                name="SNP"
                                color="primary"
                                size="small"
                                style={{ marginLeft: 5 }}
                            />
                        }
                        label={<span style={{ fontSize: '1.2rem' }}>{"SNP"}</span>}
                    />
                    <HistonModTrackPicker disabledTracks={props.disabledTracks} available_tracks={props.available_tracks} handleHisModChange={handleHisModChange} />
                    {/* <FormControlLabel
                        control={<SelectiveCheckbox style={{ marginLeft: 5 }} checked={state.H3K27ac} onChange={handleChange} name="H3K27ac" />}
                        label={<span style={{ fontSize: '1.2rem' }}>{"H3K27ac"}</span>}
                    />
                    <FormControlLabel
                        control={<SelectiveCheckbox style={{ marginLeft: 5 }} checked={state.H3K4me1} onChange={handleChange} name="H3K4me1" />}
                        label={<span style={{ fontSize: '1.2rem' }}>{"H3K4me1"}</span>}
                    />
                    <FormControlLabel
                        control={<SelectiveCheckbox style={{ marginLeft: 5 }} checked={state.H3K4me3} onChange={handleChange} name="H3K4me3" />}
                        label={<span style={{ fontSize: '1.2rem' }}>{"H3K4me3"}</span>}
                    /> */}
                </FormGroup>
            </Box>
        </div>
    );
}
