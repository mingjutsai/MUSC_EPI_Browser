import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import { HiGlassComponent, ChromosomeInfo, viewer, version } from 'higlass';
import RowInfoCard from "./RowInfoCard";
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import _ from "lodash";
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function HiGlassTracksDialog(props) {
  const { options, viewConfig, tracksOpen, onClose, rowValue, tracks } = props;

  let tmp = _.cloneDeep(viewConfig)
  console.log("selected: ")
  console.log(tracks)
  console.log("viewconfig tracks:")
  console.log(viewConfig.views[0].tracks.top.map((t)=>t.tilesetUid))
  let availableTracks = viewConfig.views[0].tracks.top.map((t)=>t.tilesetUid)
  tmp.views[0].tracks.top = []
  for (let track of viewConfig.views[0].tracks.top) {
    if (track.tilesetUid === "NyITQvZsS_mOFNlz5C2LJg" || track.tilesetUid === "P0PLbQMwTYGy-5uPIQid7A"){
      tmp.views[0].tracks.top.push(_.cloneDeep(track));
      continue
    }
    for (let selected of tracks){
        if (track.tilesetUid != undefined && track.tilesetUid.toUpperCase().includes(selected.toUpperCase())
           ){
          tmp.views[0].tracks.top.push(_.cloneDeep(track))
        }
    }
  }


  return (
    <Dialog aria-labelledby="HiGlassTracksDialog" PaperComponent={PaperComponent} open={tracksOpen} onClose={onClose} maxWidth="xl"
      fullScreen
      fullWidth={true} style={{ zIndex: 97 }}>
      <IconButton aria-label="cancel" onClick={onClose} style={{ cursor: 'pointer', marginLeft: "10px", marginTop: '5px', width: '40px' }}>
        <CancelIcon style={{ color: "black" }} />
      </IconButton>
      <Paper style={{ marginLeft: 5, marginRight: 5 }}>
        <RowInfoCard rowValue={rowValue} />
      </Paper>
      <HiGlassComponent
        options={options}
        viewConfig={tmp} />
    </Dialog>
  );
}

HiGlassTracksDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  tracksOpen: PropTypes.bool.isRequired,
};