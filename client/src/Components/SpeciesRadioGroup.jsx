import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function SpeciesRadioGroup() {
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
            <FormControl component="fieldset">
                {/* <div style={{ fontSize: 14, fontStyle: "italic", fontWeight:"normal", textTransform: 'none', textDecorationLine:"none" }} component="legend">Species</div> */}
                <RadioGroup aria-label="Species" name="Species" value={value} onChange={handleChange}>
                    <FormControlLabel value="Human" control={<Radio />} label={<Typography style={{fontSize:10}}>Human</Typography>} />
                    {/* <FormControlLabel value="Chimp" control={<Radio />} label={<Typography style={{fontSize:13}}>Chimp</Typography>} />
                    <FormControlLabel value="Rat" control={<Radio />} label={<Typography style={{fontSize:13}}>Rat</Typography>} /> */}
                    <FormControlLabel value="Mouse" control={<Radio />} label={<Typography style={{fontSize: 10}}>Mouse</Typography>} />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}