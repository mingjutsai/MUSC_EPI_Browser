import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



export default function CellLinePicker(props) {
  const cell_types = props.cell_types;
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  let handleSelectCellType = (newValue) => {
    props.handleSelectCellType(newValue);
    setValue(newValue);
  }

  return (
    <div style={{  marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, }}>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        // no need for clear icon
        disableClearable

        disabled={props.disabled}

        // no need for the dropdown arrow
        freeSolo
        style={{marginLeft: 10, marginRight:10,  backgroundColor: props.disabled ? "lightGray": "white"}}
        value={value}
        onChange={(event, newValue) => {
          handleSelectCellType(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="CellLinePicker"
        options={cell_types}
        renderOption={(option) => (
          <div style={{ boxShadow: "0 0px 0px rgba(0, 0, 0, 0.15)", fontSize: "1.25rem", color:"black", textRendering: "optimizeLegibility ", textTransform:"None",textSizeAdjust:"none", fontWeight: "normal", fontStyle: "normal", fontKerning:"normal"}}>
            {option}
          </div>
        )}
        renderInput={(params) => <TextField {...params} 
        InputProps={{
          ...params.InputProps,
          style: {
            fontSize: "1.25rem",
        },
        }} 
        label="" variant="outlined" />}
      />
    </div>
  );
}
