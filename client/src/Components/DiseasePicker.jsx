import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



export default function DiseasePicker(props) {
  const diseases = props.diseases;
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  console.log(diseases)

  let handleSelectDisease = (newValue) => {
    props.handleSelectDisease(newValue);
    setValue(newValue);
  }

  return (
    <div style={{  marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        // no need for clear icon
        disableClearable

        // no need for the dropdown arrow
        freeSolo
        style={{marginLeft: 10, marginRight:10}}
        value={value}
        onChange={(event, newValue) => {
          handleSelectDisease(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="DiseasePicker"
        options={diseases}
        renderOption={(option) => (
          <div style={{ width: 200, boxShadow: "0 0px 0px rgba(0, 0, 0, 0.15)", fontSize: "1.3rem", color:"black", textRendering: "optimizeLegibility ", textTransform:"None",textSizeAdjust:"none", fontWeight: "normal", fontStyle: "normal", fontKerning:"normal"}}>
            {option}
          </div>
        )}
        renderInput={(params) => <TextField {...params} 
        InputProps={{
          ...params.InputProps,
          style: {
            fontSize: "1.3rem",
        },
        }} 
        label="" variant="outlined" />}
      />
    </div>
  );
}
